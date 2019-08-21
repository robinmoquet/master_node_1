const express = require('express');
const app = express();
const port = 3500;
const router = require('./router');
const passport = require('passport');
const session = require('express-session');
require('./config/passport');
require('./config/passport-facebook');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use(session({ 
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.listen(port, () => {
    console.log(`The app is start on port: ${port}`);
    if(process.send) {
        process.send('online')
    }
});