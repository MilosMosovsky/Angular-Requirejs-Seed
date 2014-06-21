define([
    'angular',
    './controllers/config/index'

], function (ng) {

    return  ng.module('dashboard.feature', [
        'dashboard.controllers'
    ]);
});