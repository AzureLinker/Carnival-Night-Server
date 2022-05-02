const db = require('../db')

class UserController {
    async createUser (req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query( `INSERT INTO User (ThePathToTheAvatar, Nikname) values ($ThePathToTheAvatar, $Nikname) RETURNING *` [ThePathToTheAvatar,Nikname])
        res.json (newPerson.rows[0])
    }
    async getUsers(req, res) {
        const user = await db.query('SELECT * FROM User')
        res.json(user.rows)
    }
    async getOneUser (req, res) {
        const idUser = req.params.id
        const user = await db.query('SELECT * FROM User where idUser = $idUser', [idUser])
        res.json(user.ress[0])
    }
    async updateUser (req, res) {
        const {idUser, ThePathToTheAvatar, Nikname} = req.body
        const user = await db.query('UPDATE User set ThePathToTheAvatar = $ThePathToTheAvatar, Nikname = $Nikname where idUser = $idUser RETURNING *', [ThePathToTheAvatar, Nikname, idUser] )
        res.json(user.rows[0])
    }
    async deleteUser (req, res) {
        const idUser = req.params.id
        const user = await db.query('DELETE FROM User where idUser = $idUser', [idUser])
        res.json(user.ress[0])
    }
}   
