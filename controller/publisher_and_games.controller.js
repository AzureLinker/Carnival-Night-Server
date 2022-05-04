const db = require('../db')

class Publisher_and_GamesController {
    async createPublisher_and_Games (req, res) {
        const {idGames, idPublisher} = req.body
        const newPublisher_and_Games = await db.query( `INSERT INTO Publisher_and_Games (idGames, idPublisher) values ($idGames, $idPublisher) RETURNING *`, [idGames, idPublisher])
        res.json (newPublisher_and_Games.rows[0])
    }
    async getPublisher_and_Games(req, res) {
        const publisher_and_games = await db.query(`SELECT * FROM Publisher_and_Games`)
        res.json(publisher_and_games.rows)
    }
    async getOnePublisher_and_Game (req, res) {
        const idpublisher_and_games = req.params.id
        const publisher_and_games = await db.query(`SELECT * FROM Publisher_and_Games where idPublisher_and_Games = $idPublisher_and_Games`, [idPublisher_and_Games])
        res.json(publisher_and_games.ress[0])
    }
    async updatePublisher_and_Games (req, res) {
        const {idGames, idPublisher} = req.body
        const publisher_and_games = await db.query(`UPDATE Publisher_and_Games set idGames = $idGames, idPublisher = $idPublisher where idPublisher_and_Games = $idPublisher_and_Games RETURNING *`, [idGames, idPublisher, idPublisher_and_Games] )
        res.json(publisher_and_games.rows[0])
    }
    async deletePublisher_and_Games (req, res) {
        const idpublisher_and_games = req.params.id
        const publisher_and_games = await db.query(`DELETE FROM Publisher_and_Games where idPublisher_and_Games = $idPublisher_and_Games`, [idPublisher_and_Games])
        res.json(publisher_and_games.ress[0])
    }
}   

module.exports = new Publisher_and_GamesController();
