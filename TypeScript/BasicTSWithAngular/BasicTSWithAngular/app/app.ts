/// <reference path="../DefinitionFiles/jquery.d.ts" />
/// <reference path="../DefinitionFiles/angular.d.ts" />

var mod = angular.module('Main', []);

class MainCtrl {
    static $inject = ['$scope'];
    constructor(public $scope) {
        this.init();
    }

    public init() {
        var self = this;
        self.$scope.allStudent = [];

        this.$scope.AddStudent = function () {

            if (self.$scope.studentRoll && self.$scope.studentName) {

                var student = {
                    studentRoll: self.$scope.studentRoll,
                    studentName: self.$scope.studentName
                };
                self.$scope.allStudent.push(student);              
            }
            else {
                alert('Please enter student to add');
            }
        }
    }
}

mod.controller("MainCtrl", MainCtrl);