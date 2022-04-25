const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  Description: {
    type: varchar(500),
    required: true,
  },
  Date_the_comment_was_created: {
    type: varchar(45),
    required: true,
  },
}, { timestamps: true });

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;