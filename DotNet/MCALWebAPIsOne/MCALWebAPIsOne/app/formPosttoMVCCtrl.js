var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout) {

    $scope.activated = "HTML Form Posting to MVC Ctrl";

    var server = "http://localhost:";
    var portNumber = "1308";
    var partialURI = "/MCALMVC/";

    var saveData = server + portNumber + partialURI + "SaveData";

  

    $scope.save = function () {

        var obj = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            emailId: $scope.emailId,
            password: $scope.password,
            confirmPassword: $scope.confirmPassword

        };

        $http({
            url: saveData,
            dataType: "json",
            method: "POST",
            contentType: 'application/json; charset=utf-8',
            async: true,
            data: { "data": angular.toJson(obj) },

            success: function (data) {
                alert(data);
            },
            error: function (xhr) {
                alert('error');
            }
        });

    }

});