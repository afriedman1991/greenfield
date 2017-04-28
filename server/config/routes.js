var logDataModel = require('../logData/log-data.model.js');//check this path!!!!!
var logDataController = require('../logData/log-data.controller.js')//check this path!!!!!
var helpers = require('./helpers.js'); 

module.exports = function (app, express) {
	app.post('/db', logDataController.newLog);
	app.get('/', logDataController.allLogs);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
}