const controller = require('./controller.js');
const router = require('express').Router();

router
  .route('/')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });

module.exports = router;
