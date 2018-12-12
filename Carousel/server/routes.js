const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/mydb')
    .get(controller.get)
    .post(controller.post)

module.exports = router;

