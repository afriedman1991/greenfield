angular.module('app.data',[])
.controller("dataController",function($scope, $http){
  let userData = 'testing';

  $scope.displayTable = function() {
    // Should modularize this
    $http({
      method: 'GET',
      url: '/data'
    })
    .then(function(resp) {
      console.log(resp.data);
      userData = resp.data;
      $scope.tableGraph = userData; // temp, just to display server response
    });
  }
})
