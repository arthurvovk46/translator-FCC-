'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      const { text, locale } = req.body;

      try {
        
        locale && text
          ? res.json(translator.translate(text, locale))
          : (text === ""
             ? res.json({ error: 'No text to translate' })
             : res.json({ error: 'Required field(s) missing' }))
      
      } catch (error) {

        console.error(error);
      }        
    });
};
