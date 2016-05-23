var app = angular.module('testApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives', 'ngFileUpload']);

angular.module('testApp').controller('testCtrl', function ($scope, $http, $timeout,Upload) {

    $scope.activated = "Grid View With File Upload";

    var server = "http://localhost:";
    var portNumber = "1308";
    var partialURI = "/api/MCALAPIs/";

    var uploadIcon = server + portNumber + partialURI + "uploadIcon";


    $scope.model = {
        contacts: [{
            id: 1,
            firstName: "Ben",
            lastName: "Jackson",
            foreColor: 'green',
            bgColor: 'pink',
            icon: 'myR',
            filePath:''
        }, {
            id: 2,
            firstName: "Sally",
            lastName: "Cruise",
            foreColor: "darkorange",
            bgColor: 'lightblue',
            icon: 'myQ',
            filePath: ''

        }, {
            id: 3,
            firstName: "John",
            lastName: "Samily",
            foreColor: "red",
            bgColor: 'darkRed',
            icon: 'myP',
            filePath: ''
        }, {
            id: 4,
            firstName: "Jane",
            lastName: "Doe",
            foreColor: "darkpink",
            bgColor: 'darkOrange',
            icon: 'myN',
            filePath: ''
        }],
        selected: {}
    };

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (contact) {
        if (contact.id === $scope.model.selected.id) return 'edit';
        else return 'display';
    };

    $scope.editContact = function (contact) {
        $scope.model.selected = angular.copy(contact);
    };

    $scope.saveContact = function (idx) {
        console.log("Saving contact");
        $scope.model.contacts[idx] = angular.copy($scope.model.selected);


        console.log($scope.model.selected);
        $scope.reset();
    };

    $scope.reset = function () {
        $scope.model.selected = {};
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