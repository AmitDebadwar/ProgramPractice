var app = angular.module("testMod");

app.controller("MainCtrl", ["$scope", "svrMath", function ($scope, svrMath) {
    $scope.msg = "sairahem";

    $scope.math = svrMath.getfunction();

}]);