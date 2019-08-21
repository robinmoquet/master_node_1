const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    lastname: String,
    firstname: String,
    email: String,
    password: String
})

const User = mongoose.model('User', UserSchema);

module.exports = User;