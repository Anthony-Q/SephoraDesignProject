const mongoose = require('mongoose');
const db = require('./index.js');

const itemSchema = mongoose.Schema({
    name: {type: String, require: true},
    picture: {type: String},
    cost: {type: String},
    about: {type: String},
    rating: Number
})


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;