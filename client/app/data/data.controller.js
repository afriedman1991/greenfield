angular.module('app.data',[])

.controller("dataController",['$scope', '$http', 'AuthService', function($scope, $http, AuthService) {
  //console.log($scope.user.username)
   // angular-charts data
   $scope.labels = ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"];
   $scope.series = ['Level'];
   $scope.data = [
     [0, 1, 1, 3, 0, -1, -3, -2, -2, 0, 1, 1, 3]
   ];
   $scope.onClick = function (points, evt) {
     console.log(points, evt);
   };
   $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
   $scope.options = {
     responsive: false,
     maintainAspectRatio: false,
     scales: {
       yAxes: [
         {
           id: 'y-axis-1',
           type: 'linear',
           display: true,
           position: 'left'
         }
       ]
     }
   };
  $scope.width = window.innerWidth * 0.7;

  // TEMP: display db data
  $scope.displayTable = function() {
    var username = AuthService.getUser();
    console.log("My username is: ", username);
    $http({
      method: 'POST',
      url: '/data',
      data: {username: username}
    })
    .then(function(resp) {
      $scope.tableGraph = resp.data; // temp, just to display server response
    });
  }

  let currTime = new Date();
  $scope.yearToSearch = currTime.getFullYear();
  $scope.monthToSearch = currTime.getMonth();
  $scope.dayToSearch = currTime.getDate();

  // JS Month is 0-11, MongoDB Month is 1-12
  // Need to add one month to query Mongo
  $scope.displayDaily = function() {
    var username = AuthService.getUser();
    console.log("My username is: ", username);
    let year = $scope.yearToSearch;
    let month = $scope.monthToSearch + 1;
    let day = $scope.dayToSearch;
    $http({
      method: 'POST',
      url: `/data/${year}/${month}/${day}`,
      // Doing below uses url: /data/?year=2017
      // params: { year: $scope.yearToSearch}
      data: {username: username}
    })
    .then(function(resp) {
      console.log('resp is', resp.data);
      $scope.tableDaily = resp.data;
    });
  }

  $scope.displayMonthly = function() {
    var username = AuthService.getUser();
    console.log("My username is: ", username);
    let year = $scope.yearToSearch;
    let month = $scope.monthToSearch + 1;
    let day = $scope.dayToSearch;
    $http({
      method: 'POST',
      url: `/data/${year}/${month}`,
      data: {username: username}
    })
    .then(function(resp) {
      console.log('resp is', resp.data);
      // let logs = resp.data.filter(elem => elem.day === 2)
      // .map(elem => elem.time);

      // Grouping by week on server, requires underscore
      // let test = _.groupBy(resp.data, elem => elem.week);
      // console.log(test);
      //
      // for (var week in test) {
      //   if (test.hasOwnProperty(week)) {
      //     console.log(`Week ${week}`);
      //     console.log(test[week]);
      //   } else {
      //     console.log('uhh');
      //   }
      // }
      // $scope.tableMonthly = test;

      $scope.tableMonthly = resp.data;
    });
  }

  $scope.displayDailyAverages = function() {
    var username = AuthService.getUser();
    console.log("My username is: ", username);
    let year = $scope.yearToSearch;
    $http({
      method: 'POST',
      url: `data/average/level/daily/${year}`,
      data: {username: username}
    })
    .then(function(resp) {
      console.log(resp.data);
      $scope.dailyAverages = resp.data;
    })
  }

  $scope.displayWeeklyAverages = function() {
    var username = AuthService.getUser();
    console.log("My username is: ", username);
    let year = $scope.yearToSearch;
    $http({
      method: 'POST',
      url: `data/average/level/weekly/${year}`,
      data: {username: username}
    })
    .then(function(resp) {
      console.log(resp.data);
      $scope.weeklyAverages = resp.data;
    })
  }

  $scope.displayDailyGraphs = function() {
    var username = AuthService.getUser();
    console.log("My username is: ", username);
    let year = $scope.yearToSearch;
    $http({
      method: 'POST',
      url: `data/average/level/daily/${year}`,
      data: {username: username}
    })
    .then(function(resp) {
      console.log(resp.data);
      let final = [];
      let weekly = _.groupBy(resp.data, elem => elem._id.week);
      for (var week in weekly) {
        let weekLevels = _.pluck(weekly[week], 'averageLevel');
        console.log('weekLevels', weekLevels);
        // let day = weekly[week];
        // console.log('day is', day);
        // let date = new Date(day._id.year, day._id.month, day._id.day);
        weekly[week]['weeklyLevels'] = [weekLevels];
        // weekly['weeklyLevels'] = weekLevels;
      }

      console.log('dailyGraphs', weekly);
      $scope.dailyGraphs = resp.data;
    })
  }
}])
