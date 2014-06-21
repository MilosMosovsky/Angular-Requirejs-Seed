define(['./config/module'], function (module) {
    'use strict';

    module.controller('user/main', ['$scope', function ($scope) {

        console.info('Controller user/main loaded');
        /** scope manipulation here **/

        $scope.users = [{}];


        $scope.addNewUser = function()
        {
            $scope.users.push({});
        };

        $scope.removeUser = function(user)
        {
            user = $scope.users.indexOf(user);
            if(user !== -1)
            {
                $scope.users.splice(user,1);
            }
        };

    }])
});