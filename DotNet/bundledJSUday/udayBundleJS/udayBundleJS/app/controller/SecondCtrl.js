 
require(['app'], function (app) {
    app.controller('SecondCtrl', ['$scope', 'svrGetName', function ($scope, svrGetName) {
        $scope.msg = "This is 2 controller";
        $scope.svr = svrGetName.getName();

    }]);
});