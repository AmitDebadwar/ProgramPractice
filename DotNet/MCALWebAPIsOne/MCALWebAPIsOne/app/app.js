var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout) {

    $scope.activated = "1) Paging !";

    var server = "http://localhost:";
    var portNumber = "1308";
    var partialURI = "/api/MCALAPIs/";

    var getStudents = server + portNumber + partialURI + "getStudents";

    /*paging without database*/
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
                dataType: 'json'
            }

        },
        parameterMap: function (data, type) {
            var paramMap = kendo.data.transports.odata.parameterMap(options);
            delete paramMap.$inlinecount; // <-- remove inlinecount parameter.
            delete paramMap.$format; // <-- remove format parameter.
            return paramMap;
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
    /*paging without database end*/





});