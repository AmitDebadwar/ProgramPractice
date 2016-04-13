(function () {

    var app = angular.module('createNewRun', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

    angular.module("createNewRun")
        .directive("dirCreateNewRun", CreateNewRun);

    CreateNewRun.$inject = [];

    function CreateNewRun() {
        var directive = {
            restrict: "AE",
            replace: false,
            templateUrl: "33cnr-main.html",
            scope: {
            },
            link: linkFunc,
            controller: CreateNewRunController,
            controllerAs: "vm",
            bindToController: true
        };
        return directive;

        function linkFunc(scope, element) {

        }
    }

    CreateNewRunController.$inject = ["$scope"];

    function CreateNewRunController($scope) {
        var vm = this;

        //initialization


        vm.financialStateDS = new kendo.data.DataSource({
            data: [
                {id: 1, name: 'Opt 1'},
                {id: 2, name: 'Opt 2'},
                {id: 3, name: 'Opt 3'},
                {id: 4, name: 'Opt 4'},
                {id: 5, name: 'Opt 5'}
            ]
        });

        vm.submitRunName = function () {
            alert('Will give here server call !');
            vm.isRunNameError = true;
        }

        vm.focusRunName = function () {
            vm.isRunNameError = false;
        }

        $scope.products = new kendo.data.DataSource({
            data: [
                {status:'Available', id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
                {status:'Not Available', id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
                {status:'Not Available', id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
                {status:'Available', id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
                {status:'Available', id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' }
            ]

        });

        vm.gridOptions = {
            column: [
                { "field": "status", "title": "Status"},

                { "field": "name", "title": "Name"},
                { "field": "department", "title": "Department"},
                { "field": "lastShipment", "title": "Last Shipment" }
            ]


        }

        vm.datePickerOptions={
            start: "decade",
            depth: "year"
        }
    }


})();

