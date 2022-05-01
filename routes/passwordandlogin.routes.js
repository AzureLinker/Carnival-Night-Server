const Router = require('express')
const router = new Router()
const passwordandloginController = require('../controller/passwordandlogin.controller')

router.post('/passwordandlogin', passwordandloginController.createPasswordAndLogin)
router.get('/passwordandlogin', passwordandloginController.getPasswordAndLogins)
router.get('/passwordandlogin/:id', passwordandloginController.getOnePasswordAndLogin)
router.put('/passwordandlogin', passwordandloginController.updatePasswordAndLogin)
router.delete('/passwordandlogin/:id', passwordandloginController.deletePasswordAndLogin)

module.exports = router