/**
 * Created by cwr.Amit.Debadwar on 2/1/2016.
 */


angular.module("smbApp").directive('commonErrorPage', function($compile, $parse) {
    return {
        restrict: 'E',
        link: function(scope, element, attr) {
            scope.$watch(attr.content, function() {
                element.html($parse(attr.content)(scope));
                $compile(element.contents())(scope);
            }, true);
        }
    }
});