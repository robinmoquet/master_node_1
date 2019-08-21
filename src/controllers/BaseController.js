const {url} = require('../../utils/routing');

class BaseController {

    constructor() {
        this.req;
        this.res;
    }

    render(viewName, option = {}) {
        this.res.render(viewName, {
            ...option,
            url,
            user: this.req.user, 
            filters: {
                formatDate: function(date) {
                    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(); 
                    let month = date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1); 
                    let year = date.getFullYear(); 
                    console.log(date);
                    return day + '/' + month + '/' + year;
                }
            }
        })
    }

    redirect(routeName) {
        this.res.redirect(url(routeName));
    }

    isPost() {
        return this.req.route.methods.post ? this.req.route.methods.post : false;
    }

    isGet() {
        return this.req.route.methods.get ? this.req.route.methods.get : false;
    }

}
module.exports = BaseController;