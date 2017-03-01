
//Define the 'starsApp' Module

var starsApp = angular.module('starsApp',['ngRoute']);

//configure the routes

starsApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	//home
	.when('/',{
		templateUrl: "pages/home.html",

	})
   .when('/about',{
		templateUrl: "pages/about.html",})

   .when('/services',{
		templateUrl: "pages/services.html",
	});

}]);