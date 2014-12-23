var mod = angular.module('Main', []);

var MainCtrl = (function () {
    function MainCtrl($scope) {
        this.$scope = $scope;
        this.init();
    }
    MainCtrl.prototype.init = function () {
        var self = this;
        self.$scope.allStudent = [];

        this.$scope.AddStudent = function () {
            if (self.$scope.studentRoll && self.$scope.studentName) {
                var student = {
                    studentRoll: self.$scope.studentRoll,
                    studentName: self.$scope.studentName
                };
                self.$scope.allStudent.push(student);
            } else {
                alert('Please enter student to add');
            }
        };
    };
    MainCtrl.$inject = ['$scope'];
    return MainCtrl;
})();

mod.controller("MainCtrl", MainCtrl);
