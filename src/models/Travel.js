const mongoose = require('../../config/database');
const Schema = mongoose.Schema;

const TravelSchema = new Schema({
    _id: String,
    title: String,
    desc: String,
    img: String,
    price: Number,
    startTo: Date,
    endTo: Date,
    nb_places: Number,
    places_available: Number
})

const Travel = mongoose.model('Travel', TravelSchema);

module.exports = Travel;