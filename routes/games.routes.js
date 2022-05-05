<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const gamesController = require('../controller/games.controller')

router.post('/games', gamesController.createGames)
router.get('/games', gamesController.getGames)
router.get('/games/:id', gamesController.getOneGame)
router.put('/games', gamesController.updateGames)
router.delete('/games/:id', gamesController.deleteGames)

=======
const Router = require('express')
const router = new Router()
const gamesController = require('../controller/games.controller')

router.post('/games', gamesController.createGames)
router.get('/games', gamesController.getGames)
router.get('/games/:id', gamesController.getOneGame)
router.put('/games', gamesController.updateGames)
router.delete('/games/:id', gamesController.deleteGames)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router