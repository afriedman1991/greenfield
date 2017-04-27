var mongoose = require('mongoose');

var LogDataSchema = new mongoose.Schema({
  user: String,
  level: Number,
  mood: String,
  note: String,
  time: Date
});

module.exports = mongoose.model('Log', LogDataSchema);
