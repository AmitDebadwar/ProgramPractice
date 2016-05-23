var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout) {

    $scope.activated = "Server side paging and filtering (only reading data)";

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
            read: function (options) {
                var webapi = new kendo.data.transports.webapi({ prefix: "" });
                var params = webapi.parameterMap(options.data);

                 $http.get(getStudents, { params: params })
                    .success(function (data) {
                        options.success(data);
                    })
                    .error(function (data) {
                        options.error();
                    });
            }
        },
        pageSize: 10,
        serverPaging: true,
        serverSorting: true,
        serverFiltering: true,
        serverGrouping: true,
        serverAggregates: true,
        schema: $.extend({}, kendo.data.schemas.webapi, { data: "Data", total: "Total", errors: "Errors" })
    });
    /*paging without database end*/





});