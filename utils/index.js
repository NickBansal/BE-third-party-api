const { version, IBMUsername: username, IBMPassword: password, IBMUrl: url } = require('../config');
const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

const generateTranslate = text => {
  const languageTranslator = new LanguageTranslatorV3({ version, username, password, url });
  const params = {
    text,
    source: 'en',
    target: 'es'
  };
  return new Promise((resolve, reject) => {
    languageTranslator.translate(params, function(err, translation) {
      console.log(translation)
      if (err) {
        reject(err);
        return;
      } else {
        // const parsedTranslation = JSON.parse(translation.translations[0].translation)
        // console.log(typeof parsedTranslation)
        resolve(translation.translations[0]);
      }
    });
  });
};

module.exports = {
  generateTranslate
};
