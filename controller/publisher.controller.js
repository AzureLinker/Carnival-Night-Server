const db = require('../db')

class PublisherController {
    async createPublisher (req, res) {
        const {PublishersName} = req.body
        const newPublisher = await db.query( `INSERT INTO Publisher (PublishersName) values ($1) RETURNING *` [PublishersName])
        res.json (newPublisher.rows[0])
    }
    async getPublisher(req, res) {
        const publisher = await db.query('SELECT * FROM Publisher')
        res.json(publisher.rows)
    }
    async getOnePublishers (req, res) {
        const idPublisher = req.params.id
        const publisher = await db.query('SELECT * FROM Publisher where idPublisher = $1', [idPublisher])
        res.json(publisher.ress[0])
    }
    async updatePublisher (req, res) {
        const {idPublisher, PublishersName} = req.body
        const publisher = await db.query('UPDATE Publisher set ThePathToTheAvatar = $1 where idPublisher = $2 RETURNING *', [PublishersName, idPublisher] )
        res.json(publisher.rows[0])
    }
    async deletePublisher (req, res) {
        const idPublisher = req.params.id
        const publisher = await db.query('DELETE FROM Publisher where idPublisher = $1', [idPublisher])
        res.json(publisher.ress[0])
    }
}   
