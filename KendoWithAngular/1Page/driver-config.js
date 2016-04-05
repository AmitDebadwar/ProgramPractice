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
    vm.gridOptions=getGridDetails();

    vm.drpDriverChange = function () {
        console.log('drp of drivers value changed');
    }

vm.addNew=function(){
    alert('sai');
    var grid = $("#grid").data("kendoGrid");
    grid.addRow();
    $(".k-grid-edit-row").appendTo("#grid tbody");
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
    function getGridDetails(){

        var emp=[
            {'id':'1','name':'Pune'},
            {'id':'2','name':'Latur'},
            {'id':'3','name':'Beed'},
            {'id':'4','name':'Usmanabad'},
            {'id':'5','name':'Ahmad Nagar'}
        ];

        emp.push({'id':'','name':''});

        return {

            editable: {

                createAt: "bottom"
            },
            scrollable:false,
            dataSource: {
                data: emp,
                schema: {
                    model: {
                        fields: {
                            ProductName: { type: "string" },
                            UnitPrice: { type: "number" },
                            UnitsInStock: { type: "number" },
                            Discontinued: { type: "boolean" }
                        }
                    }
                },
                pageSize: 20
            },
           columns:[
               {field:'id',title:'Id'},
               {field:'name',title:'Name',width:'150px;'}
           ]
        };
    }

});


//http://www.telerik.com/forums/add-new-row-at-the-bottom
//http://www.telerik.com/forums/add-row-in-kendo-grid
//http://demos.telerik.com/kendo-ui/grid/local-data-binding