  
require(['app'], function (app) {
    app.controller('MainCtrl', ['$scope', 'svrMath', function ($scope, svrMath) {

        $scope.msg = "sairahem message from controller";
        $scope.math = svrMath.getfunction();

    }]);
});