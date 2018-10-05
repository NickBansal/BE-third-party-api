const spanishNews = require('../news/index.js');

exports.sendTodaysNews = (req, res, next) => {
  spanishNews()
  .then(news => {
    // console.log(news)
    res.send({ news });
  })
  .catch(err => {
    console.log(err)
  })
};
