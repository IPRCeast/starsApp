// app.js

var iprceast = angular.module('iprceast', ['ui.router']);

iprceast.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })

        // CONTACT STATES AND NESTED VIEWS ========================================
        .state('collegeOfTechnology', {
            url: '/college',
            templateUrl: 'views/collegeOfTechnology.html'
        })
          // CONTACT STATES AND NESTED VIEWS ========================================
        .state('tss', {
            url: '/tss',
            templateUrl: 'views/tss.html'
        })
          // CONTACT STATES AND NESTED VIEWS ========================================
        .state('vtc', {
            url: '/vtc',
            templateUrl: 'views/vtc.html'
        })
        // ONLINE APPLICATION STATES AND  ========================================
        .state('login', {
            url: '/onlineapplication',
            templateUrl: 'views/login.html'
        })
        // ONLINE APPLICATION STATES AND  ========================================
        .state('signUp', {
            url: '/signUp',
            templateUrl: 'views/signUp.html'
        })
        // BACKGROUND STATES AND  ========================================
        .state('main', {
            url: '/applicationForm',
            templateUrl: 'views/main.html'
        })
         // CREATE ACCOUNT STATES ========================================
        .state('appForm', {
            url: '/appForm',
            templateUrl: 'views/appForm.html'
        })
        // CREATE APPLICATION STATES ========================================
        .state('passwordRecovery', {
            url: '/passwordRecovery',
            templateUrl: 'views/passwordRecovery.html'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});