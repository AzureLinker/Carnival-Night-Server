const Router = require('express')
const router = new Router()
const commentsController = require('../controller/comments.controller')

router.post('/comments', commentsController.createComments)
router.get('/comments', commentsController.getComments)
router.get('/comments/:id', commentsController.getOneComments)
router.put('/comments', commentsController.updateComments)
router.delete('/comments/:id', commentsController.deleteComments)

module.exports = router