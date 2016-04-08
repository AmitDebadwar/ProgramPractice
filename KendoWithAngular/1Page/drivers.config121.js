(function () {

    angular.module("mo.rules.drivers").directive("moDropDown", DropDown);

    DropDown.$inject = [];

    function DropDown($timeout) {
        var directive = {
            restrict: "AE",
            replace: true,
            template: "<select kendo-drop-down-list k-options=\"vm.dropDownOptions\" k-ng-model=\"vm.preSelectedId\" k-value-primitive=\"true\"></div>",
            scope: {
                moOptions: "=",
                moFunction: "&",
                preSelectedId: "=?"
            },
            link: linkFunc,
            controller: DropDownController,
            controllerAs: "vm",
            bindToController: true // because the scope is isolated
        };
        return directive;

        function linkFunc(scope, element) {

        }
    }

    DropDownController.$inject = [];

    function DropDownController() {
        var vm = this;

        vm.onSelect = onSelect;

        vm.dropDownOptions = getDropDownOptions();

        function onSelect(e) {
            var dataItem = this.dataItem(e.item);
            vm.moFunction({ dataId: dataItem.id });
        };

        //
        // see http://docs.telerik.com/kendo-ui/AngularJS/the-grid-widget
        //
        function getDropDownOptions() {
            return {
                select: vm.onSelect,
                dataBound: vm.onSelect,
                dataTextField: vm.moOptions.dataTextField,
                dataValueField: vm.moOptions.dataValueField,
                dataSource: vm.moOptions.dataSource,
            };
        }
    }

})();

(function () {
    angular.module("mo.rules.drivers")
        .directive("moDriverRules", DriverRules);

    DriverRules.$inject = [];

    function DriverRules() {
        var directive = {
            restrict: "AE",
            replace: false,
            templateUrl: "drivers-main121.html",
            scope: {
            },
            link: linkFunc,
            controller: DriverRulesController,
            controllerAs: "vm",
            bindToController: true // because the scope is isolated
        };
        return directive;

        function linkFunc(scope, element) {
            var splitter = $("#splitter").data("kendoSplitter");



            function resize() {
                resizeService.resizeElement(splitter.wrapper);
                resizeService.resizeElement(element.find("#listView"), 180);
                resizeService.resizeElement(element.find("#grid"), 140);
                splitter.resize();
            }

            var grid = $(".k-grid").data("kendoGrid");

            grid.tbody.on('keydown', function (e) {
                if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')) {

                    model = grid.dataItem($(e.target).closest('tr'));
                    model.set("weighting", e.target.value);

                    var keyCode = e.keyCode || e.which;
                    if (keyCode == 9) {
                        grid.addRow();

                    }
                }

            });






        }
    }

    DriverRulesController.$inject = ["$scope"];

    function DriverRulesController($scope) {
        var vm = this;




        var vm = this;
        vm.lhsToolbarOptions = getToolbarOptions();
        vm.measuredObjectDriverOptions = getDropDownOptions("measuredObjectDrivers");

        vm.onMeasuredObjectSelected = onMeasuredObjectSelected;

        vm.lhsListViewOptions = getListViewOptions();

        vm.gridOptions = getGridOptions();

        vm.lhsSearch = function () { applyParams(); };

        vm.lhsParams = {
            moDriverSetId: 0,
            showMapped: 0,
            searchTerm: null
        };


        vm.rhsParams = {
            moDriverSetId: 0,
            moId: 0
        };


        vm.inventoryMasterDropdownParams = {
            moDriverSetId: 0
        };

        vm.onMoDriverSelected = onMoDriverSelected;

        vm.onCheckBoxChanged = onCheckBoxChanged;

        vm.firstTimeRowAdded = false;



        function applyParams() {
            //$("#listView").data("kendoListView").dataSource.read();
        }

        function onMoDriverSelected(moDriverSetId) {
            vm.lhsParams.moDriverSetId = vm.rhsParams.moDriverSetId = vm.inventoryMasterDropdownParams.moDriverSetId = moDriverSetId;
            vm.firstTimeRowAdded = false;
            applyParams();
        }

        function onCheckBoxChanged() {
            applyParams();
        }


        function onMeasuredObjectSelected(e) {
            vm.firstTimeRowAdded = false;
            var selected = this.select();
            var model = this.dataSource.getByUid(selected.attr("data-uid"));
            vm.rhsParams.moId = model.id;
            $("#grid").data("kendoGrid").dataSource.read();
        }



        function getToolbarOptions() {
            var items = [];

            items.push({
                template: "<mo-drop-down mo-options=\"vm.measuredObjectDriverOptions\" mo-function=\"vm.onMoDriverSelected(dataId)\" style=\"width: 250px;\"></mo-drop-down>",
                overflow: "never"
            });
            items.push({
                template: "<input class=\"ml\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"vm.lhsParams.showMapped\" ng-change=\"vm.onCheckBoxChanged()\" type='checkbox' style=\"margin-left: 100px;\"><span style=\" color : white; margin-left: 10px; margin-right: 10px;\">Show mapped Measured Objects</span>"

            });
            items.push({
                template: "<button class='pull-right btn btn-primary' value='Auto Assign'>Auto Assign</button>",attributes : {"class" : "pull-right mt-sm btn"}

            });


            return { items: items };
        }

        function getDropDownOptions(lookup) {
            var dropDownData=[
                {'id':'1','name':'Amit'},
                {'id':'2','name':'Shariq'},
                {'id':'3','name':'Rohit'},
                {'id':'4','name':'Rohan'},
                {'id':'5','name':'Mohsin'}
            ];

            return {
                dataTextField: "name",
                dataValueField: "id",
                dataSource: dropDownData
            };
        };

        function getListViewOptions() {
            var listViewOptions=[
                {'id':'1','name':'Amit'},
                {'id':'2','name':'Shariq'},
                {'id':'3','name':'Rohit'},
                {'id':'4','name':'Rohan'},
                {'id':'5','name':'Mohsin'}
            ];


            $scope.source = new kendo.data.DataSource({
                data: listViewOptions,
                pageSize: 21
            });

            return {
                template: "<div class=\"ml\">#: name #</div>",
                autoBind: true,
                selectable: true,
                change: vm.onMeasuredObjectSelected,
                dataSource: $scope.source

            }
        };

        //vm.a = true;


        function createDropDown(lookup) {
            return function (container, options) {
                $('<input required data-text-field="name" data-value-field="id" data-bind="value:' + options.field + '"/>')
                    .appendTo(container)
                    .kendoDropDownList({
                        optionLabel: "select",
                        dataSource: {
                            transport: {
                                read: function (e) {

                                        e.success([{id:'1',name:'amit'}]);

                                }
                            }
                        },
                        change: function () {
                            var dataItem=  this.dataItem();
                            $(".k-grid").data("kendoGrid").dataItem(this.element.closest("tr")).set("name", dataItem.name);
                        }

                    });
            }
        }


        function getGridOptions() {
            return {
                columns: [
                    { command: [{ name: "destroy", template: "<div class='k-grid-delete'><span class='fa fa-minus-square-o'></span></div>" }], width: 50 },
                    {
                        field: "imId", title: "Inventory Masters", width: 180, editor: createDropDown("inventoryMasters"),
                        template: "#=name#"
                        //template: "#if(costCentreType != null && costCentreType.name != null) {# #=costCentreType.name# #}#"
                    },
                    { field: "weighting", title: "Weighting", width: 180 },
                ],

                //filterable: true,
                autoBind: false,
                sortable: true,
                //pageable: true,
                editable: true,
                selectable: true,
                resizable: true,
                navigatable: true,
                editable: {
                    createAt: "bottom"
                },
                edit: function (e) {




                    if (e.model.isNew() == false && e.model.oldRecord === 1) {
                        //$('[data-text-field="name"]').attr("disabled", true);
                        //http://www.telerik.com/forums/foreign-key-column-disabled-in-edit-mode-but-editable-in-add-mode
                        if (e.container.find("input[data-text-field=\"name\"]").length > 0) {
                            e.preventDefault();



                            e.sender.closeCell(e.container);
                        }
                    }
                    if (e.model.isNew() == true) {
                        e.container.parent().find('.k-grid-delete').css("display", "none");
                        e.model.id = vm.rhsParams.moDriverSetId;
                        e.model.moId = vm.rhsParams.moId;
                        e.model.oldRecord = 0;
                    }

                },
                dataBound: function (e) {
                    if (vm.firstTimeRowAdded === false) {
                        vm.firstTimeRowAdded = true;
                        e.sender.addRow();
                    }

                },
                toolbar: [
                    { name: "create", template: "<div class='k-button k-grid-add'><span class='fa fa-plus'></span></div>", text: "" },
                    { name: "save", template: "<a class='k-button k-grid-save-changes'><span class='fa fa-floppy-o'></span></a>", text: "" },
                    { name: "cancel", template: "<div class='k-button k-grid-cancel-changes'><span class='fa fa-ban'></span></div>", text: "" },
                ],
                dataSource: {
                    //pageSize: 5,
                    batch: true,
                    schema: {
                        model: {
                            id: "id",
                            fields: {
                                id: { editable: false, nullable: false },
                                moId: { editable: false, nullable: false },
                                imId: { nullable: false },
                                name: { nullable: true },
                                weighting: { nullable: false, defaultValue : 1, validation: { required: { message: "Weighting is required" } } },
                                oldRecord: {
                                    defaultValue: 1,
                                },
                            },
                        },
                        parse: function (response) {
                            $.each(response, function (idx, item) {
                                if (!item.oldRecord) {
                                    item.oldRecord = 1;
                                }
                            });
                            return response;
                        }
                    },
                    transport: {
                        read: function (e) {

                                e.success([{id:'1',name:'Amit',moId:'786',imId:'7864',weighting:'7869'}]);

                        },
                        create: function (e) {
                            measuredObjectDriversService.saveBatch(e.data.models, function (response) {
                                e.success(response);
                            });
                        },
                        update: function (e) {
                            measuredObjectDriversService.saveBatch(e.data.models, function (response) {
                                e.success(response);
                            });
                        },
                        destroy: function (e) {
                            measuredObjectDriversService.delete(e.data.models, function (response) {
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













        //var grid = $("#grid").kendoGrid(vm.gridOptions).data("kendoGrid");

        //var grid = $(".k-grid").kendoGrid().data("kendoGrid");
        //$(".k-grid").find("tbody").on('keydown', function (e) {
        //    if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')) {
        //        grid.addRow();
        //    }
        //});

        //grid.tbody.on('keydown', function (e) {

        //    if ($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')) {

        //        var keyCode = e.keyCode || e.which;
        //        if (keyCode == 9) {
        //            e.preventDefault();
        //            grid.addRow();
        //        }

        //    }


        //});


    }

})();