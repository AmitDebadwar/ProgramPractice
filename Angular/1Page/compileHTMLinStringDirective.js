/**
 * Created by cwr.Amit.Debadwar on 2/1/2016.
 */

/**
 * if you have a button html in xml file or in a json.
 * It will be rendered only but not compiled and will not execute
 * the function of the controller.
 *
 * For executing the function in a controller you need to recompile directive.
 *
 * e.g. On common error page of SMB, relogin page.
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