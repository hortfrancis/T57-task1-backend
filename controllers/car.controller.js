const Car = require('../models/car.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Car content can not be empty"
        });
    }

    // Create a Car document
    const car = new Car({
        model: req.body.model, 
        make: req.body.make,
        colour: req.body.colour,
        refNum: req.body.refNum,
        owner: req.body.owner,
        address: req.body.address
    });

    // Save Car document to the database
    car.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while adding data to the database."
        });
    });
}

exports.findAll = (req, res) => {
    Car.find()
    .then(cars => {
        res.send(cars);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving cars."
        });
    });
}

