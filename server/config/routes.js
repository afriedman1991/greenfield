var logDataModel = require('../logData/log-data.model.js');//check this path!!!!!
var logDataController = require('../logData/log-data.controller.js');//check this path!!!!!
var userDataController = require('../userData/user-data.controller.js');
var helpers = require('./helpers.js');

module.exports = function (app, express) {
  app.post('/db', logDataController.newLog);
  app.get('/data', logDataController.allLogs);
  app.post('/signup', userDataController.newUser);
  app.post('/signin', userDataController.signin);
  app.get('/data/:year/:month/:day', logDataController.daily);
  app.get('/data/:year/:month', logDataController.monthly);
  app.get('/data/average/level/daily/:year', logDataController.dailyAverages);
  app.get('/data/average/level/weekly/:year', logDataController.weeklyAverages);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
}
