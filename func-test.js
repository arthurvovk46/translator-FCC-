const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {

  test("1) translation with text and locale fields", (done) => {

    let translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
    const request = {};
    request.locale = "american-to-british";
    request.text = "Mangoes are my favorite fruit.";

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(request)
      .end((err, res) => {

        assert.equal(res.status, 200);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(res.body.text, request.text);
        assert.equal(res.body.translation, translation);
        done();
      });
  }); 

  test("2) translation with text and invalid locale field", (done) => {

    const request = {};
    request.locale = "american-to-french";
    request.text = "Mangoes are my favorite fruit.";

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(request)
      .end((err, res) => {

        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  test("3) translation with missing text field", (done) => {

    const request = {};
    request.locale = "american-to-french";

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(request)
      .end((err, res) => {

        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test("4) translation with missing locale field", (done) => {

    const request = {};
    request.text = "Mangoes are my favorite fruit.";

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(request)
      .end((err, res) => {

        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  
  test("5) translation with empty text", (done) => {

    const request = {};
    request.locale = "american-to-french";
    request.text = "";

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(request)
      .end((err, res) => {

        assert.equal(res.status, 200);
        assert.property(res.body, "error");
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });

  test("6) translation with text that needs no translation", (done) => {

    let translation = 'Everything looks good to me!';
    const request = {};
    request.locale = "american-to-british";
    request.text = "Mangoes are my fruit.";

    chai
      .request(server)
      .keepOpen()
      .post("/api/translate")
      .send(request)
      .end((err, res) => {

        assert.equal(res.status, 200);
        assert.property(res.body, "text");
        assert.property(res.body, "translation");
        assert.equal(res.body.text, request.text);
        assert.equal(res.body.translation, translation);
        done();
      });
  }); 
});
