const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  ThePathToTheAvatar: {
    type: varchar(45),
  },
  Nickname: {
    type: varchar(45),
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;