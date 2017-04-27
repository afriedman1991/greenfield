var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost:27017/greenfieldTest01');

var server = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

require('./routes').listen(8888);
console.log('Server is working and Listening on port 8888...');

module.exports = server;
