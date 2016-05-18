

$scope.allStudentInfo = function () {
    $http.get(getStudents, {}).success(function (data, status) {
        console.log(data);
    });


}


$scope.gridDataSource = {
    transport: {
        read: function (e) {
            $http.get(getStudents, {}).success(function (data, status) {
                console.log(e);
                e.success(data.Data);
            });

        }
    },

    schema: {
        total: function (response) {
            console.log(response.Data);
            return response.Data
        },
        model: {
            id: "RollNo",
            fields: {

                'Name': { type: "string", editable: true, nullable: false, validation: { required: true } },
                'RollNo': { type: "string", editable: true, nullable: false, validation: { required: true } }
            }
        }
    },


    pageSize: 2,
    serverPaging: true,
    serverFiltering: true



};



$scope.gridDataSource786 = {
    transport: {
        read: function (response) {
            $http.get(getStudents, {}).success(function (data, status) {
                console.log(data.Data);
                response.success(data.Data);
            });
        }
    },
    pageSize: 2,
    serverPaging: true,
    serverFiltering: true



};


$scope.dsm1 = new kendo.data.DataSource({
    transport: {
        read: function (e) {

            var requestData = {
                page: e.data.page,
                pageSize: e.data.pageSize,
                type: "hello"
            };


            $http.get(getStudents, { data: requestData }).success(function (data, status) {
                console.log(data.Data);
                e.success(data);
            });
        }
    },
    pageSize: 2,
    serverPaging: true,
    serverFiltering: true,

    schema: {
        total: function (total) {
            return total.Data.length;

        },
        data: "Data"

    }
});



$scope.gridDataSource123 = {
    transport: {
        read: function (options) {
            var webapi = new kendo.data.transports.webapi({ prefix: "" });
            var params = webapi.parameterMap(options.data);

            $http.get(getStudents, {})
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
};



