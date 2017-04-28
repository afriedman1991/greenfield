var app = angular.module("app",['moody.userInput',"ngRoute"]);
//include angular router link in the html

app.config(function($routeProvider){
  $routeProvider
  // .when("/",{
  //    templateUrl : "../index.html"
  // })
  .when("/",{
    templateUrl : "App/home/home.html"
  })
})
