const Router = require('express');
const controller = require('../controllers/user');

const router = new Router();

router.post('/', controller.createNew);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
