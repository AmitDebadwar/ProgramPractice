angular
    .module('MainApp', [])
    .controller('MainCtrl', ["$scope",function($scope){
		$scope.msg="Unit Testing";
		$scope.f=786;
		$scope.testFilter="amit";
	}]).directive('customDirective',function(){
		return {
			restrict:'AE',
			replace:true,
		 
			template:'<b>This is simple directive</b>'
		}
	});
    
 
    
 