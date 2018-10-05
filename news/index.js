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
      console.log(response);
      const title = response.articles[0].title;
      const content = response.articles[0].content;
      const urlImage = response.articles[0].urlToImage
      const description = response.articles[0].description;
      return Promise.all([
        generateTranslate(title), 
        generateTranslate(content),
        generateTranslate(urlImage),
        generateTranslate(description)
      ])
    })
    .then(values => {
      const title = values[0].translations[0].translation
      const content = values[1].translations[0].translation
      const urlImage = values[2].translations[0].translation
      const description = values[3].translations[0].translation
      return {title, content, urlImage, description}
    })

};

module.exports = spanishNews;
