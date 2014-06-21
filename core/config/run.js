define(['../app'], function(app) {
    'use strict';

    app.run(['$state','$rootScope',function($state, $rootScope){
        console.info('Application sucessfully started with version 123');
        $rootScope.$state = $state;
    }]);
});