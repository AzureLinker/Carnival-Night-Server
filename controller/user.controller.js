const db = require('../db')

class UserController {
    async createUser (req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query( `INSERT INTO user (ThePathToTheAvatar,Nikname) values ($1, $2) RETURNING *` [ThePathToTheAvatar,Nikname])

        res.json (newPerson.rows[0])
    }
    async getUsers(req, res) {
        const user = await db.query(`SELECT * FROM user`)
        res.json(user)
    }
    async getOneUser (req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM user where idUser = $1', [idUser])
        res.json(user.ress[0])
    }
    async updateUser (req, res) {
        const {idUser, ThePathToTheAvatar, Nikname} = req.body
        const user = await db.query('UPDATE user set ThePathToTheAvatar = $1, Nikname = $2 where idUser = $3 RETURNING *', [ThePathToTheAvatar, Nikname, idUser] )
        res.json(user.rows[0])
    }
    async deleteUser (req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM user where idUser = $1', [idUser])
        res.json(user.ress[0])
    }
}   
