'use strict';

/* App Module */
var superApp = angular.module('superApp', [
  'ui.router'
])

.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
  // Definición variables globales
  $rootScope.urlBase = '/';
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/views/home.html",
      controller: 'MainCtrl',
    });
  
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });    
  
}]);
