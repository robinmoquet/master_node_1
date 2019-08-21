const routes = require('../config/routes');

const url = (routeName, options) => {
    if(options !== undefined) {
        let path = routes[routeName].path;
        Object.keys(options).forEach(key => {
            path = path.replace(':' + key, options[key]);
        })
        return path;
    }
    return routes[routeName].path;
};
exports.url = url;
