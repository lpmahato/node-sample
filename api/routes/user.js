const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.findAll);
router.post('/', userController.create);
router.get('/:id', userController.findOne);

module.exports = router;
