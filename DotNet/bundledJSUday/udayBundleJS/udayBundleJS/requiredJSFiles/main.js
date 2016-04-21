

require.config({
    paths: {
        'angular': '../scripts/angular',
        'app':'../app/app'
    },

    shim: {
        'angular': {
            exports:'angular'
        }
    },



});

require([
'../app/controller/MainCtrl'
]);

require([
'../app/controller/SecondCtrl'
]);

require([
'../app/service/serviceMath'
]);


require([
'../app/service/serviceGetname'
]);

