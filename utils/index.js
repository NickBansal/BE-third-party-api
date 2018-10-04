const { version, IBMUsername: username, IBMPassword: password, IBMUrl: url } = require('../config');
const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
const fs = require('fs');

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

const text = 'Hello Again';
const newText = 'hello mate hows it going? im spanish but this is wrote in england.';

generateTranslate(newText)
  .then(words => {
    let translation = words.translations[0].translation;
    fs.writeFile('./data/spanish.json', JSON.stringify(translation), err => {
      if (err) throw err;
    });
    return words;
  })
  .catch(console.log);

// languageTranslator.identify(
//   {
//     text: 'The language translator service takes text input and identifies the language used.'
//   },
//   function(err, language) {
//     if (err) {
//       console.log('error:', err);
//     } else {
//       console.log(JSON.stringify(language, null, 2));
//     }
//   }
// );
