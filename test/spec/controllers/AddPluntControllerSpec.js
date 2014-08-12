describe("AddPlantController",function(){
  var controller,
      scope;
  
 function executeController () {
    controller('AddPluntController', {
      $scope: scope
    });
 }
  
  beforeEach(function () {
    module('angularTddApp');
  });
  
  beforeEach(inject(function ($controller, $rootScope) {
    controller = $controller;
    scope = $rootScope.$new();
    executeController();
  }));
  
  it("should define scope", function(){
    expect(scope).toBeDefined();
  });
});