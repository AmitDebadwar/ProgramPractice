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

                var std = new Student();
                std.studentRoll = self.$scope.studentRoll;
                std.studentName = self.$scope.studentName;

                self.$scope.allStudent.push(std);              
            }
            else {
                alert('Please enter student to add');
            }
        }
    }
}

class Student
{
    studentRoll: number;
    studentName: string;
}

mod.controller("MainCtrl", MainCtrl);