const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  PublishersName: {
    type: varchar(100),
    required: true,
  },
  
},);

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;