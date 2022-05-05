<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const publisherController = require('../controller/publisher.controller')

router.post('/publisher', publisherController.createPublisher)
router.get('/publisher', publisherController.getPublishers)
router.get('/publisher/:id', publisherController.getOnePublisher)
router.put('/publisher', publisherController.updatePublisher)
router.delete('/publisher/:id', publisherController.deletePublisher)

=======
const Router = require('express')
const router = new Router()
const publisherController = require('../controller/publisher.controller')

router.post('/publisher', publisherController.createPublisher)
router.get('/publisher', publisherController.getPublishers)
router.get('/publisher/:id', publisherController.getOnePublisher)
router.put('/publisher', publisherController.updatePublisher)
router.delete('/publisher/:id', publisherController.deletePublisher)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router