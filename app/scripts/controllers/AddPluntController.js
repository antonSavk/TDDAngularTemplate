'use strict';

angular.module('angularTddApp').controller('AddPluntController', function ($scope, $window) {
  $scope.title = "Add New Plant";
  $scope.frequencyTypes = ["Days", "Weeks", "Month"];
  $scope.selectedFrequency = $scope.frequencyTypes[0];
  $scope.submit = function(form){
    $window.alert(form);
  };
});