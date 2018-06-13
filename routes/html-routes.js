var path = require("path")

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adopter.html"));
  });

  app.get("/faves", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/faves.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  app.get("/shelter", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/shelter.html"));
  });


};
