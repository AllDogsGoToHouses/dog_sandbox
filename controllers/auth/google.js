module.exports = function (passport, user) {
    
 var User = user;

var configAuth = require('./auth');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
 var bCrypt = require('bcrypt-nodejs');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new GoogleStrategy({
     clientID: configAuth.googleAuth.clientID,
     clientSecret: configAuth.googleAuth.clientSecret,
     callbackURL: configAuth.googleAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
       process.nextTick(function(){

            var name = profile.displayName;
            var email = profile.emails[0].value;
            
            var randomstring = Math.random().toString(36).slice(-8);
          
            var generateHash = function (password) {
              return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
           
          User.findOne({where: {username: email}}).then(function (user) {

            if (user) {
                var theUser = user.dataValues;
                return done(null, false, theUser);
            }else {
                var userPassword = generateHash(randomstring);
                var data = {
                    username: email,
                    password: userPassword
                };

                User.create(data).then(function (newUser, created) {
                    if (!newUser) {
                        return done(null, false);
                    }

                    if (newUser) {
                        return done(null, newUser);
                    }

                });
            }


        });
        
   });
  }
));

};