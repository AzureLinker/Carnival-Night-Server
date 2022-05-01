const Router = require('express')
const router = new Router()
const gamesandgenresController = require('../controller/gamesandgenres.controller')

router.post('/gamesandgenres', gamesandgenresController.createGamesAndGenres)
router.get('/gamesandgenres', gamesandgenresController.getGamesAndGenre)
router.get('/gamesandgenres/:id', gamesandgenresController.getOneGamesAndGenres)
router.put('/gamesandgenres', gamesandgenresController.updateGamesAndGenres)
router.delete('/gamesandgenres/:id', gamesandgenresController.deleteGamesAndGenres)

module.exports = router