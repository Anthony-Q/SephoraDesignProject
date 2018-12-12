const fileData = require('../generated.json');
const Item = require('./model.js');
// const db = require('./index.js');

insertData = () => {
    console.log(Item);
    Item.collection.insert(fileData, (err, docs) => {
        if (err) {
            console.log("err--->", err);
        } else {
            console.log("docs--->", docs);
        }
    });
}
//schema collection insert jsonfile

insertData();