require.config({
    urlArgs: "bust=b3dc97a",
    paths: {
        'angular'   : './../bower_components/angular/angular.min',
        'uiRouter'  : './../bower_components/angular-ui-router/release/angular-ui-router.min',
        'foundation': './../bower_components/angular-foundation/mm-foundation-tpls'
    },

    shim: {
        angular: {
            exports: 'angular'
        },
        'uiRouter' : {
            deps: ['angular'],
            exports: 'uiRouter'
        },
        foundation : {
            deps : ['angular'],
            exports : 'foundation'
        }
    },

    baseUrl: 'core'
});


require(['bootstrap','uiRouter','foundation'], function (app) {
    app.init();
});
