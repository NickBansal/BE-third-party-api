const fs = require('fs');
const spanishNews = require('../news/index.js');

exports.sendTodaysNews = (req, res) => {
  spanishNews().then(news => {
    res.send(news);
  });
};
