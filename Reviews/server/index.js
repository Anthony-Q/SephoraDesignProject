const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const PORT = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('App is listening on PORT:', PORT);
});

app.get('/review', (req, res) => {
  db.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
  .limit(10)
})

app.get('/specific', (req, res) => {
  //console.log('getting specific users', req.query.spec)
  db.find({
    [req.query.spec1]: req.query.spec2
  }, (err, data) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/helpful', (req, res) => {
  //console.log('IN POST...', req.body.name)
  db.updateOne({
    name: req.body.name
  }, {
    helpful: req.body.helpfulCount
  }).then((data) => {
    //console.log(data)
    res.send('updated!')
  })
})