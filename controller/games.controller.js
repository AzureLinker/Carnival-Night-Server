const db = require('../db')

class GamesController {
    async createGames (req, res) {
        const {Name_of_the_game, Description_of_the_game, Path_to_the_directory} = req.body
        const newGames = await db.query( `INSERT INTO Games (Name_of_the_game, Description_of_the_game, Path_to_the_directory) values ($Name_of_the_game, $Description_of_the_game, $Path_to_the_directory) RETURNING *` [Name_of_the_game, Description_of_the_game, Path_to_the_directory])
        res.json (newGames.rows[0])
    }
    async getGames(req, res) {
        const user = await db.query(`SELECT * FROM Games`)
        res.json(user.rows)
    }
    async getOneGame (req, res) {
        const idGames = req.params.id
        const user = await db.query(`SELECT * FROM Games where idGames = $idGames`, [idGames])
        res.json(user.ress[0])
    }
    async updateGames (req, res) {
        const {idGames, Name_of_the_game, Description_of_the_game, Path_to_the_directory} = req.body
        const user = await db.query(`UPDATE Games set Games = $Games, Name_of_the_game, Description_of_the_game = $Description_of_the_game, Path_to_the_directory = $Path_to_the_directory, idGames = $idGames RETURNING *`, [Name_of_the_game, Description_of_the_game, Path_to_the_directory, idGames] )
        res.json(user.rows[0])
    }
    async deleteGames (req, res) {
        const idGames = req.params.id
        const user = await db.query(`DELETE FROM Games where idGames = $idGames`, [idGames])
        res.json(user.ress[0])
    }
}   

module.exports = new GamesController();
