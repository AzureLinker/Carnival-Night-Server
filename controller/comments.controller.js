const db = require('../db')

class CommentsController {
    async createComments (req, res) {
        const {Description, Date_the_comment_was_created} = req.body
        const newComment = await db.query( `INSERT INTO Comments (Description, Date_the_comment_was_created) values ($Description, $Date_the_comment_was_created) RETURNING *` [Description,Date_the_comment_was_created])
        res.json (newComment.rows[0])
    }
    async getComments(req, res) {
        const comments = await db.query(`SELECT * FROM Comments`)
        res.json(comments.rows)
    }
    async getOneComment (req, res) {
        const idComments = req.params.id
        const comments = await db.query(`SELECT * FROM Comments where idComments = $1idComments`, [idComments])
        res.json(comments.ress[0])
    }
    async updateComments (req, res) {
        const {idComments, Description, Date_the_comment_was_created} = req.body
        const comments = await db.query(`UPDATE Comments set Description = $Description, Date_the_comment_was_created = $Date_the_comment_was_created where idComments = $idComments RETURNING *`, [Description, Date_the_comment_was_created, idComments] )
        res.json(comments.rows[0])
    }
    async deleteComments (req, res) {
        const idComments = req.params.id
        const comments = await db.query(`DELETE FROM Comments where idComments = $idComments`, [idComments])
        res.json(comments.ress[0])
    }
}   

module.exports = new CommentsController();
