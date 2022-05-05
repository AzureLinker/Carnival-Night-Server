<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const commentsController = require('../controller/comments.controller')

router.post('/comments', commentsController.createComments)
router.get('/comments', commentsController.getComments)
router.get('/comments/:id', commentsController.getOneComment)
router.put('/comments', commentsController.updateComments)
router.delete('/comments/:id', commentsController.deleteComments)

module.exports = router
=======
const Router = require('express')
const router = new Router()
const commentsController = require('../controller/comments.controller')

router.post('/comments', commentsController.createComments)
router.get('/comments', commentsController.getComments)
router.get('/comments/:id', commentsController.getOneComment)
router.put('/comments', commentsController.updateComments)
router.delete('/comments/:id', commentsController.deleteComments)

module.exports = router
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
