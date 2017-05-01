var Q = require('q');
var Log = require('./log-data.model.js')

var findAllLogs = Q.nbind(Log.find, Log);
var createLog = Q.nbind(Log.create, Log);

module.exports = {
  //fatch data from database
  allLogs: function (req, res, next) {
    console.log("Hello");
    findAllLogs({})
    .then(function (logs) {
      res.json(logs);
    })
    .fail(function (error) {
      next(error);
    });
  },
  //save data to the table
  newLog: function (req, res, next) {
    console.log(req.body)
    return createLog({
      username: req.body.username,
      level: req.body.level,
      mood: req.body.mood,
      note: req.body.note,
      time: req.body.time
    })
    .fail(function (error) {
      next(error);
    });
  }
}
