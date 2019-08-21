const passport  = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../src/models/User');
const bcrypt = require('bcrypt');

passport.use('local', new LocalStrategy(
    function(email, password, done) {
        User.findOne({ email: email }, async function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!await bcrypt.compare(password, user.password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
  done(null, user.email);
});
  
passport.deserializeUser(function(email, done) {
  User.findOne({email: email}, function(err, user) {
    done(err, user);
  });
});