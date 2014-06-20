require.config({
    urlArgs: "bust=b3dc97a",
    paths: {

        'angular': './../../bower_components/angular/angular.min'
    },
    baseUrl: '/core'
});


require(['app'], function (app) {
    app.init();
});
