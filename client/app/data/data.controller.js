angular.module('app.data',[])

.controller("dataController",function($scope, $http) {

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
    $http({
      method: 'GET',
      url: '/data'
    })
    .then(function(resp) {
      $scope.tableGraph = resp.data; // temp, just to display server response
    });
  }

})
