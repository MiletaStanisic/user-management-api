const Router = require('express');
const controller = require('../controllers/user-permissions');

const router = new Router();

router.post('/', controller.createNew);
router.delete('/:userId', controller.delete);

module.exports = router;
