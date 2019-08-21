const routes = {
    home: {path: '/', controller: 'HomeController:home', method: ["GET"]},
    readmeOrigin: {path: '/readme', controller: 'ReadmeController:readmeParse', method: ["GET"]},
    readmeParse: {path: '/readme-origin', controller: 'ReadmeController:readmeOrigin', method: ["GET"]},
    registration: {path: '/registration', controller: 'SecurityController:registration', method: ["GET", "POST"]},
    login: {path: '/login', controller: 'SecurityController:login', method: ["GET", "POST"]},
    loginFacebook: {path: '/login-facebook', controller: 'SecurityController:loginFacebook', method: ["GET"], facebookCallback: "/facebook/callback"},
    logout: {path: '/logout', controller: 'SecurityController:logout', method: "GET"},
    profile: {path: '/profile', controller: 'UserController:profile', method: "GET", private: true},
    fixture: {path: '/fixtures', controller: 'TravelsFixture:load'},
    travels: {path: '/travels', controller: 'TravelController:showAll', method: "GET", /*private: true*/},
    travel: {path: '/travels/:id', controller: 'TravelController:showOne', method: "GET", /*private: true*/},
};

module.exports = routes;