angular.module('app',['ngRoute', 'app.home'])

.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/home/home.html',
    controller: 'homeController'
  })
  .when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'homeController'
  })
  .when('/data', {
    templateUrl: 'app/data/data.html',
  })
  .when('/login', {
    templateUrl: 'app/login/login.html',
  })
  .when('/signup', {
    templateUrl: 'app/signup/signup.html',
  })
})
