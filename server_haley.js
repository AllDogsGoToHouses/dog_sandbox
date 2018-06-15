var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var db = require("./models/index.js")
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
var routes_dogs = require("./controllers/dogs_controller.js");
var routes_adopter = require("./controllers/adopter_controller.js");
var routes_shelter = require("./controllers/shelter_controller.js");

app.use( routes_dogs);
app.use( routes_adopter);
app.use( routes_shelter);

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
      console.log("Server listening on: http://localhost:" + PORT);


  })
})

//Facebook
// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// //Google
// app.get('/auth/google',
//   passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' });

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });