const service = require('../services/user');
const util = require('../utils');

const controller = {
  getAll: async (req, res) => {
    try {
      const {
        query: {
          limit = 10,
          page = 0,
          sortOrder = 'DESC',
          sortKey = 'createdAt',
          ...condition
        } = {},
      } = req;
      const data = await service.getAll(
        condition,
        limit,
        page,
        sortOrder,
        sortKey,
      );
      return util.sendResponse(res, 200, 'Data retrieved', data);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return util.sendResponse(res, 400, 'Bad request');
    }

    try {
      const user = await service.getById(id);
      if (!user) {
        return util.sendResponse(res, 400, `User userId:${id} does not exist`);
      }
      return util.sendResponse(res, 200, 'Data found', user);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
  createNew: async (req, res) => {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.username ||
      !req.body.password ||
      !req.body.email ||
      !req.body.status
    ) {
      return util.sendResponse(res, 400, 'Bad request');
    }
    const payload = req.body;
    try {
      const user = await service.createNew(payload);
      return util.sendResponse(res, 201, 'Data created', user);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
  update: async (req, res) => {
    const payload = req.body;
    const { id } = req.params;

    if (!id) {
      return util.sendResponse(res, 400, 'Bad request');
    }

    try {
      const updatedUser = await service.update(id, payload);

      if (!updatedUser) {
        return util.sendResponse(res, 400, `User id:${id} does not exist`);
      }

      return util.sendResponse(
        res,
        200,
        'Data updated sucessfully',
        updatedUser,
      );
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return util.sendResponse(res, 400, 'Bad request');
    }

    try {
      const deletedUser = await service.delete(id);
      if (deletedUser) {
        return util.sendResponse(res, 204, 'Data deleted');
      }
      return util.sendResponse(res, 400, `User id:${id} does not exist`);
    } catch (error) {
      console.log(error);
      return util.sendResponse(res, 500, 'Server error');
    }
  },
};

module.exports = controller;
