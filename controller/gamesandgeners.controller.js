const db = require('../db')

class GamesAndGenresController {
    async createUser (req, res) {
        const {idGames, idGenres} = req.body
        const newGamesAndGenres = await db.query( `INSERT INTO GamesAndGenres (idGames, idGenres) values ($idGames, $idGenres) RETURNING *` [idGames, idGenres])
        res.json (newGamesAndGenres.rows[0])
    }
    async getGamesAndGenre(req, res) {
        const gamesandgenres = await db.query(`SELECT * FROM GamesAndGenres`)
        res.json(gamesandgenres.rows)
    }
    async getOneGamesAndGenres (req, res) {
        const idGamesAndGenres = req.params.id
        const gamesandgenres = await db.query(`SELECT * FROM GamesAndGenres where idGamesAndGenres = $idGamesAndGenres`, [idGamesAndGenres])
        res.json(gamesandgenres.ress[0])
    }
    async updateGamesAndGenres (req, res) {
        const {idGamesAndGenres, idGames, idGenres} = req.body
        const gamesandgenres = await db.query(`UPDATE GamesAndGenres set idGames = $idGames, idGenres = $idGenres where idGamesAndGenres = $idGamesAndGenres RETURNING *`, [idGames, idGenres, idGamesAndGenres] )
        res.json(gamesandgenres.rows[0])
    }
    async deleteGamesAndGenres (req, res) {
        const idGamesAndGenres = req.params.id
        const gamesandgenres = await db.query(`DELETE FROM GamesAndGenres where idGamesAndGenres = $idGamesAndGenres`, [idGamesAndGenres])
        res.json(gamesandgenres.ress[0])
    }
}   

module.exports = new GamesAndGenresController();
