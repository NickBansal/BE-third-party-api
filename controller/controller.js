const spanishNews = require('../news/index.js');

exports.sendTodaysNews = (req, res, next) => {
  spanishNews()
  .then(news => {
    console.log(news);
    res.send(news.translations[0].translation);
  })
  .catch(err => {
    console.log(err)
  })
};
