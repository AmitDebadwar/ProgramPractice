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
                var std = new Student();
                std.studentRoll = self.$scope.studentRoll;
                std.studentName = self.$scope.studentName;

                self.$scope.allStudent.push(std);
            } else {
                alert('Please enter student to add');
            }
        };
    };
    MainCtrl.$inject = ['$scope'];
    return MainCtrl;
})();

var Student = (function () {
    function Student() {
    }
    return Student;
})();

mod.controller("MainCtrl", MainCtrl);
