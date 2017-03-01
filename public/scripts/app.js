
//THIS IS OUR MAIN APP FILE 'app.js' 

//DEFINE THE MODULE AND NAME IT 'starsApp' 

var starsApp = angular.module('starsApp',['ngRoute'])//configure the routes

                      .config(function ($routeProvider){
                          $routeProvider

	//ROUTE FOR THE HOME PAGE

	.when('/home',{
		templateUrl : '/views/pages/home.html',
		controller : 'mainCtrl'
	})

	////ROUTE FOR THE ABOUT PAGE

   .when('/about',{
		templateUrl : '/views/pages/about.html',
		controller : 'aboutCtrl'
	})

   .when('/contact',{
		templateUrl : '/views/pages/contact.html',
		controller : 'contactCtrl'
	});

});


//CREATE THE CONTROLLER NAME IT 'mainCtrl' AND INJECT ANGULA'S $scope

starsApp.controller('mainCtrl', function($scope){

	// CREATE A MESSAGE TO DISPLAY IN OUR VIEW
   
    $scope.message="Hello Mr.Evariste!";
});


// CREATE THE CONTROLLERS AND INJECT ANGULAR'S $scope

starsApp.controller('aboutCtrl', function($scope){
         $scope.message='welcome to the About page.';
});

starsApp.controller('contacttCtrl', function($scope){
         $scope.message='welcome to the Contact page.';
});