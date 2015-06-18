define([],function(){
    'use strict';

    function config($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'templates/home.html', controller: 'ideasHomeController'})
            .when('/details/:id',{templateUrl:'templates/ideaDetails.html', controller:'ideaDetailsController'})
            .otherwise({redirectTo: '/home'});
    }

    config.$inject=['$routeProvider'];

    return config;
});



//define([],function(){
//    'use strict';
//
//    function config($routeProvider,$controllerProvider) {
//        $routeProvider.when('/home', {templateUrl: 'templates/home.html', controller: function(){
//            
//            require(['app/ideasHomeController'], function (ideasHomeController) {
//                $controllerProvider.register('ideasHomeController', ideasHomeController);
//                return 'ideasHomeController';
//            });
//            
//        }})
//            .when('/details/:id',{templateUrl:'templates/ideaDetails.html', controller:'ideaDetailsController'})
//            .otherwise({redirectTo: '/home'});
//    }
//
//    config.$inject=['$routeProvider', '$controllerProvider'];
//
//    return config;
//});