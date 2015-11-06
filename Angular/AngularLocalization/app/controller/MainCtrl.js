var app = angular.module("Mod", ['ui.router','pascalprecht.translate','tmh.dynamicLocale','ngCookies']);

app.controller("MainCtrl", function ($scope, $state, $rootScope) {
    $scope.msg = "Act";

});



