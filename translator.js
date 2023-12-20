const amOn = require('./american-only.js');
const amToBrSp = require('./american-to-british-spelling.js');
const amToBrTi = require("./american-to-british-titles.js")
const brOn = require('./british-only.js')

class Translator {

  translate (text, locale) {

    let translation = text;
    
    if (locale == "american-to-british") {
      
      function wraperA(translation, dict) {
        
        for (let x in dict) {
          
          const regex = new RegExp(`(?:\\b|(?<=\\.))${x}(?!\\w)`, "i");
          const match = regex.exec(translation);
          
          if (match && translation.charAt(match.index) ===
            translation.charAt(match.index).toUpperCase()) {
            
            let insert = dict[x][0].toUpperCase() + dict[x].slice(1);
            const wrap = `<span class="highlight">${insert}</span>`;
        
            translation = translation.replace(regex, wrap);

          } else {
            
            let insert = dict[x];
            const wrap = `<span class="highlight">${insert}</span>`;
        
            translation = translation.replace(regex, wrap);
          }
        }
        let date = translation.substr(translation.search(/\d+:\d+/g), 5);
      
        date = date.replace(/:/, ".");
      
        const wrap = `<span class="highlight">${date}</span>`;
      
        translation = translation.replace(/\d+:\d+/g, wrap);
        return translation 
      }
      translation = wraperA(translation, amOn);
      translation = wraperA(translation, amToBrTi);
      translation = wraperA(translation, amToBrSp);
      console.log("final:", translation);
      
    } else if (locale == "british-to-american") {

      function wraperB(translation, dict) {

        for (let x in dict) {

          const regex = new RegExp(`(?:\\b|(?<=\\.))${x}(?!\\w)`, "i");
          const match = regex.exec(translation);

          if (match && translation.charAt(match.index) ===
            translation.charAt(match.index).toUpperCase()) {

            let insert = dict[x][0].toUpperCase() + dict[x].slice(1);
            const wrap = `<span class="highlight">${insert}</span>`;

            translation = translation.replace(regex, wrap);

          } else {

            let insert = dict[x];
            const wrap = `<span class="highlight">${insert}</span>`;

            translation = translation.replace(regex, wrap);
          }
        }
        let date = translation.substr(translation.search(/\d+.\d+/), 4);

        date = date.replace(".", ":");

        const wrap = `<span class="highlight">${date}</span>`;

        translation = translation.replace(/\d+.\d+/, wrap);
        return translation 
      }
      
      function wraperBr(translation, dict) {

        for (let x in dict) {

          const regex = new RegExp(`(?:\\b|(?<=\\.))${dict[x]}(?!\\w)`, "i");
          const match = regex.exec(translation);

          if (match && translation.charAt(match.index) ===
            translation.charAt(match.index).toUpperCase()) {

            let insert = x[0].toUpperCase() + x.slice(1);
            const wrap = `<span class="highlight">${insert}</span>`;

            translation = translation.replace(regex, wrap);

          } else {

            let insert = x;
            const wrap = `<span class="highlight">${insert}</span>`;

            translation = translation.replace(regex, wrap);
          }
        }
        return translation 
      }
      translation = wraperB(translation, brOn);
      translation = wraperBr(translation, amToBrTi);
      translation = wraperBr(translation, amToBrSp);
      console.log("final B:", translation);

    } else {

      return { error: 'Invalid value for locale field' }
    } 
    return (translation === text)
      ? { text: text, translation: "Everything looks good to me!" }
      : { text: text, translation: translation }
  }
}

module.exports = Translator;