angular.module("DRestModule", ['ngAnimate']).provider('$copyToClipboard', [function () {

    this.$get = ['$q', '$window', function ($q, $window) {
        var body = angular.element($window.document.body);
        var textarea = angular.element('<textarea/>');
        textarea.css({
            position: 'fixed',
            opacity: '0'
        });
        return {
            copy: function (stringToCopy) {
                var deferred = $q.defer();
                deferred.notify("copying the text to clipboard");
                textarea.val(stringToCopy);
                body.append(textarea);
                textarea[0].select();

                try {
                    var successful = $window.document.execCommand('copy');
                    if (!successful) throw successful;
                    deferred.resolve(successful);
                } catch (err) {
                    deferred.reject(err);
                    //window.prompt("Copy to clipboard: Ctrl+C, Enter", toCopy);
                } finally {
                    textarea.remove();
                }
                return deferred.promise;
            }
        };
    }];
}]).filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]).directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            element.hover(function(){
                // on mouseenter
                element.tooltip('show');
            }, function(){
                // on mouseleave
                element.tooltip('hide');
            });
        }
    };
});


angular.module("DRestModule").controller("MainController", function ($scope, $copyToClipboard, $http, $q) {

    
    $scope.methodTypes = ["GET", "POST"];
    $scope.selectedMethodType = $scope.methodTypes[0];

    $scope.copyRequestDetailsTT = "Copy all request details to send in mail";
    $scope.notImpMsg = "Soory ! This feature is not implemented yet.";
    $scope.allHeaders = [{ id: guid(), key: '', value: '' }];
    $scope.allParams = [{ id: guid(), key: '', value: '' }];

    //localStorage.clear();

    $scope.allCollections = JSON.parse(localStorage.getItem("collectionList")) || [];
    $scope.history = JSON.parse(localStorage.getItem("historyList")) || [];

    $scope.responseGeneralInfo;


    // //del
    // $scope.requestBody = JSON.stringify({
    //     "name": "amit"
    // });

    $scope.requestUrl = "https://jsonplaceholder.typicode.com/users";


    $scope.clearHistoryFromStorage = function(){
        localStorage.setItem("historyList",JSON.stringify([]));
        $scope.history = [];
    }

    $scope.clearCollectionFromStorage = function(){
        localStorage.setItem("collectionList",JSON.stringify([]));
        $scope.allCollections = [];
    }

    $scope.removeHistoryItem = function(obj){

        var histories = JSON.parse(localStorage.getItem("historyList")) || [];
        var itemIndex=-1;

        for (let index = 0; index < histories.length; index++) {
            if(histories[index].id === obj.id){
                itemIndex = index;
                break;
            }
            
        }

        histories.splice(itemIndex,1);

        $scope.history = histories;

        localStorage.setItem("historyList", JSON.stringify($scope.history));


    }


    $scope.removeCollectionItem = function(obj){

        var collections = JSON.parse(localStorage.getItem("collectionList")) || [];
        var itemIndex=-1;

        for (let index = 0; index < collections.length; index++) {
            if(collections[index].id === obj.id){
                itemIndex = index;
                break;
            }
            
        }

        collections.splice(itemIndex,1);

        $scope.allCollections = collections;

        localStorage.setItem("collectionList", JSON.stringify($scope.allCollections));


    }




    $scope.selectMethodType = function (sel) {
        $scope.selectedMethodType = sel;
    }

    $scope.responseGeneralInfo = {

    }

    $scope.copyRequestWithDetails = function () {

        $scope.copyDetails = `
         <html>
<head>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
     
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
</head>
<body>

 

<table>
  <tr>
    <th>Method Type</th>
    <td> `+ ($scope.responseGeneralInfo && $scope.responseGeneralInfo.method) + ` </td>
     
  </tr>
  <tr>
    <th>URL</th>
    <td> `+ $scope.requestUrl + ` </td>
     
  </tr>
  <tr>
    <th>Request Body</th>
    <td> ` + $scope.requestBody + `</td>
   
  </tr>
  <tr>
    <th valign="top">Response Body</th>
    <td>`+ "<pre style='border:none;  background-color: transparent;'>" + $scope.responseGeneralInfo.formattedData + "</pre>" + `</td>
  </tr>
   
</table>

</body>
</html>



        
        
        
        `;

        copyWithFormatting($scope.copyDetails);
    }


    function copyWithFormatting(data) {

        var deferred = $q.defer();
        deferred.notify("copying the text to clipboard");

        var element = document.getElementById("copyText"); // Example, select the "whole" document
        element.innerHTML = data;
        // Change selected area
        var r = document.createRange();
        r.selectNode(element);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
        // Copy - requires clipboardWrite permission + crbug.com/395376 must be fixed
        document.execCommand('copy');

        element.innerHTML = "";

        deferred.resolve(true);
        return deferred.promise;
    }



    $scope.onAddHeaderClick = function () {
        $scope.allHeaders.push({ id: guid(), key: '', value: '' });
    }

    $scope.onAddParamClick = function () {
        $scope.allParams.push({ id: guid(), key: '', value: '' });
    }

    $scope.addToHistoryList = function () {

        // if ($scope.history.indexOf($scope.requestUrl) > -1) {
        //     //In the array!
        // } else {
        //     //Not in the array
        //     $scope.history.push($scope.requestUrl);
        // }

        $scope.history.unshift({ 
            id: guid(), 
            methodType: $scope.selectedMethodType, 
            url: $scope.requestUrl, 
            requestBody:  ($scope.selectedMethodType === "GET") ? "" : $scope.requestBody 
        });

        localStorage.setItem("historyList", JSON.stringify($scope.history));
    }

    $scope.onAddToCollection = function () {

        //const filtered  = $scope.allCollections.filter((item) => item.url !== $scope.requestUrl);
        //$scope.allCollections = filtered;

        
        $scope.allCollections.unshift({ 
            id: guid(), 
            methodType: $scope.selectedMethodType, 
            url: $scope.requestUrl, 
            requestBody:  ($scope.selectedMethodType === "GET") ? "" : $scope.requestBody 
        });

        localStorage.setItem("collectionList", JSON.stringify($scope.allCollections));

    }

    $scope.copyRawResponseToClipboard = function () {

        if ($scope.responseGeneralInfo && $scope.responseGeneralInfo.rawData) {
            $copyToClipboard.copy($scope.responseGeneralInfo.rawData).then(function (data) {
                alert('Copied');
            });
        }
    }

    $scope.copyPreviewToClipboard = function () {
        copyWithFormatting($scope.responseGeneralInfo.formattedData).then(function () {
            //copied
           alert('copied');
        });
    }

 

    $scope.onCall = function () {

        $scope.isLoading =true;
        $scope.addToHistoryList();
        
      
        
       var headers = $scope.allHeaders.reduce((acc, cur) => ({ ...acc, [cur.key]: cur.value }), {})

       headerObj =JSON.parse(JSON.stringify(headers));





        $scope.formattedRequestBody = syntaxHighlight($scope.requestBody || "");

        if ($scope.selectedMethodType === "POST") {
            $http.post($scope.requestUrl, $scope.requestBody).success(successCallback).error(errorCallback);
        } else if ($scope.selectedMethodType === "GET") {
            $http.get($scope.requestUrl).success(successCallback).error(errorCallback);
        }



        function successCallback(data, status, headers, config) {

            $scope.isShowSuccessIcon = true;
            $scope.isShowErrorIcon = false;

            $scope.responseGeneralInfo = {
                isError: false,
                rawData: JSON.stringify(data),
                formattedData: syntaxHighlight(JSON.stringify(data, undefined, 4)),
                requestUrl: config.url,
                headers: config.headers.Accept,
                method: config.method,
                status: status
            }

            $scope.isLoading = false;

        }

        function errorCallback(error, status, headers, config) {

            $scope.isShowSuccessIcon = false;
            $scope.isShowErrorIcon = true;

            $scope.responseGeneralInfo = {
                isError: true,
                rawData: JSON.stringify(error),
                formattedData: JSON.stringify(error),
                requestUrl: config.url,
                headers: config.headers.Accept,
                method: config.method,
                status: status
            }

            $scope.isLoading = false;

        }

    }


    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    $scope.setRequestDetailsOnPage = function(obj){
        $scope.selectedMethodType = obj.methodType;
        $scope.requestUrl = obj.url;
        $scope.requestBody = obj.requestBody;

        $scope.isShowSuccessIcon = false;
        $scope.isShowErrorIcon = false;

        $scope.formattedRequestBody="";

        $scope.responseGeneralInfo={};
        
    }
});



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

