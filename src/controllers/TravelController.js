const BaseController = require('./BaseController');
const Travel = require('../models/Travel');

class TravelController extends BaseController {
    async showAll() {
        const travels = await Travel.find();
        this.render('travels', {travels});
    }
    async showOne() {
        const id = this.req.params.id;
        const travel = await Travel.findById(id);
        this.render('single-travel', {travel});
    }
}

module.exports = TravelController;