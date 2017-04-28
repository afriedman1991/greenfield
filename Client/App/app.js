var app = angular.module("moody",['moody.userInput',"ngRoute"])
//include angular router link in the html

.config(function($routeProvider){
  $routeProvider
  .when("/",{
     templateUrl : "../index.html"
  })
  // .when("/",{
  //   templateUrl : "App/Home/home.html"
  // })
})
