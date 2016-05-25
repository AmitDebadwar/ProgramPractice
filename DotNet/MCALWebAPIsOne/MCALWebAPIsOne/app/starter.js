var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives', 'ngFileUpload']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout,Upload) {

    $scope.activated = "starter";

    var server = "http://localhost:";
    var portNumber = "1308";
    var partialURI = "/api/MCALAPIs/";

    var uploadIcon = server + portNumber + partialURI + "uploadIcon";

      


});