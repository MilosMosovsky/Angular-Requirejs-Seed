define(['../app'], function(app) {
    'use strict';

    app.config(['$locationProvider', function ($location) {
        $location.hashPrefix('!');

        //$location.html5Mode(true);
    }]);

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){

        console.info('Initializing module states ... ');
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider
            .state('parent',{
                abstract : true,
                views : {
                    '' : {
                        templateUrl : 'core/views/Layout.html'
                    },
                    'header@parent' : {
                        templateUrl : 'core/views/Header.html'
                    }

                }
            })
            .state('parent.dashboard',{
                url : "/dashboard",
                views : {
                    'content@parent' : {
                        templateUrl : 'core/features/dashboard/views/Dashboard.html',
                        controller : 'dashboard/main'
                    }
                }
            })
            .state('parent.user',{
                url : "/user",
                views : {
                    'content@parent' : {
                        templateUrl : 'core/features/user/views/User.html',
                        controller : 'user/main'
                    }
                }
            })
    }]);
});