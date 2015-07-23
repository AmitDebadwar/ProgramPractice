var app = angular.module('Mod', ['ui.router', 'ngRoute', 'templates']);


app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {

      $routeProvider
      .when('t1', {
          templateUrl: '../tmpl/t1.html'

      })
      .when('t2', {
          templateUrl: '../tmpl/t2.html'

      });

      $locationProvider.html5Mode(true);

  } ]);


app.controller("MainCtrl", ['$scope', '$http', '$stateParams', '$state',
    function ($scope, $http, $stateParams, $state) {
        $scope.msg = 'This is master page ..............................';

        $scope.currentPage = '../tmpl/t1.html';

        $scope.getTemplate = function (c) {

            if (c == 1)
                $scope.currentPage = '../tmpl/t1.html';
            else if (c == 2)
                $scope.currentPage = '../tmpl/t2.html';
            else
                $scope.currentPage = '../tmpl/t3.html';

        };
     }]);
 
 