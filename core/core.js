require.config({
    urlArgs: "bust=b3dc97a",
    paths: {
        'angular'   : './bower_components/angular/angular.min',
        'uiRouter'  : './bower_components/angular-ui-router/release/angular-ui-router.min'
    },

    shim: {
        angular: {
            exports: 'angular'
        },
        'uiRouter' : {
            deps: ['angular'],
            exports: 'uiRouter'
        }
    },

    baseUrl: 'core'
});


require(['bootstrap','uiRouter'], function (app) {
    app.init();
});
