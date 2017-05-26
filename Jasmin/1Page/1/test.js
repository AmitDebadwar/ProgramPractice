describe('Main Application', function() {
  beforeEach(module('MainApp'));

  var controller;

  beforeEach(inject(function($controller){
      controller = $controller;
  }));

  describe('Main controllers test cases', function() {
    it('F should be 786', function() {
       var scope=scope || {};
	   var mainCtrl=controller('MainCtrl',{$scope:scope});
           
       expect(scope.f).toEqual(786);
    });
  });
});