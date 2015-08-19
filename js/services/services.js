'use strict';

superApp.service('ApiRest', function($http){
    this.getRandom = function(){
      return $http({
        url: '/api/random',
        method: 'GET'
      })
    };
});