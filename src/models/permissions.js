const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Permissions extends Model {
    static associate(models) {
      Permissions.hasMany(models.user_permissions, {
        foreignKey: 'permissionId',
        onDelete: "CASCADE",
        sourceKey: 'id',
      });
    }
  }
  Permissions.init(
    {
      code: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'permissions',
    },
  );

  return Permissions;
};
