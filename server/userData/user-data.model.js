var mongoose = require('mongoose');

var UserDataSchema = new mongoose.Schema({
	userRealName : String,
	email: String,
	username: String,
	password : String

})

module.exports = mongoose.model('user', UserDataSchema);