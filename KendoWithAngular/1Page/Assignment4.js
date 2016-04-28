(function () {

    var app = angular.module('TestApp', ['ui.bootstrap', 'ngRoute', 'kendo.directives']);

    app.controller("TestCtrl", TestCtrl);


    TestCtrl.$inject = ["$scope","$http"];

    function TestCtrl($scope,$http) {

        var vm = this;

        vm.activated = "Assignment 4";


        $scope.onFilesSelect = function (e) {
            console.log(e);
        }

        vm.states = new kendo.data.DataSource({
            transport: {
                read: {
                    url: 'stubData/Assignment4/statesDrp.json',
                    dataType: 'json'
                }
            }

        });

        vm.districts = new kendo.data.HierarchicalDataSource({

                transport: {
                    read: function(response){
                          $http.get(vm.districtUrl).then(function(d){
                               response.success(d.data);
                          });
                    }
                }

        });





        vm.fileUploadConfig = {
            async: {
                saveUrl: 'app/upload/service',
                removeUrl: 'remove',
                removeVerb: 'DELETE',
                autoUpload: false

            }
        }


        vm.stateChange = function (e) {

            if (vm.selectedState == 1) {
                vm.districtUrl = 'stubData/Assignment4/MAHDistrict.json';
                vm.districts.read();
            }

            else if (vm.selectedState == 2) {
                vm.districtUrl = 'stubData/Assignment4/GJDistrict.json';
                vm.districts.read();
            }

           if(vm.selectedState == 3 || vm.selectedState == 4 || vm.selectedState == 5){
               vm.isDistrictHide=true;
           }
            else{
               vm.isDistrictHide=false;
           }



        }

    }

})();
