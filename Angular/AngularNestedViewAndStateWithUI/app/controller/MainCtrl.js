var app = angular.module("Mod", ['ui.router']);

app.controller("MainCtrl", function ($scope, $state, $rootScope) {
    $scope.msg = "Act";

});

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
        state("settings", {
            url: "/settings",
            templateUrl: "app/view/settings.html",
        })
        .state("settings.profile", {
            url: "/profile",
            templateUrl: "app/view/profile.html"
        })
        .state("settings.account",{
            url:"/account",
            templateUrl:"app/view/account.html"
        });

    //$urlRouterProvider.otherwise("/settings");

}]);


