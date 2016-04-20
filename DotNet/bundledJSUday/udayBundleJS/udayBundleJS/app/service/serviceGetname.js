var app = angular.module("testMod");

app.service("svrGetName", [function () {
    return {
        getName: function () {
            return 'coming from get name';
        }
        
    }
}]);