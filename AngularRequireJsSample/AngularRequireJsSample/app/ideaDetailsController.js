define([], function(app){
    'use strict';

    function ideaDetailsController($scope, $routeParams, ideasDataSvc){
        console.log('ideaDetailsController');
        ideasDataSvc.ideaDetails($routeParams.id)
            .then(function(result){
                $scope.ideaDetails = result;
            });
    }

    ideaDetailsController.$inject=['$scope','$routeParams','ideasDataSvc'];

    return ideaDetailsController;
});
