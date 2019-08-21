const mongoose = require('../../config/database');
const faker = require('faker');
const Travel = require('../models/Travel');

class TravelsFixture {
    load(req, res) {
        for (let i = 0; i < 70; i++) {
            const travel = new Travel({
                _id: mongoose.Types.ObjectId(),
                title: faker.address.country(),
                desc: faker.lorem.paragraphs(7),
                img: "https://picsum.photos/300/150",
                price: faker.random.number({min: 1500, max: 3000}),
                startTo: faker.date.future(),
                endTo: faker.date.future(),
                nb_places: faker.random.number({min: 15, max: 25}),
                places_available: faker.random.number(14)
            })
            console.log(travel);
            travel.save();
        }

        res.send('OK !');
    }
}

module.exports = TravelsFixture;