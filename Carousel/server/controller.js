const Item = require('../database/model.js');
const app = require('./index.js');

module.exports = {
    get: (req, res) => {
        console.log("get")
        Item.find({})
        .limit(15)
        .then( data => {
            // console.log(data)
            res.status(200).send(data)
        })
        .catch( err => console.log(err));
    },
    post: (req, res) => {
        new Item({
            name: req.body.postmanName
        })
        .save()
        .then( data => {
            res.status(201).send(data);
        })
        .catch (err => console.log("ERR", err));
        console.log('post');
    }
};