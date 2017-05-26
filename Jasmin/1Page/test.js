describe('Main Application', function() {
  beforeEach(module('MainApp'));
  var that=this;
  var controller,rootScope;
  var scope=scope || {};
  var mainCtrl;
  that.compile;
  
  var customDir;
  
  
  beforeEach(inject(function($controller,_$compile_,_$rootScope_){
	  that.compile=_$compile_;
	    
      controller = $controller;
	  mainCtrl=controller('MainCtrl',{$scope:scope});
	  rootScope=_$rootScope_;
	   
	  
	  
	 
  }));

  describe('Directive', function() {
     
	 it('Simple directive',function(){
	    customDir=that.compile("<custom-directive></custom-directive>")(rootScope);
	    rootScope.$digest();
		expect(customDir.html()).toEqual('This is simple directive');	 
	 });
	 
	 
	  
	  
  });
  
  
   
  
  
  
  
  
  
  
  
});