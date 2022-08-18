'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPermissions extends Model {
    static associate(models) {
      UserPermissions.belongsTo(models.users, {
        foreignKey: 'userId',
        targetKey: 'id',
      }),
        UserPermissions.belongsTo(models.permissions, {
          foreignKey: 'permissionId',
          targetKey: 'id',
        });
    }
  }
  UserPermissions.init(
    {
      userId: DataTypes.UUID,
      permissionId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'user_permissions',
    },
  );
  return UserPermissions;
};
