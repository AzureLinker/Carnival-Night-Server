const db = require('../db')

class GamesController {
    async createGames (req, res) {
        const {Name_of_the_game, Description_of_the_game, Path_to_the_directory} = req.body
        const newGames = await db.query( `INSERT INTO Games (Name_of_the_game, Description_of_the_game, Path_to_the_directory) values ($1, $2, $3) RETURNING *` [Name_of_the_game, Description_of_the_game, Path_to_the_directory])
        res.json (newGames.rows[0])
    }
    async getGames(req, res) {
        const user = await db.query('SELECT * FROM Games')
        res.json(user.rows)
    }
    async getOneGame (req, res) {
        const idGames = req.params.id
        const user = await db.query('SELECT * FROM Games where idGames = $1', [idGames])
        res.json(user.ress[0])
    }
    async updateGames (req, res) {
        const {idGames, Name_of_the_game, Description_of_the_game, Path_to_the_directory} = req.body
        const user = await db.query('UPDATE Games set Name_of_the_game = $1, Description_of_the_game = $2, Path_to_the_directory = $3, idGames = $4 RETURNING *', [Name_of_the_game, Description_of_the_game, Path_to_the_directory, idGames] )
        res.json(user.rows[0])
    }
    async deleteGames (req, res) {
        const idGames = req.params.id
        const user = await db.query('DELETE FROM Games where idUser = $1', [idGames])
        res.json(user.ress[0])
    }
}   