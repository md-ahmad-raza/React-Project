const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupShema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
   password: {
    type: String,
    required: true,
  },
});
let signupModel = mongoose.model('signup', signupShema);
module.exports = signupModel;