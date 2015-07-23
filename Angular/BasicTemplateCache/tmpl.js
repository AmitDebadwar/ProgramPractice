angular.module('templates', ['../tmpl/t1.html', '../tmpl/t2.html', '../tmpl/t3.html']);

angular.module("../tmpl/t1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../tmpl/t1.html",
    "<div><h1 style='color:green;'>This is first 1 page</h1></div>");
}]);

angular.module("../tmpl/t2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../tmpl/t2.html",
    "<div><h1 style='color:gray'>This is second 2 page</h1></div>");
}]);

angular.module("../tmpl/t3.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../tmpl/t3.html",
    "<div><h1 style='color: Red'>This is third 3 page</h1></div>");
}]);
