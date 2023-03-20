const Car = require('../models/Car_model');

exports.create = (req, res) => {
    console.log('in create()');
    console.log(req.body);
    // Validate request
    // if (!req.body) {
    //     return res.status(400).send({
    //         error: "Car content can not be empty"
    //     });
    // }

    // Create a Car document
    const car = new Car({
        model: req.body.model,
        make: req.body.make,
        colour: req.body.colour,
        regNum: req.body.regNum,
        owner: req.body.owner,
        address: req.body.address
    });

    // Save Car document to the database
    car.save()
        .then(data => {
            res.status(201).send({ id: data._id });
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

exports.updateOne = (req, res) => {
    console.log('in updateOne()');
}
