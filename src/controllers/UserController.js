const BaseController = require('./BaseController');

class UserController extends BaseController {

    profile() {
        this.render('profile');
    }

}

module.exports = UserController;