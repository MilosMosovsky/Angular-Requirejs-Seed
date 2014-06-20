define([
    'angular',
    './config/routes'

], function (ng) {
    var app =  ng.module('Application', [
                    'ApplicationModule'
                ]);
    app.init = function () {
        angular.bootstrap(document, ['Application']);
    };

    return app;
});