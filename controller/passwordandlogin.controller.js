const db = require('../db')

class PasswordAndLoginController {
    async createPasswordAndLogin (req, res) {
        const {Login, Password, ConfirmationСode, DateOfConfirmation, DateOfPasswordChange} = req.body
        const newPasswordAndLogin = await db.query( `INSERT INTO PasswordAndLogin (Login, Password, ConfirmationСode, DateOfConfirmation, DateOfPasswordChange) values ($Login, $Password, $ConfirmationСode, $DateOfConfirmation, $DateOfPasswordChange) RETURNING *` [Login, Password, ConfirmationСode, DateOfConfirmation, DateOfPasswordChange])
        res.json (newPasswordAndLogin.rows[0])
    }
    async getPasswordAndLogins(req, res) {
        const passwordandlogin = await db.query('SELECT * FROM PasswordAndLogin')
        res.json(passwordandlogin.rows)
    }
    async getOnePasswordAndLogin (req, res) {
        const idPasswordAndLogin = req.params.id
        const passwordandlogin = await db.query('SELECT * FROM PasswordAndLogin where idPasswordAndLogin = $idPasswordAndLogin', [idPasswordAndLogin])
        res.json(passwordandlogin.ress[0])
    }
    async updatePasswordAndLogin (req, res) {
        const {idPasswordAndLogin, Login, Password, ConfirmationСode} = req.body
        const passwordandlogin = await db.query('UPDATE PasswordAndLogin set Login = $Login, Password = $Password, ConfirmationСode = $ConfirmationСode where idPasswordAndLogin = $idPasswordAndLogin RETURNING *', [Login, Password, ConfirmationСode, idPasswordAndLogin] )
        res.json(passwordandlogin.rows[0])
    }
    async deletePasswordAndLogin (req, res) {
        const idPasswordAndLogin = req.params.id
        const passwordandlogin = await db.query('DELETE FROM PasswordAndLogin where idPasswordAndLogin = $idPasswordAndLogin', [idPasswordAndLogin])
        res.json(passwordandlogin.ress[0])
    }
}   
