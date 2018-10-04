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
      if (err) {
        reject(err);
        return;
      } else {
        resolve(translation);
      }
    });
  });
};

module.exports = {
  generateTranslate
};
