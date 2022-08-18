const { users: model, user_permissions, permissions } = require('../models');

const service = {
  getAll: (query, limit, page, sortOrder, sortKey) =>
    model.findAndCountAll({
      where: query,
      offset: page * limit,
      limit,
      order: [[sortKey, sortOrder]],
      distinct: true,
      include: [
        {
          model: user_permissions,
          attributes: { exclude: ['username', 'password'] },
          include: [
            {
              model: permissions,
              attributes: ['id', 'code', 'description'],
            },
          ],
        },
      ],
    }),
  getById: (id) =>
    model.findOne({
      where: { id },
      attributes: { exclude: ['username', 'password'] },
      include: [
        {
          model: user_permissions,
          include: [
            {
              model: permissions,
              attributes: ['id', 'code', 'description'],
            },
          ],
        },
      ],
    }),
  createNew: (data) => model.create(data),
  update: (id, payload) => model.update(payload, { where: { id } }),
  delete: (id) => model.destroy({ where: { id } }),
};

module.exports = service;
