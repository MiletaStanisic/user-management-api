const { permissions: model } = require('../models');

const service = {
  getAll: () => model.findAll(),
};

module.exports = service;
