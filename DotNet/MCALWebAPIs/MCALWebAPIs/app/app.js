var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout) {

    $scope.activated = "UI Grid With Server Side filtering and paging !";

    var server = "http://localhost:";
    var portNumber = "2185";
    var partialURI = "/api/MCALAPIs/";

    var getStudents = server + portNumber + partialURI + "getStudents";

    $scope.gridOptions = {
        columns: [
            { "title": "Roll No", "field": "RollNo" },
            { "title": "Name", "field": "Name" }

        ],

        pageable: true,
        sortable: true
    };


    $scope.dsm = new kendo.data.DataSource({
        transport: {
            read: {
                url: getStudents,
                dataType:'json'
            }

        },
        parameterMap:function(data,type){
            console.log(data);
        },
        pageSize: 5,
        serverPaging: true,
        serverFiltering: true,
         

        schema: {
            total: function (total) {
                return total.MaxJsonLength;
            },
            data: "Data"

        }
    });






});