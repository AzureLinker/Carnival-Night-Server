const db = require('../db')

class GamesAndGenresController {
    async createGamesAndGenres (req, res) {
        const {idGames, idGenres} = req.body
        const newGamesAndGenres = await db.query( `INSERT INTO GamesAndGenres (idgames, idgenres) values ($1, $2) RETURNING *`, [idGames, idGenres])
        res.json (newGamesAndGenres.rows[0])
    }
    async getGamesAndGenre(req, res) {
        const gamesandgenres = await db.query(`SELECT * FROM GamesAndGenres`)
        res.json(gamesandgenres.rows)
    }
    async getOneGamesAndGenres (req, res) {
        const idGamesAndGenres = req.params.id
        const gamesandgenres = await db.query(`SELECT * FROM GamesAndGenres where idGamesAndGenres = $1`, [idGamesAndGenres])
        res.json(gamesandgenres.rows[0])
    }
    async updateGamesAndGenres (req, res) {
        const {idGamesAndGenres, idGames, idGenres} = req.body
        const gamesandgenres = await db.query(`UPDATE GamesAndGenres set idGames = $1, idGenros = $2 where idGamesAndGenres = $3 RETURNING *`, [idGames, idGenres, idGamesAndGenres] )
        res.json(gamesandgenres.rows[0])
    }
    async deleteGamesAndGenres (req, res) {
        const idGamesAndGenres = req.params.id
        const gamesandgenres = await db.query(`DELETE FROM GamesAndGenres where idGamesAndGenres = $1`, [idGamesAndGenres])
        res.json(gamesandgenres.rows[0])
    }
}   

module.exports = new GamesAndGenresController();
