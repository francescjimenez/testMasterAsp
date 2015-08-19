'use strict';

superApp.controller('MainCtrl', [ '$scope', 'ApiRest', '$interval',
  function($scope, ApiRest, $interval){

    var stopTime;

    $scope.randomNumber = '';
    $scope.randomNumbers = [];
    $scope.selectTime = 10000;

    var newInterval = function(newTime){
      stopTime = $interval(function(){
        getNumber();
      }, newTime);
    };

    var getNumber = function() {
      ApiRest.getRandom().success(function (response) {
        $scope.randomNumber = response.random;
        $scope.randomNumbers.push(response.random);
      }).error(function (data, status) {
        alert('Error');
        console.log('Code error: ' + status);
      });
    };
    getNumber();

    $scope.$watch('selectTime', function(newValue, oldValue) {
      $interval.cancel(stopTime);
      newInterval(newValue);
    });
  }
]);
