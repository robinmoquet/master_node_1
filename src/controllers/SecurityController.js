const BaseController = require('./BaseController');
const mongoose = require('../../config/database');
const User = require('../models/User');
const {SALT_ROUNDS} = require('../../config/security');
const bcrypt = require('bcrypt');
const cookie = require('cookie');

class SecurityController extends BaseController {

    async registration() {
        if (this.isPost()) {
            const user = new User(this.req.body);
            user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
            user.save();
            this.redirect('login');
            return;
        }
        this.render('registration');
    }
    
    login() {
        if (this.isPost()) {
            this.redirect('home');
            return;
        }
        this.render('login');
    }

    loginFacebook() {
        this.redirect('home');
    }

    logout() {
        this.req.logout();
        this.redirect('login');
    }

}

module.exports = SecurityController;