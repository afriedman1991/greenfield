angular.module('app.home',[])
//may seperate controller and factory to adhere to the style guide

// .factory("postToServerFactory",function($scope,$http){
//   $scope.postToServer = function(){
//     $http({
//       method:"POST",
//       url: "/db",
//       data : {
//         'user': $scope.options.user,
//         'time': $scope.options.time,
//         'level': $scope.options.level,
//         'mood': $scope.options.mood,
//         'note' : $scope.options.note
//       }
//   }
// })

.controller('homeController', function($scope, $http) {
  console.log('tessssssst')
  $scope.options = {
     level : null,
     availableLevels: [3, 2, 1, 0, -1, -2, -3],
     mood : null,
     availableMoods: ['Content', 'So-so', 'Stressed', 'Upset', 'Motivated']
   };

  $scope.submitInput = function() {
    let username = $scope.username;
    let level = parseInt($scope.options.level, 10);

    console.log('username', username);
    console.log('level', level);
    console.log(typeof level);

    $http({
      method: 'POST',
      url: '/db',
      data: {
        username: username,
        level: level
      }
    })
    .then(function(resp) {
      console.log(resp.data);
      return resp.data;
    });
  }
  // $scope.submitInput = postToServerFactory.postToServer();
 })
