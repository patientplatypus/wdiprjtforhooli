

var mongoose = require('mongoose');

var passwordSchema = new mongoose.Schema({
	password: { type: String, required: true }, 
	username: { type: String, required: true },
	type: { type: String, required: true }
});

mongoose.model('passwordSchema', passwordSchema);