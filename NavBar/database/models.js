const db = require('./index.js');
const mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
  bannerUrl: String,
  squareAdUrl: String,
  rectAdUrl: String
});
var searchSchema = new mongoose.Schema({
  search: String,
  brand: String
});
var search = mongoose.model('search', searchSchema);
var photo = mongoose.model('photo', photoSchema);

module.exports = { photo, search };
