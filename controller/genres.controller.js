const db = require('../db')

class GenresController {
    async createGenres (req, res) {
        const {Name_of_the_genre} = req.body
        const newGenres = await db.query( `INSERT INTO Genres (Name_of_the_genre) values ($1) RETURNING *`, [Name_of_the_genre])
        res.json (newGenres.rows[0])
    }
    async getGenres(req, res) {
        const genres = await db.query(`SELECT * FROM Genres`)
        res.json(genres.rows)
    }
    async getOneGenre (req, res) {
        const idGenres = req.params.id
        const genres = await db.query(`SELECT * FROM Genres where idGenres = $1`, [idGenres])
        res.json(genres.rows[0])
    }
    async updateGenres (req, res) {
        const {idGenres, Name_of_the_genre} = req.body
        const genres = await db.query(`UPDATE Genres set Name_of_the_genre = $1 where idGenres = $2 RETURNING *`, [Name_of_the_genre, idGenres] )
        res.json(genres.rows[0])
    }
    async deleteGenres (req, res) {
        const idGenres = req.params.id
        const genres = await db.query(`DELETE FROM Genres where idGenres = $1`, [idGenres])
        res.json(genres.rows[0])
    }
}   

module.exports = new GenresController();
