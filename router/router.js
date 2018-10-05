const router = require('express').Router();

const { sendTodaysNews } = require('../controller/controller.js');

router
    .route('/news')
    .get(sendTodaysNews);

module.exports = router;
