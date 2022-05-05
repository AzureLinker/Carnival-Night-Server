<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const GamesAndGenresController = require('../controller/gamesandgeners.controller')

router.post('/gamesandgenres', GamesAndGenresController.createGamesAndGenres)
router.get('/gamesandgenres', GamesAndGenresController.getGamesAndGenre)
router.get('/gamesandgenres/:id', GamesAndGenresController.getOneGamesAndGenres)
router.put('/gamesandgenres', GamesAndGenresController.updateGamesAndGenres)
router.delete('/gamesandgenres/:id', GamesAndGenresController.deleteGamesAndGenres)

=======
const Router = require('express')
const router = new Router()
const gamesandgenresController = require('../controller/gamesandgenres.controller')

router.post('/gamesandgenres', gamesandgenresController.createGamesAndGenres)
router.get('/gamesandgenres', gamesandgenresController.getGamesAndGenre)
router.get('/gamesandgenres/:id', gamesandgenresController.getOneGamesAndGenres)
router.put('/gamesandgenres', gamesandgenresController.updateGamesAndGenres)
router.delete('/gamesandgenres/:id', gamesandgenresController.deleteGamesAndGenres)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router