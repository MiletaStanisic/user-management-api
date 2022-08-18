const service = require('../services/user-permissions');
const util = require('../utils');

const controller = {
  createNew: async (req, res) => {
    if (!req.body.userId || !req.body.permissionId) {
      return util.sendResponse(res, 400, 'Bad requess');
    }
    const {
      body: { userId, permissionId },
    } = req;
    const payload = {
      userId,
      permissionId,
    };
    try {
      const createdItem = await service.createNew(payload);
      return util.sendResponse(res, 201, 'Data created', createdItem);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
  delete: async (req, res) => {
    const { params: { userId } = {}, body: { permissionId } = {} } = req;

    if (!userId || !permissionId) {
      return util.sendResponse(res, 400, 'Bad request');
    }

    try {
      const deletedItem = await service.delete(userId, permissionId);
      if (deletedItem) {
        return util.sendResponse(res, 204, 'Data deleted');
      }
      return util.sendResponse(res, 400, `User id: ${userId} does not exists`);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
};

module.exports = controller;
