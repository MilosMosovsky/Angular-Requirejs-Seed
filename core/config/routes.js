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
                        templateUrl : 'core/view/global/Layout.html'
                    },
                    'header@parent' : {
                        templateUrl : 'core/view/global/Header.html'
                    }

                }
            })
            .state('parent.dashboard',{
                url : "/dashboard",
                views : {
                    'content@parent' : {
                        templateUrl : 'core/view/dashboard/Dashboard.html',
                        controller : 'dashboard/main'
                    }
                }
            })
            .state('parent.user',{
                url : "/user",
                views : {
                    'content@parent' : {
                        templateUrl : 'core/view/user/User.html',
                        controller : 'user/main'
                    }
                }
            })
    }]);
});