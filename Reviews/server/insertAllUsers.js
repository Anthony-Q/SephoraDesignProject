const data = require('../data/users.json');
const User = require('../database/index.js');

var insertAllUsers = function() {

  data.forEach((user) => {
    new User({
      name: user.name,
      picture: user.picture,
      eyeColor: user.eyeColor,
      hairColor: user.hairColor,
      skinTone: user.skinTone,
      skinType: user.skinType,
      rating: user.rating,
      message: user.message,
      rank1: user.rank1,
      rank2: user.rank2,
      helpful: user.helpful,
      recommends: user.recommends
    }).save((err) => {
      if (err) {
        console.log('err');
      } else {
        console.log('saved');
      }
    });
  });
};

insertAllUsers();