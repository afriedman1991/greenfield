var Q = require('q');
var Log = require('./logDataModel.js')

var findAllLogs = Q.nbind(Log.find, Log);
var createLog = Q.nbind(Log.create, Log);

module.eports = {

  allLogs: function (req, res, next) {
    findAllLogs({})
    .then(function (logs) {
      res.json(logs);
    })
    .fail(function (error) {
      next(error);
    });
  },

  newLog: function (req, res, next) {
    return createLog({
      user: req.body.user,
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
