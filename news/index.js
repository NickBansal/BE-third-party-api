const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ab41ed626eb84999a2671cb3f46a1d34');
const fs = require('fs');

const { generateTranslate } = require('../utils');

const spanishNews = () => {
  return newsapi.v2
    .topHeadlines({
      // sources: 'bbc-news,the-verge',
      q: 'Arsenal',
      // category: 'Spanish',
      language: 'en'
      // country: 'us'
    })
    .then(response => {
      return generateTranslate(response.articles[0].content);
    })
};

module.exports = spanishNews;
