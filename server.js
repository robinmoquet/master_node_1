const express = require('express');
const app = express();
const port = 3500;
const router = require('./router');

app.use(express.static('public'));
app.set('view engine', 'pug');

app.use('/', router);

app.listen(port, () => {
    console.log(`The app is start on port: ${port}`);
});