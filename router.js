const express = require('express');
const router = express.Router();
const routes = require('./config/routes');

let routesKeys = Object.keys(routes);

for (let routeKey of routesKeys) {
    let route = routes[routeKey];

    const callFunctions = route.controller.split(':');

    const controllerClass = require('./controllers/' + callFunctions[0]);
    const instanceControllerClass = new controllerClass();

    if (route.method !== undefined) {
        if (typeof route.method === 'object') {
            for (let method of route.method) {
                router[method.toLowerCase()](route.path, (req, res) => instanceControllerClass[callFunctions[1]](req, res));
            }
        } else {
            router[route.method.toLowerCase()](route.path, (req, res) => instanceControllerClass[callFunctions[1]](req, res));
        }
    } else {
        router.all(route.path, (req, res) => instanceControllerClass[callFunctions[1]](req, res));
    }
}


module.exports = router;
