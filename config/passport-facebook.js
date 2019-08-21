const passport = require ('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../src/models/User');

const FACEBOOK_APP_ID = 369111014025193;
const FACEBOOK_APP_SECRET = 'b9b2eb768fd6e8ee5042020a981c2337';

passport.use('facebook', new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3500/facebook/callback",
        profileFields: ['id', 'displayName', 'email']
    },
    async function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });
        let user = await User.findOne({email: profile.email ? profile.email : 'default@email.com'});
        if (!user) {
            user = new User({
                firstname: profile.displayName.split(' ')[0],
                lastname: profile.displayName.split(' ')[1],
                email: profile.email ? profile.email : 'default@email.com',
                password: '',
            });
            user.save();
        }
        console.log(user);
        return cb(null, user);
    }
));