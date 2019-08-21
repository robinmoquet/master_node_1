const fs = require('fs');
const markdown = require( "markdown" ).markdown;
const BaseController = require('./BaseController');

class ReadmeController extends BaseController {

    readmeParse() {
        fs.readFile('./README.md', 'utf-8', (err, data) => {
            this.render('readme.pug', {content: markdown.toHTML(data)});
        });
    }

    readmeOrigin(req, res) {
        // res.writeHead(200, {'Content-Type': 'text/html'})
        res.sendfile('./README.md');
    }
}

module.exports = ReadmeController;