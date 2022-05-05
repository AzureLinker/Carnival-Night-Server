<<<<<<< HEAD
const db = require('../db')

class PasswordAndLoginController {
    async createPasswordAndLogin (req, res) {
        const {Logins, Passwords, ConfirmationCode, DateOfConfirmation, DateOfPasswordChange} = req.body
        const newPasswordAndLogin = await db.query( `INSERT INTO PasswordAndLogin (logins, passwords, confirmationcode, dateofconfirmation, dateofpasswordchange) values ($1, $2, $3, $4, $5) RETURNING *`, [Logins, Passwords, ConfirmationCode, DateOfConfirmation, DateOfPasswordChange])
        res.json (newPasswordAndLogin.rows[0])
    }
    async getPasswordAndLogins(req, res) {
        const passwordandlogin = await db.query(`SELECT * FROM PasswordAndLogin`)
        res.json(passwordandlogin.rows)
    }
    async getOnePasswordAndLogin (req, res) {
        const idPasswordAndLogin = req.params.id
        const passwordandlogin = await db.query(`SELECT * FROM PasswordAndLogin where idPasswordAndLogin = $1`, [idPasswordAndLogin])
        res.json(passwordandlogin.rows[0])
    }
    async updatePasswordAndLogin (req, res) {
        const {idPasswordAndLogin, Logins, Passwords, ConfirmationCode} = req.body
        const passwordandlogin = await db.query(`UPDATE PasswordAndLogin set Logins = $1, Passwords = $2, ConfirmationСode = $3 where idPasswordAndLogin = $4 RETURNING *`, [Logins, Passwords, ConfirmationCode, idPasswordAndLogin] )
        res.json(passwordandlogin.rows[0])
    }
    async deletePasswordAndLogin (req, res) {
        const idPasswordAndLogin = req.params.id
        const passwordandlogin = await db.query(`DELETE FROM PasswordAndLogin where idPasswordAndLogin = $1`, [idPasswordAndLogin])
        res.json(passwordandlogin.rows[0])
    }
}   

module.exports = new PasswordAndLoginController();
=======
const db = require('../db')

class PasswordAndLoginController {
    async createPasswordAndLogin (req, res) {
        const {Login, Password, ConfirmationСode, DateOfConfirmation, DateOfPasswordChange} = req.body
        const newPasswordAndLogin = await db.query( `INSERT INTO PasswordAndLogin (Login, Password, ConfirmationСode, DateOfConfirmation, DateOfPasswordChange) values ($Login, $Password, $ConfirmationСode, $DateOfConfirmation, $DateOfPasswordChange) RETURNING *`, [Login, Password, ConfirmationСode, DateOfConfirmation, DateOfPasswordChange])
        res.json (newPasswordAndLogin.rows[0])
    }
    async getPasswordAndLogins(req, res) {
        const passwordandlogin = await db.query(`SELECT * FROM PasswordAndLogin`)
        res.json(passwordandlogin.rows)
    }
    async getOnePasswordAndLogin (req, res) {
        const idPasswordAndLogin = req.params.id
        const passwordandlogin = await db.query(`SELECT * FROM PasswordAndLogin where idPasswordAndLogin = $idPasswordAndLogin`, [idPasswordAndLogin])
        res.json(passwordandlogin.ress[0])
    }
    async updatePasswordAndLogin (req, res) {
        const {idPasswordAndLogin, Login, Password, ConfirmationСode} = req.body
        const passwordandlogin = await db.query(`UPDATE PasswordAndLogin set Login = $Login, Password = $Password, ConfirmationСode = $ConfirmationСode where idPasswordAndLogin = $idPasswordAndLogin RETURNING *`, [Login, Password, ConfirmationСode, idPasswordAndLogin] )
        res.json(passwordandlogin.rows[0])
    }
    async deletePasswordAndLogin (req, res) {
        const idPasswordAndLogin = req.params.id
        const passwordandlogin = await db.query(`DELETE FROM PasswordAndLogin where idPasswordAndLogin = $idPasswordAndLogin`, [idPasswordAndLogin])
        res.json(passwordandlogin.ress[0])
    }
}   

module.exports = new PasswordAndLoginController();
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
