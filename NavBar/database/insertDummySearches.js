const { search } = require('./models.js');
const dummy = require('./dummyData.json');

var insert = () => {
  search.collection.insert(dummy, (err, result) => {
    if (err) {
      console.log('Some error happened: ', err);
    } else {
      console.log('dummy searches inserted', result);
    }
  });
};

insert();
