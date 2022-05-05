<<<<<<< HEAD
const db = require('../db')

class UserController {
    async createUser (req, res) {
        const {PasswordAndLogin, ThePathToTheAvatar, Nickname} = req.body
        const newPerson = await db.query( `INSERT INTO users (passwordandlogin, ThePathToTheAvatar, Nickname) values ($1, $2, $3) RETURNING *`, [PasswordAndLogin, ThePathToTheAvatar,Nickname])
        res.json (newPerson.rows[0])
    }
    async getUsers(req, res) {
        const user = await db.query(`SELECT * FROM users`)
        res.json(user.rows)
    }
    async getOneUser (req, res) {
        const idUser = req.params.id
        const user = await db.query(`SELECT * FROM users where idUser = $1`, [idUser])
        res.json(user.rows[0])
    }
    async updateUser (req, res) {
        const {idUser, ThePathToTheAvatar, Nikname} = req.body
        const user = await db.query(`UPDATE users set ThePathToTheAvatar = $1, Nikname = $2 where idUser = $3 RETURNING *`, [ThePathToTheAvatar, Nikname, idUser] )
        res.json(user.rows[0])
    }
    async deleteUser (req, res) {
        const idUser = req.params.id
        const user = await db.query(`DELETE FROM users where idUser = $1`, [idUser])
        res.json(user.rows[0])
    }
}   

module.exports = new UserController();
=======
const db = require('../db')

class UserController {
    async createUser (req, res) {
        const {ThePathToTheAvatar, Nikname} = req.body
        const newPerson = await db.query( `INSERT INTO User (ThePathToTheAvatar,Nikname) values ($ThePathToTheAvatar, $Nikname) RETURNING *`, [ThePathToTheAvatar,Nikname])
        res.json (newPerson.rows[0])
    }
    async getUsers(req, res) {
        const user = await db.query(`SELECT * FROM User`)
        res.json(user.rows)
    }
    async getOneUser (req, res) {
        const idUser = req.params.id
        const user = await db.query(`SELECT * FROM User where idUser = $idUser`, [idUser])
        res.json(user.ress[0])
    }
    async updateUser (req, res) {
        const {idUser, ThePathToTheAvatar, Nikname} = req.body
        const user = await db.query(`UPDATE User set ThePathToTheAvatar = $ThePathToTheAvatar, Nikname = $Nikname where idUser = $idUser RETURNING *`, [ThePathToTheAvatar, Nikname, idUser] )
        res.json(user.rows[0])
    }
    async deleteUser (req, res) {
        const idUser = req.params.id
        const user = await db.query(`DELETE FROM User where idUser = $idUser`, [idUser])
        res.json(user.ress[0])
    }
}   

module.exports = new UserController();
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
