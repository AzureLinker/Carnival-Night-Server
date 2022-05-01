const Router = require('express')
const router = new Router()
const gamesController = require('../controller/games.controller')

router.post('/games', gamesController.createGames)
router.get('/games', gamesController.getGames)
router.get('/games/:id', gamesController.getOneGame)
router.put('/games', gamesController.updateGames)
router.delete('/games/:id', gamesController.deleteGames)

module.exports = router