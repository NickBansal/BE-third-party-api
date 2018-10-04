const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ab41ed626eb84999a2671cb3f46a1d34');
const fs = require('fs');

const { generateTranslate } = require('../utils');

const spanishNews = () => {
  return newsapi.v2
    .topHeadlines({
      // sources: 'bbc-news,the-verge',
      q: 'Spain',
      // category: 'Spanish',
      language: 'en'
      // country: 'us'
    })
    .then(response => {
      return generateTranslate(JSON.stringify(response.articles));
    })
    .then(translate => {
      console.log(translate);
      return translate;
    })
    .catch(console.log);
};

module.exports = spanishNews;
