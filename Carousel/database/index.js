const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/mydb');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "<===MONGOOSE ERROR===>"));
db.once('open', () => {
    console.log("<===MONGOOSE CONNECTED===>");
});

module.exports = db;