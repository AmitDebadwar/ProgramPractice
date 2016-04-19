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

        function getGridOptions() {
            return {
                columns: [
                    { command: [{ name: "destroy", template: "<div><span class=\"k-grid-delete fa fa-minus-square-o\"></span></div>" }], width: "50px" },
                    { field: "runStatusDescription", title: "Status", width: "180px" },
                    { field: "id", title: "Run Id", width: "180px" },
                    { field: "name", title: "Run Name", width: "180px" },
                    { field: "description", title: "Run Description", width: "180px" },
                    { field: "finFileSetName", title: "Financial Set", width: "180px" },
                    { field: "invFileSetName", title: "Inventory Set", width: "180px" },
                    { field: "ledgerName", title: "Ledger", width: "180px" },
                    { field: "runPeriod", title: "Period", width: "180px" },
                    { field: "catName", title: "Catalogue", width: "180px" },
                    { field: "moDriverSetName", title: "Driver Set", width: "180px" },
                    { field: "finRuleSetName", title: "Allocation Rules Set", width: "180px" },
                    { field: "modifiedBy", title: "Created By", width: "180px" },
                    { field: "modifiedDate", title: "Created Date", width: "180px" },
                ],
                autoBind: true,
                sortable: true,
                editable: true,
                scrollable : true,
                selectable: true,
                resizable: true,
                navigatable: true,
                editable: {
                    createAt: "bottom"
                },
                edit: function (e) {
                },
                dataBound: function (e) {
                },
                toolbar: [
                    { name: "save", template: "<a class=\"k-button k-grid-save-changes\"><span class=\"fa fa-floppy-o\"></span></a>", text: "" },
                    { name: "cancel", template: "<div class=\"k-button k-grid-cancel-changes\"><span class=\"fa fa-ban\"></span></div>", text: "" },
                ],
                dataSource: {
                    batch: true,
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                runStatusDescription: { nullable: false, editable: false },
                                id: { nullable: false, editable: false },
                                name: { nullable: false, validation: { required: { message: "Name is required" } } },
                                description: { nullable: false },
                                finFileSetName: { nullable: false, editable: false },
                                invFileSetName: { nullable: false, editable: false },
                                ledgerName: { nullable: false, editable: false },
                                runPeriod: { nullable: false, editable: false },
                                catName: { nullable: false, editable: false },
                                moDriverSetName: { nullable: false, editable: false },
                                finRuleSetName: { nullable: false, editable: false },
                                modifiedBy: { nullable: false, editable: false },
                                modifiedDate: { nullable: false, editable: false }
                            }
                        }
                    },
                    transport: {
                        read: function (e) {

                            var res=[
                                {'runStatusDescription':'sai','id':'786','name':'sairahem','description':'desc',
                                'finFileSetName':'file',
                                'invFileSetName':'inv file',
                                'ledgerName':'ledger',
                                'runPeriod':'run period',
                                'catName':'category name',
                                'moDriverSetName':'driver name',
                                'finRuleSetName':'rules names',
                                'modifiedBy':'Subodh G.',
                                'modifiedDate':'13 june 2016'}


                            ];

                                e.success(res);

                        },
                        update: function (e) {
                            runService.saveBatch(e.data.models, function (response) {
                                vm.firstTimeRowAdded = false;
                                e.success(response);
                            });
                        },
                        destroy: function (e) {
                            runService.delete(e.data.models, function (response) {
                                vm.firstTimeRowAdded = false;
                                e.success(response);
                            });
                        },

                        parameterMap: function (options, operation) {
                            if (operation !== "read" && options.models) {
                                return { models: kendo.stringify(options.models) };
                            }
                        }
                    }
                }

            };

        }






        vm.gridOptions = getGridOptions();


        vm.datePickerOptions={
            start: "decade",
            depth: "year"
        }
    }


})();

