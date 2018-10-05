const spanishNews = require('../news/index.js');

exports.sendTodaysNews = (req, res, next) => {
  let counter = 0;
  let newArray = [];
  while (counter < 15) {
    newArray.push(spanishNews(counter));
    ++counter;
  }
  return Promise.all(newArray)
    .then(news => {
      // console.log(news)
      res.render('index', { news });
    })
    .catch(err => {
      console.log(err);
    });
};
