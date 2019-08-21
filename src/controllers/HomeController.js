const BaseController = require('./BaseController');

class HomeController extends BaseController {
    
    home() {
        this.render('home')
    }

}

module.exports = HomeController;