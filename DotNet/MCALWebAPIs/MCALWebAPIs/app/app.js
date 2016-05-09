var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout) {

    $scope.activated = "UI Grid With Dynamic Columns";

    var portNumber = "32194";

    var getColumnsConfigURL = "http://localhost:" + portNumber + "/MDKServices.svc/getColumnsConfig";
    var getAllStudentInfoURL = "http://localhost:" + portNumber + "/MDKServices.svc/getAllStudentInfo";

    var procColumnConfigPersonalDetailsURL = "http://localhost:" + portNumber + "/MDKServices.svc/procColumnConfigPersonalDetails";
    var getPersonalDetailsURL = "http://localhost:" + portNumber + "/MDKServices.svc/getPersonalDetails";

    var procColumnConfigAcademicDetailsURL = "http://localhost:" + portNumber + "/MDKServices.svc/procColumnConfigAcademicDetails";
    var getAcademicDetailsURL = "http://localhost:" + portNumber + "/MDKServices.svc/getAcademicDetails";


    $scope.gridOptions = {
        autoBind: false,
        selectable: "row",
        columns: $scope.gridColumns
    };


    $scope.allStudentInfo = function () {
        $http.post(getColumnsConfigURL, {}).success(function (data, status) {
            getGridGenericColumns(data.getColumnsConfigResult);
        });

        $http.post(getAllStudentInfoURL, {}).success(function (data, status) {
            $scope.gridData = data.getAllStudentInfoResult;
             
            $timeout(function () {
                $scope.gridOptions.dataSource.data($scope.gridData);
            }, 0);


        });
    }


    $scope.acedemicDetails = function () {
        $http.post(procColumnConfigAcademicDetailsURL, {}).success(function (data, status) {
             getGridGenericColumns(data.procColumnConfigAcademicDetailsResult);
        });

        $http.post(getAcademicDetailsURL, {}).success(function (data, status) {
              
            $scope.gridData = data.getAcademicDetailsResult;
          
            $timeout(function () {
                $scope.gridOptions.dataSource.data($scope.gridData);
            }, 0);


        });
    }


    $scope.gridOptions.dataSource = new kendo.data.DataSource({
         
    });

     
    var getGridGenericColumns = function (col) {
        $scope.gridColumns = null;
        $scope.gridColumns = [];

        angular.forEach(col, function (value, key) {
            $scope.gridColumns.push(new ColumnModel(value.ColumnName, value.ColumnName));
        });

        $scope.gridOptions.columns = $scope.gridColumns;

    }
     
    function ColumnModel(field, title) {
        this.field = field;
        this.title = title;
    }
      
});