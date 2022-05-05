<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const publisher_and_gamesController = require('../controller/publisher_and_games.controller')

router.post('/publisher_and_games', publisher_and_gamesController.createPublisher_and_Games)
router.get('/publisher_and_games', publisher_and_gamesController.getPublisher_and_Games)
router.get('/publisher_and_game/:id', publisher_and_gamesController.getOnePublisher_and_Game)
router.put('/publisher_and_games', publisher_and_gamesController.updatePublisher_and_Games)
router.delete('/publisher_and_games/:id', publisher_and_gamesController.deletePublisher_and_Games)

=======
const Router = require('express')
const router = new Router()
const publisher_and_gamesController = require('../controller/publisher_and_games.controller')

router.post('/publisher_and_games', publisher_and_gamesController.createPublisher_and_Games)
router.get('/publisher_and_games', publisher_and_gamesController.getPublisher_and_Games)
router.get('/publisher_and_game/:id', publisher_and_gamesController.getOnePublisher_and_Game)
router.put('/publisher_and_games', publisher_and_gamesController.updatePublisher_and_Games)
router.delete('/publisher_and_games/:id', publisher_and_gamesController.deletePublisher_and_Games)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router