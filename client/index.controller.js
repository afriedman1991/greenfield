angular.module('app')

.controller('superButton', ['$scope', '$rootScope', function($scope, $rootScope) {
  $rootScope.loginButtonFunc = function() {
    $scope.loginButton = true;
  }
  $rootScope.signupButtonFunc = function() {
    $scope.signupButton = true;
  }
}]);