const service = require('../services/permissions');
const util = require('../utils');

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await service.getAll();
      return util.sendResponse(res, 200, 'Data retrieved', data);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
};

module.exports = controller;
