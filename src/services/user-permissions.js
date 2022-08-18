const { user_permissions: model } = require('../models');

const service = {
  createNew: (data) => model.create(data),
  delete: (userId, permissionId) =>
    model.destroy({ where: { userId, permissionId } }),
};

module.exports = service;
