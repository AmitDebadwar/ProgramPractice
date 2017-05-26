describe('Main Application', function() {
  beforeEach(module('MainApp'));

  var controller;
  var scope=scope || {};
  var mainCtrl;
  var tf;
  var cf;
  beforeEach(inject(function($controller,$filter){
      controller = $controller;
	  mainCtrl=controller('MainCtrl',{$scope:scope});
	  tf=$filter('sFilter');
	  cf=$filter('cur');
  }));

  describe('Main controllers test cases', function() {
    it('F should be 786', function() {
       expect(scope.f).toEqual(786);
    });
	
	it('Filter must update text to Uppercase',function(){
		scope.testFilter="ram";
		
		var s=tf(scope.testFilter);
		expect(s).toEqual("RAM");
	});
	
	it('Currency filter',function(){
		expect(cf("40")).toEqual("$40");
	});
	
  });
  
  
   
  
  
  
  
  
  
  
  
});