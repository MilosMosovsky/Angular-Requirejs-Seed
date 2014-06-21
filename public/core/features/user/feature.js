define([
    'angular',
    './controllers/config/index'

], function (ng) {

    return  ng.module('user.feature', [
        'user.controllers'
    ]);
});