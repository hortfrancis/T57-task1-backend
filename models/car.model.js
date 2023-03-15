const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    model: {
		type: Number,
		required: true
	}, 
	make: {
		type: String,
		required: true
	},
	colour: {
		type: String, 
		required: false
	},
	refNum: {
		type: String, 
		required: true
	}, 
	owner: {
		type: String, 
		required: true
	}, 
	address: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Car', Schema);