/**
 * Created by cwr.Amit.Debadwar on 11/6/2015.
 */
angular.module("Mod").config(['$stateProvider', '$urlRouterProvider','$translateProvider', function ($stateProvider, $urlRouterProvider,$translateProvider) {
    $stateProvider.
        state("login", {
            url: "/login",
            templateUrl: "app/view/login.html",
        })
        .state("settings", {
            url: "/settings",
            templateUrl: "app/view/settings.html",
        })
        .state("settings.profile", {
            url: "/profile",
            templateUrl: "app/view/profile.html"
        })
        .state("settings.account",{
            url:"/account",
            templateUrl:"app/view/account.html"
        });

    $urlRouterProvider.otherwise("/login");


    $translateProvider.useStaticFilesLoader({
        prefix: 'app/resources/',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });

    $translateProvider.preferredLanguage('en');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage

}]);


angular.module("Mod").service('LanguageLoader',function($translate){

    return {
        setNewLang:function(locale){
            $translate.use(locale);
        }

    }
});