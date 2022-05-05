<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const libraryController = require('../controller/library.controller')

router.post('/library', libraryController.createlibrary)
router.get('/library', libraryController.getlibrarys)
router.get('/library/:id', libraryController.getOnelibrary)
router.put('/library', libraryController.updatelibrary)
router.delete('/library/:id', libraryController.deletelibrary)

=======
const Router = require('express')
const router = new Router()
const libraryController = require('../controller/library.controller')

router.post('/library', libraryController.createlibrary)
router.get('/library', libraryController.getlibrarys)
router.get('/library/:id', libraryController.getOnelibrary)
router.put('/library', libraryController.updatelibrary)
router.delete('/library/:id', libraryController.deletelibrary)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router