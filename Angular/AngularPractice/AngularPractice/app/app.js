/// <reference path="../lib/angular.js" />


var module = angular.module('MainMod', []);

module.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.msg = "Activated";

    var obj = {
        num1: 3,
        num2: 4,
        add: function () {
            return this.num1 + this.num2;
        },

    }


    $scope.callMyFunction = function () {
        alert(obj.num1);
        obj.num1 = 7;
        alert(obj.num1);


        obj.num2 = 9;
        var newAddition = obj.add();
        alert(newAddition);

    };









}]);