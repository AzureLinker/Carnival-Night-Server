<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const passwordandloginController = require('../controller/passwordandlogin.controller')

router.post('/passwordandlogin', passwordandloginController.createPasswordAndLogin)
router.get('/passwordandlogin', passwordandloginController.getPasswordAndLogins)
router.get('/passwordandlogin/:id', passwordandloginController.getOnePasswordAndLogin)
router.put('/passwordandlogin', passwordandloginController.updatePasswordAndLogin)
router.delete('/passwordandlogin/:id', passwordandloginController.deletePasswordAndLogin)

=======
const Router = require('express')
const router = new Router()
const passwordandloginController = require('../controller/passwordandlogin.controller')

router.post('/passwordandlogin', passwordandloginController.createPasswordAndLogin)
router.get('/passwordandlogin', passwordandloginController.getPasswordAndLogins)
router.get('/passwordandlogin/:id', passwordandloginController.getOnePasswordAndLogin)
router.put('/passwordandlogin', passwordandloginController.updatePasswordAndLogin)
router.delete('/passwordandlogin/:id', passwordandloginController.deletePasswordAndLogin)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router