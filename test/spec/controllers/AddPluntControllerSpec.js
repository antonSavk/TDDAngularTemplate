describe("AddPlantController",function(){
  var controller, mockWindow,
      scope;
  
 function executeController () {
    controller('AddPluntController', {
      $scope: scope,
      $window: mockWindow
    });
 }
  
  beforeEach(function () {
    module('angularTddApp');
  });
  
  beforeEach(inject(function ($controller, $rootScope, $window) {
    controller = $controller;
    scope = $rootScope.$new();
    mockWindow = {
      alert: jasmine.createSpy()
    };
    executeController();
  }));
  
  it("should define scope", function(){
    expect(scope).toBeDefined();
  });
  
  it("should define numbers array", function(){
    expect(scope.frequencyTypes).toBeDefined();
  });
  
  it("should save form on submit", function(){
      scope.submit();
      expect(mockWindow.alert).toHaveBeenCalled();
  });
  

});