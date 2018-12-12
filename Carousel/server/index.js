const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../database/index.js');
const routes = require('./routes.js');
const PORT = 7777;
const cors = require('cors');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log("listening on 7777...");
})