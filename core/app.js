define([
/** angular library **/
    'angular',
/** main features **/
    'features/user/feature',
    'features/dashboard/feature'

], function (angular) {

    'use strict';

    var app = angular.module('ApplicationModule', [
        'ui.router',

    /** features **/
        'user.feature',
        'dashboard.feature',
        'mm.foundation'
    ]);

    app.init = function () {
        console.info('Bootstrapping seed application ... ');
        angular.bootstrap(document, ['ApplicationModule']);
    };
    return app;
});