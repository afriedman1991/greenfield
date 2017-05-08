angular.module('app.home',['ngMaterial'])
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


.controller('homeController', function($scope, $http, $mdDialog) {
  //Menu controls
  var originatorEv;
    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

  console.log('tessssssst')

  $scope.options = {
     level : null,
     availableLevels: [3, 2, 1, 0, -1, -2, -3],
     mood : null,
     availableMoods: ['sentiment_very_dissatisfied', 'sentiment_dissatisfied', 'sentiment_neutral', 'sentiment_satisfied', 'sentiment_very_satisfied'],
     word: null,
     words: ['Content', 'So-so', 'Stressed', 'Upset', 'Motivated']
   };

  let currDate = new Date();
  $scope.time = new Date(currDate.getHours());

  $scope.submitInput = function() {
    let username = $scope.username;
    let level = availableMoods;
    let time = $scope.time;
for (let i = 0; i < level.length; i++) {
  if (mood === availableMoods[i]) {
    level = availableLevels[i]
  }
}
    console.log('username', username);
    console.log('level', level);
    console.log(typeof level);
    console.log('time is', time);

    $http({
      method: 'POST',
      url: '/db',
      data: {
        username: username,
        level: level,
        time: time
      }
    })
    .then(function(resp) {
      console.log(resp.data);
      return resp.data;
    });
  }
  originatorEv = null;
  // $scope.submitInput = postToServerFactory.postToServer();
});
