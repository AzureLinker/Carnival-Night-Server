const Router = require('express')
const router = new Router()
const publisherController = require('../controller/publisher.controller')

router.post('/publisher', publisherController.createPublisher)
router.get('/publisher', publisherController.getPublishers)
router.get('/publisher/:id', publisherController.getOnePublisher)
router.put('/publisher', publisherController.updatePublisher)
router.delete('/publisher/:id', publisherController.deletePublisher)

module.exports = router