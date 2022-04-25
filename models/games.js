const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
  Name_of_the_game: {
    type: varchar(45),
    required: true,
  },
  Description_of_the_game: {
    type: varchar(1000),
    required: true,
  },
  Path_to_the_directory: {
    type: varchar(45),
    required: true,
  },
},);

const Games = mongoose.model('Games', gamesSchema);

module.exports = Games;