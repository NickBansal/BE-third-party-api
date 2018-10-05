const spanishNews = require('../news/index.js');

exports.sendTodaysNews = (req, res, next) => {
  spanishNews()
    .then(news => {
      // console.log(news)
      res.render('index', { news });
    })
    .catch(err => {
      console.log(err);
    });
};
