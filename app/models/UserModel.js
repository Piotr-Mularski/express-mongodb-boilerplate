const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	age: Number,
	avatar: String
});

// export model using mongoose model with two arguments:
// 1. name of the collection (mongoose will make it plurar)
// 2. schema for the model
module.exports = mongoose.model('user', userSchema);