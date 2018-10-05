const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ab41ed626eb84999a2671cb3f46a1d34');
const fs = require('fs');

const { generateTranslate } = require('../utils');

const spanishNews = n => {
  return newsapi.v2
    .topHeadlines({
      //sources: 'bbc-news, the-verge',
      q: 'America',
      // category: 'Spanish',
      language: 'en'
      // country: 'us'
    })

    .then(response => {
      const title = response.articles[n].title;
      const content = response.articles[n].content;
      const urlImage = response.articles[n].urlToImage;
      const description = response.articles[n].description;
      return Promise.all([generateTranslate(title), generateTranslate(content), generateTranslate(urlImage), generateTranslate(description)]);
    })
    .then(values => {
      const title = values[0].translations[0].translation;
      const content = values[1].translations[0].translation;
      const urlImage = values[2].translations[0].translation;
      const description = values[3].translations[0].translation;
      return { title, content, urlImage, description };
    });
};

module.exports = spanishNews;
