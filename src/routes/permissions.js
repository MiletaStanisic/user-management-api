const Router = require('express');
const controller = require('../controllers/permissions');

const router = new Router();

router.get('/', controller.getAll);

module.exports = router;
