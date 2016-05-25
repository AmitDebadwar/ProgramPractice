var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives', 'ngFileUpload']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout,Upload) {

    $scope.activated = "iCon Creater Form";

    var server = "http://localhost:";
    var portNumber = "1308";
    var partialURI = "/api/MCALAPIs/";

    var uploadIcon = server + portNumber + partialURI + "uploadIcon";
    $scope.completeUrl = uploadIcon;


    var init = function () {
        $scope.brandingName = "MCAL";
        $scope.pageTitle = "MCAL Title";
        $scope.foreColor = "#ff0000";
        $scope.bgColor = "#0400ff";
        $scope.logoUrl = 'images/apple.png';
    };

    init();

    

    $scope.removeLogo = function () {
         $scope.logoUrl = 'images/noImage.png';
    }

    $scope.onSuccess = function (e) {
        
        $scope.logoUrl = '../uploadedIcons/'+  e.files[0].name;
        $scope.$apply();
        console.log($scope.logoUrl);
    }
     
});