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
      const title = response.articles[0].title;
      const content = response.articles[0].content;
      const body = [title, content]
      // body.forEach(el => {
        return generateTranslate(title);
      // })
    })
};

module.exports = spanishNews;
