define(['angular'], function (angular) {
    'use strict';

    var app = angular.module('ApplicationModule', [
        'ui.router'
    ]);


    app.init = function () {
        angular.bootstrap(document, ['ApplicationModule']);
    };

    return app;
});