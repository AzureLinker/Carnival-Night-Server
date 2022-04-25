const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genresSchema = new Schema({
  Name_of_the_genre: {
    type: varchar(50),
    required: true,
  },
  
}, { timestamps: true });

const Genres = mongoose.model('Genres', genresSchema);

module.exports = Genres;