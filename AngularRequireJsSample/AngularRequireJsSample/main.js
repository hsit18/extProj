require.config({
  paths: {
      'jquery' : 'bower_components/jquery/dist/jquery',
      'angular' : 'bower_components/angular/angular',      
      'ngRoute': 'bower_components/angular-route/angular-route',
      'ngResource': 'bower_components/angular-resource/angular-resource',            
      'ngGrid': 'bower_components/ng-grid/ng-grid-2.0.14.debug'
  },
  shim: {
      ngResource: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngRoute: {
          deps: ['angular'],
          exports: 'angular'
      },
      ngGrid: {
          deps: ['jquery', 'angular'],
          exports: 'angular'
      },
      angular: {
          exports : 'angular'
      }
  }  
});

require(['app/ideasModule'],
    function() {
        'use strict';

        angular.bootstrap(document, ['ideasApp']);
    }
);