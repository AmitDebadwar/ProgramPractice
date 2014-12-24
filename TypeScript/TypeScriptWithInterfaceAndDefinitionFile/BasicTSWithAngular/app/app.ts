
/// <reference path="../DefinitionFiles/IMainCtrl.d.ts.ts" />
/// <reference path="../DefinitionFiles/jquery.d.ts" />
/// <reference path="../DefinitionFiles/angular.d.ts" />

var mod = angular.module('Main', []);

class MainCtrl {

    constructor(private $scope: MainModule.IMainCtrl) {
        this.init();
    }

    public init() {
        this.$scope.addStudent = () => {
            alert('public add student is called');
            this.setValue();
        };
    }

    private setValue() {
        this.$scope.idNumber = 786;
    }
}

mod.controller("MainCtrl", MainCtrl);