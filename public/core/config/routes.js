define(['../app'], function(app) {
    'use strict';

    app.config(['$locationProvider', function ($location) {
        $location.hashPrefix('!');

        //$location.html5Mode(true);
    }]);

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('parent',{
            abstract : true
            })
            .state('parent.home',{
                url : "/home"
            })
    }]);
});