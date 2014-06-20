define(['angular'], function (angular) {
    'use strict';

    var app = angular.module('Application', []);

    app.init = function () {
        angular.bootstrap(document, ['Application']);
    };

    return app;
});