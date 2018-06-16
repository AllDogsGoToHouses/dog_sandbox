var path = require("path")

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/index', function (req, res) {
    res.render('index');
  });

  app.get('/adopter', function (req, res) {
    res.render('adopter');
  });

  app.get('/shelter', function (req, res) {
    res.render('shelter');
  });

  app.get('/results', function (req, res) {
    res.render('results');
  });

  app.get('/faves', function (req, res) {
    res.render('faves');
  });
};
