define([], function() {
    'use strict';

    function ideasHomeController($scope, ideasDataSvc, msgtext) {
        $scope.ideaName = "Todo List";

        $scope.gridOptions = {
            data: 'ideas',
            columnDefs: [
                {field: 'name', displayName: 'Name'},
                {field: 'technologies', displayName: 'Technologies'},
                {field: 'platform', displayName: 'Platforms'},
                {field: 'status', displayName: 'Status'},
                {field: 'devsNeeded', displayName: 'Vacancies'},
                {field: 'id', displayName: 'View Details', cellTemplate: '<a ng-href="#/details/{{row.getProperty(col.field)}}">View Details</a>'}
            ],
            enableColumnResize: true
        };
        
        $scope.textChk = msgtext;
        $scope.data = {};
        $scope.data.message = "123455678";
        
        $scope.reverseMyText = function(){
            return $scope.data.message.split('').reverse().join('');
        }
        
        ideasDataSvc.allIdeas().then(function(result){
            $scope.ideas=result;
            console.log($scope.ideas);
         });
    }

    return ideasHomeController;
});