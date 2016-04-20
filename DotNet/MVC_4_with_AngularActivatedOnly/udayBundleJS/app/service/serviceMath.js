var app = angular.module("testMod");

app.service("svrMath", [function () {
    return {
        getfunction: function () {
            return 'MathOperations';
        }

    }
}]);