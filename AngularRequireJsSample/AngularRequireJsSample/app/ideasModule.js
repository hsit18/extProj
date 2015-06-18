define(['angular',
        'ngRoute',
        'ngResource',
        'ngGrid',
        'app/config',
        'app/ideasDataSvc',
        'app/ideasHomeController',
        'app/ideaDetailsController'],
    function(angular, ngRoute, ngResource, ngGrid, config, ideasDataSvc, ideasHomeController, ideaDetailsController){
    'use strict';

    var app = angular.module('ideasApp', ['ngRoute','ngResource','ngGrid']);

    app.config(config);
    

    app.factory('ideasDataSvc',ideasDataSvc);
    app.controller('ideasHomeController', ideasHomeController);
    //app.controller('ideaDetailsController',ideaDetailsController);
    
    app.service('msgtext', function messageText(){
        this.msg = "hello";
    });
        
});