const express = require('express');
const router = express.Router();
const routes = require('./config/routes');
const passport = require('passport');

let routesKeys = Object.keys(routes);

for (let routeKey of routesKeys) {
    let route = routes[routeKey];

    const callFunctions = route.controller.split(':');
    
    const controllerClass = require('./src/controllers/' + callFunctions[0]);
    const instanceControllerClass = new controllerClass();
    
    if (route.method !== undefined) {
        if (typeof route.method === 'object') {
            for (let method of route.method) {
                if (route.path === routes.login.path && method === 'POST') {
                    router[method.toLowerCase()](route.path, passport.authenticate('local', { failureRedirect: routes.login.path }), (req, res) => {
                        callController(req, res) 
                    });
                } else if (route.path === routes.loginFacebook.path && method === 'GET') {
                    router[method.toLowerCase()](route.path, passport.authenticate('facebook'));
                    router[method.toLowerCase()](route.facebookCallback, passport.authenticate('facebook', { failureRedirect: routes.login.path }), (req, res) => {
                        callController(req, res) 
                    });
                } else {
                    router[method.toLowerCase()](route.path, (req, res) => {
                        callController(req, res) 
                    });
                }
            }
        } else {
            router[route.method.toLowerCase()](route.path, (req, res) => {
                callController(req, res) 
            });
        }
    } else {
        router.all(route.path, (req, res) => {
            callController(req, res) 
        });
    }
    
    function callController(req, res) {
        instanceControllerClass.req = req;
        instanceControllerClass.res = res;
        if(req.user === undefined && route.private) { instanceControllerClass.redirect('login'); return; }
        instanceControllerClass[callFunctions[1]](req, res);
    }
}


module.exports = router;
