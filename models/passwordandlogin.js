const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passwordandloginSchema = new Schema({
  Login: {
    type: varchar(256),
    required: true,
  },
  Password: {
    type: varchar(15),
    required: true,
  },
  ConfirmationСode: {
    type: varchar(10),
    required: true,
  },
  DateOfConfirmation: {
    type: datetime,
    required: true,
  },
  DateOfPasswordChange: {
    type: datetime,
    required: true,
  },
}, { timestamps: true });

const PasswordAndLogin = mongoose.model('PasswordAndLogin', passwordandloginSchema);

module.exports = PasswordAndLogin;