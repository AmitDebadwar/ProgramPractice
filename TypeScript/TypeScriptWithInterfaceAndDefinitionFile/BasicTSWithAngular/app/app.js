var mod = angular.module('Main', []);

var MainCtrl = (function () {
    function MainCtrl($scope) {
        this.$scope = $scope;
        this.init();
    }
    MainCtrl.prototype.init = function () {
        var _this = this;
        this.$scope.addStudent = function () {
            alert('public add student is called');
            _this.setValue();
        };
    };

    MainCtrl.prototype.setValue = function () {
        this.$scope.idNumber = 786;
    };
    return MainCtrl;
})();

mod.controller("MainCtrl", MainCtrl);
