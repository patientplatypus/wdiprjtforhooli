

var mongoose = require('mongoose');

var donatorSchema = new mongoose.Schema({
	name: { type: String, required: true }
});

mongoose.model('donatorSchema', donatorSchema);