var mongoose = require('mongoose');

var UserDataSchema = new mongoose.Schema({
	user : String,
	password : String
})

module.exports = mongoose.model('user', UserDataSchema);