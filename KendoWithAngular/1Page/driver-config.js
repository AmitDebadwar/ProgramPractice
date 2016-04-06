/**
 * Created by cwr.Amit.Debadwar on 4/5/2016.
 */

var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

(function () {

    app.directive("moDropDown", DropDown);

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

angular.module('testApp').controller('testCtrl', function ($scope, $window) {

    var vm = this;

    vm.toolbarOptions = getToolbarOptions();
    vm.driverOptions = getAllDrivers();
    vm.gridOptions = getGridDetails();

    vm.drpDriverChange = function () {
        console.log('drp of drivers value changed');
    }


    //get all driver options
    function getAllDrivers() {
        return{
            optionLabel: "Master Driver Set",
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Pune", value: 1 },
                { text: "Mumbai", value: 2 },
                { text: "Jalna", value: 3 },
                { text: "Parbhani", value: 4 },
                { text: "Latur", value: 5 }
            ]
        }
    };


    //get toolbar options
    function getToolbarOptions() {
        var items = [];

        items.push({
            template: "Driver Options",
            overflow: "never",
            attributes: {
                "class": "leftLabel"
            }
        });

        items.push({
            template: "<mo-drop-down mo-options=\"vm.driverOptions\" mo-function=\"vm.drpDriverChange(id)\" style=\"width: 250px;\"></mo-drop-down>",
            overflow: "never"
        });

        items.push({
            template: "<input type='checkbox' ng-model='vm.extraText' ng-true-value='true' ng-false-value='false'/>",
            overflow: "never",
            attributes: {
                "class": "toolBarCheckbox"
            }
        });

        items.push({
            template: "some text goes here",
            overflow: "never",
            attributes: {
                "class": "leftLabel"
            }
        });

        items.push({
            template: '<kendo-button class="k-primary" ng-click="onClick1()">Auto Assign</kendo-button>',
            overflow: "never",
            attributes: {
                "class": "autoAssignBTN"
            }
        });


        return { items: items };
    }





//  get rhs grid options
    function getGridDetails() {



    }


    var data = [
        {'id': '1', 'name': 'Pune','temp':'cool'},
        {'id': '2', 'name': 'Latur','temp':'hot'}

    ];

    var dataSource = new kendo.data.DataSource({
        //data: data,
        transport: {
            read: function(e) {
                e.success(data);
            },
            update: function(e) {
                e.success();
            },
            create: function(e) {
                var item = e.data;
                item.Id = data.length + 1;
                e.success(item);
            }
        },
        schema: {
            model: {

                fields: {
                    id: { type: "number" },
                    name: { type: "string" },
                    temp:{type:"string"}

                }
            }
        }
    });

    var grid= $("#rhsGrid").kendoGrid({
        dataSource: dataSource,
        scrollable: false,
        navigatable: true,
        editable : {
            createAt : "bottom"
        },
        navigatable: true,
        toolbar:  ["save","cancel", "create"],
        columns: [{field:"id",title:'Id'}, {field:'name',title:'Name'},'temp']
    }).data("kendoGrid");

    grid.tbody.on('keydown',function(e){
        console.log(e.currentTarget);
        if($(e.target).closest('td').is(':last-child') && $(e.target).closest('tr').is(':last-child')){
            grid.addRow();

        }
    })



});


//http://www.telerik.com/forums/add-new-row-at-the-bottom
//http://www.telerik.com/forums/add-row-in-kendo-grid
//http://demos.telerik.com/kendo-ui/grid/local-data-binding