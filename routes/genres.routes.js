<<<<<<< HEAD
const Router = require('express')
const router = new Router()
const genresController = require('../controller/genres.controller')

router.post('/genres', genresController.createGenres)
router.get('/genres', genresController.getGenres)
router.get('/genres/:id', genresController.getOneGenre)
router.put('/genres', genresController.updateGenres)
router.delete('/genres/:id', genresController.deleteGenres)

=======
const Router = require('express')
const router = new Router()
const genresController = require('../controller/genres.controller')

router.post('/genres', genresController.createGenres)
router.get('/genres', genresController.getGenres)
router.get('/genres/:id', genresController.getOneGenre)
router.put('/genres', genresController.updateGenres)
router.delete('/genres/:id', genresController.deleteGenres)

>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
module.exports = router