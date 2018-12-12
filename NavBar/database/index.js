const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/navbar');

const db = mongoose.connection;

db.on('error', err => console.log('Something went wrong ', err));

db.once('connect', result => {
  console.log('Mongo connected ', result);
});

module.exports = db;
