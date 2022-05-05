const db = require('../db')

class CommentsController {
    async createComments (req, res) {
        const {idUser, Description, Date_the_comment_was_created} = req.body
        const newComment = await db.query( `INSERT INTO Comments (iduser, Description, Date_the_comment_was_created) values ($1, $2, $3) RETURNING *`, [idUser, Description,Date_the_comment_was_created])
        res.json (newComment.rows[0])
    }
    async getComments(req, res) {
        const comments = await db.query(`SELECT * FROM Comments`)
        res.json(comments.rows)
    }
    async getOneComment (req, res) {
        const idComments = req.params.id
        const comments = await db.query(`SELECT * FROM Comments where idComments = $1`, [idComments])
        res.json(comments.rows[0])
    }
    async updateComments (req, res) {
        const {idComments, Description, Date_the_comment_was_created} = req.body
        const comments = await db.query(`UPDATE Comments set Description = $1, Date_the_comment_was_created = $2 where idComments = $3 RETURNING *`, [Description, Date_the_comment_was_created, idComments] )
        res.json(comments.rows[0])
    }
    async deleteComments (req, res) {
        const idComments = req.params.id
        const comments = await db.query(`DELETE FROM Comments where idComments = $1`, [idComments])
        res.json(comments.rows[0])
    }
}   

module.exports = new CommentsController();
