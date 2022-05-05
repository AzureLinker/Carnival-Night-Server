const Router = require('express')
const router = new Router()
const GamesAndGenresController = require('../controller/gamesandgeners.controller')

router.post('/gamesandgenres', GamesAndGenresController.createGamesAndGenres)
router.get('/gamesandgenres', GamesAndGenresController.getGamesAndGenre)
router.get('/gamesandgenres/:id', GamesAndGenresController.getOneGamesAndGenres)
router.put('/gamesandgenres', GamesAndGenresController.updateGamesAndGenres)
router.delete('/gamesandgenres/:id', GamesAndGenresController.deleteGamesAndGenres)

module.exports = router