'use string';

angular.module('angularTddApp').controller('AddPluntController', function ($scope) {
  $scope.title = "Add New Plant";
  $scope.frequencyTypes = ['Days', 'Weeks', 'Month'];
});