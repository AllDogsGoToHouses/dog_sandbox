var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//var db = require("./models/index.js")
var PORT = process.env.PORT || 3000;
var db = require("./models/index.js")

var passport = require('passport');
var session = require('express-session');

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




    //Models
var models = require("./models");


app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use( routes_dogs);
app.use( routes_adopter);
app.use( routes_shelter);


//Routes
var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport.js')(passport,models.user);
require('./controllers/auth/facebook.js')(passport,models.user);
require('./controllers/auth/google.js')(passport,models.user);

 
db.sequelize.sync().then(function(){
 app.listen(PORT, function(){
      console.log("Server listening on: http://localhost:" + PORT);
  })
})

app.post("/registerEmail",function(req,res){
    console.log("Posted");
    var data = req.body; 
    console.log(data);
   var newUser = {};
    newUser.local.username = data.email;
    newUser.local.password = data.password;
    console.log(newUser.local.username + " " + newUser.local.password);
    newUser.save(function(err){
            if(err)
                    throw err;
    });
    res.send("Success!");
   
});

/* FACEBOOK ROUTER */
app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

/* GOOGLE ROUTER */
app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/login' }));


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}
