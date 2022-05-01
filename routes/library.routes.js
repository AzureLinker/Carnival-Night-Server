const Router = require('express')
const router = new Router()
const libraryController = require('../controller/library.controller')

router.post('/library', libraryController.createlibrary)
router.get('/library', libraryController.getlibrarys)
router.get('/library/:id', libraryController.getOnelibrary)
router.put('/library', libraryController.updatelibrary)
router.delete('/library/:id', libraryController.deletelibrary)

module.exports = router