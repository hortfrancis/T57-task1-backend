const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
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
	regNum: {
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

module.exports = mongoose.model('Car', carSchema);