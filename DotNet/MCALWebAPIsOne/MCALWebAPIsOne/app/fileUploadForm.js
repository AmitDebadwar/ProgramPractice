var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives', 'ngFileUpload']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout,Upload) {

    $scope.activated = "Form with Kendo file upload s";

    var server = "http://localhost:";
    var portNumber = "1308";
    var partialURI = "/api/MCALAPIs/";

    var uploadIcon = server + portNumber + partialURI + "uploadIcon";


    $scope.onSuccess = function (e) {
        //here in e you will get response (path ) of the file
        //that you have to update in scope variable before saving the form
        console.log(e);
    };
 
     
    $scope.uploadDocument = function (newIcon, idx) {
      
         Upload.upload({
            url: uploadIcon,
            data: { file: newIcon }
          
        }).then(function (resp) {
            console.log('Success ');// + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);

            $scope.model.selected.filePath = resp.data;
            $scope.model.contacts[idx] = angular.copy($scope.model.selected);
            

        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ');//+ evt.config.data.file.name);
        });

    };
     


});