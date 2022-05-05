<<<<<<< HEAD
const db = require('../db')

class libraryController {
    async createlibrary (req, res) {
        const {idGames, idUser} = req.body
        const newlibrary = await db.query( `INSERT INTO library (idGames, idUser) values ($1, $2) RETURNING *`, [idGames, idUser])
        res.json (newlibrary.rows[0])
    }
    async getlibrarys(req, res) {
        const library = await db.query(`SELECT * FROM library`)
        res.json(library.rows)
    }
    async getOnelibrary (req, res) {
        const idlibrary = req.params.id
        const library = await db.query(`SELECT * FROM library where idlibrary = $1`, [idlibrary])
        res.json(library.rows[0])
    }
    async updatelibrary (req, res) {
        const {idlibrary, idGames, idUser} = req.body
        const library = await db.query(`UPDATE library set idGames = $1, idUser = $2 where idlibrary = $3 RETURNING *`, [idGames, idUser, idlibrary] )
        res.json(library.rows[0])
    }
    async deletelibrary (req, res) {
        const idlibrary = req.params.id
        const library = await db.query(`DELETE FROM library where idlibrary = $1`, [idlibrary])
        res.json(library.rows[0])
    }
}   

module.exports = new libraryController();
=======
const db = require('../db')

class libraryController {
    async createlibrary (req, res) {
        const {idGames, idUser} = req.body
        const newlibrary = await db.query( `INSERT INTO library (idGames, idUser) values ($idGames, $idUser) RETURNING *`, [idGames, idUser])
        res.json (newlibrary.rows[0])
    }
    async getlibrarys(req, res) {
        const library = await db.query(`SELECT * FROM library`)
        res.json(library.rows)
    }
    async getOnelibrary (req, res) {
        const idlibrary = req.params.id
        const library = await db.query(`SELECT * FROM library where idlibrary = $idlibrary`, [idlibrary])
        res.json(library.ress[0])
    }
    async updatelibrary (req, res) {
        const {idlibrary, idGames, idUser} = req.body
        const library = await db.query(`UPDATE library set idGames = $idGames, idUser = $idUser where idlibrary = $idlibrary RETURNING *`, [idGames, idUser, idlibrary] )
        res.json(library.rows[0])
    }
    async deletelibrary (req, res) {
        const idlibrary = req.params.id
        const library = await db.query(`DELETE FROM library where idlibrary = $idlibrary`, [idlibrary])
        res.json(library.ress[0])
    }
}   

module.exports = new libraryController();
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
