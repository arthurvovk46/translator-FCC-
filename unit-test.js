const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

  suite('1. American to British', () => {

    const locale = "american-to-british";
    let text;
    let tran;
    
    test("1) Translate 'Mangoes are my favorite fruit.'", () => {

      text = "Mangoes are my favorite fruit.";
      tran = translator.translate(text, locale);
      
      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test("2) Translate 'I ate yogurt for breakfast.'", () => {

      text = "I ate yogurt for breakfast.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'I ate <span class="highlight">yoghurt</span> for breakfast.');
    });

    test("3) Translate 'We had a party at my friend's condo.'", () => {

      text = "We had a party at my friend's condo.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'We had a party at my friend\'s <span class="highlight">flat</span>.');
    });

    test("4) Translate 'Can you toss this in the trashcan for me?'", () => {

      text = "Can you toss this in the trashcan for me?";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'Can you toss this in the <span class="highlight">bin</span> for me?');
    });

    test("5) Translate 'The parking lot was full.'", () => {

      text = "The parking lot was full.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'The <span class="highlight">car park</span> was full.');
    });

    test("6) Translate 'Like a high tech Rube Goldberg machine.'", () => {

      text = "Like a high tech Rube Goldberg machine.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    });

    test("7) Translate 'To play hooky means to skip class or work.'", () => {

      text = "To play hooky means to skip class or work.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'To <span class="highlight">bunk off</span> means to skip class or work.');
    });

    test("8) Translate 'No Mr. Bond, I expect you to die.'", () => {

      text = "No Mr. Bond, I expect you to die.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    });

    test("9) Translate 'Dr. Grosh will see you now.'", () => {

      text = "Dr. Grosh will see you now.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        '<span class="highlight">Dr</span> Grosh will see you now.');
    });

    test("10) Translate 'Lunch is at 12:15 today.'", () => {

      text = "Lunch is at 12:15 today.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'Lunch is at <span class="highlight">12.15</span> today.');
    });
  });

  suite('2. British to American', () => {
    
    const locale = "british-to-american";
    let text;
    let tran;

    test("11) Translate 'We watched the footie match for a while.'", () => {
      
      text = "We watched the footie match for a while.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'We watched the <span class="highlight">soccer</span> match for a while.');
    });

    test("12) Translate 'Paracetamol takes up to an hour to work.'", () => {

      text = "Paracetamol takes up to an hour to work.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    });

    test("13) Translate 'First, caramelise the onions.'", () => {

      text = "First, caramelise the onions.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'First, <span class="highlight">caramelize</span> the onions.');
    });

    test("14) Translate 'I spent the bank holiday at the funfair.'", () => {

      text = "I spent the bank holiday at the funfair.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    });

    test("15) Translate 'I had a bicky then went to the chippy.'", () => {

      text = "I had a bicky then went to the chippy.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    });

    test("16) Translate 'I've just got bits and bobs in my bum bag.'", () => {

      text = "I've just got bits and bobs in my bum bag.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    });

    test("17) Translate 'The car boot sale at Boxted Airfield was called off.'", () => {

      text = "The car boot sale at Boxted Airfield was called off.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    });

    test("18) Translate 'Have you met Mrs Kalyani?'", () => {

      text = "Have you met Mrs Kalyani?";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    });

    test("19) Translate 'Prof Joyner of King's College, London.'", () => {

      text = "Prof Joyner of King's College, London.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    });

    test("20) Translate 'Tea time is usually around 4 or 4.30.'", () => {

      text = "Tea time is usually around 4 or 4.30.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.equal(
        tran.translation,
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    });
  });

  suite('3. Highlight translation', () => {

    let locale;
    let text;
    let tran;

    test("21) Highlight translation in 'Mangoes are my favorite fruit.'", () => {

      locale = "american-to-british";
      text = "Mangoes are my favorite fruit.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.include(tran.translation, 'class="highlight"');
    });

    test("22) Highlight translation in 'I ate yogurt for breakfast.'", () => {

      locale = "american-to-british";
      text = "I ate yogurt for breakfast.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.include(tran.translation, 'class="highlight"');
    });

    test("23) Highlight translation in 'We watched the footie match for a while.'", () => {

      locale = "british-to-american";
      text = "We watched the footie match for a while.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.include(tran.translation, 'class="highlight"');
    });

    test("24) Highlight translation in 'Paracetamol takes up to an hour to work.'", () => {

      locale = "british-to-american";
      text = "Paracetamol takes up to an hour to work.";
      tran = translator.translate(text, locale);

      assert.property(tran, "text");
      assert.equal(tran.text, text);
      assert.property(tran, "translation");
      assert.include(tran.translation, 'class="highlight"');
    });
  });
});
