angular
    .module('MainApp', [])
    .controller('MainCtrl', ["$scope",function($scope){
		$scope.msg="Unit Testing";
		$scope.f=786;
		$scope.testFilter="amit";
	}]).
	filter('sFilter',function(){
		return function(value){
			return value.toUpperCase();
		}
	}).
	filter('cur',function(){
		return function(value){
			return "$"+value;
		}
	});
    
 
    
 