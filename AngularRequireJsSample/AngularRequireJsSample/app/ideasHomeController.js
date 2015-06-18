define(['app/ideasHomeControllerChild'], function(ideasHomeControllerChild) {
    'use strict';

    function ideasHomeController($scope, ideasDataSvc, msgtext) {
        var ideasHomeControllerObj = new ideasHomeControllerChild($scope, ideasDataSvc, msgtext);
    }

    ideasHomeController.$inject=['$scope','ideasDataSvc', 'msgtext'];

    return ideasHomeController;
});