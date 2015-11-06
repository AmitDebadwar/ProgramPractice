/**
 * Created by cwr.Amit.Debadwar on 11/6/2015.
 */

app.controller("loginCtrl",['$scope','$state','$rootScope','LanguageLoader',function ($scope, $state, $rootScope,LanguageLoader) {
    $scope.msg = "Act";

    $scope.action = function () {
        alert('login working');
        angular.element().find(".rc-anchor .rc-anchor-normal .rc-anchor-light").hide();
    };

    $scope.languages = [
        {text: 'English', code: 'en'},
        {text: 'Español', code: 'sp'}
    ];

    $scope.selectedLanguage =$scope.languages[0];


    $scope.changeLanguage=function(){
        LanguageLoader.setNewLang( $scope.selectedLanguage.code);

        $('#captcha').html('');
        $('#captcha').append('<div class="g-recaptcha" data-sitekey="6LfqRBATAAAAAPvAwjvJQqon0M0VEdfcK3qEBrAt"></div>');

        var code='';
        if($scope.selectedLanguage.code=='en')
        {
            code='en';

        }

        else{ code='nl';}
        var sc="https://www.google.com/recaptcha/api.js?hl="+code;

        $.getScript(sc);
    };

    $.getScript("https://www.google.com/recaptcha/api.js");




}]);