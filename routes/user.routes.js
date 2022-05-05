<<<<<<< HEAD
const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
module.exports = router;
=======
const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
roter.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)
module.exports = router
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
