'use strict'

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
FacebookStrategy = require('passport-facebook').Strategy,
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy
models = require('../models');

module.exports = function(app){

  // Serialize

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  // Deserialize

  passport.deserializeUser(function(user, done) {
    models.Users.findById(user.id, function(err, user) {
      done(err, user);
    });
  });

  // For login purposes

  passport.use('local', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(username, password, done){
      models.Users.findOne({ where: {email: username} }).then(function(user){
        if (!user) {
          console.log("USER NOT FOUND");
          return done(null, false);
        }
        if (!user.validPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));

//For Facebook purposes

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://www.example.com/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(..., function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

//App ID:2264312023796212
//App Secret: 0081ba218e2c3948295b0800dab51a82

//For Google purposes

passport.use(new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));

//Consumer Key: 203181443734-2lpvhhbuvuk4regqjilh0skqontijsl4.apps.googleusercontent.com
//Consumer Secret: _QUr3S-2MgXiHHEhCew-7wQH

// For Signup purposes

  passport.use('local-signup', new LocalStrategy({
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password'
    },
    function(req, username, password, done){
      models.Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: username,
        password: password
      }).then(function(user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.save();
        return done(null, user);
      }).catch(function() {
        return done(null, false);
      });
    }
  ));

}