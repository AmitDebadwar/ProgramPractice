'use strict';

define([], function () {

    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = '/app/views/',
                controllersDirectory = '/app/controller/',

                setBaseDirectories = function (viewsDir, controllersDir) {
                    viewsDirectory = viewsDir;
                    controllersDirectory = controllersDir;
                    debugger;

                },

                getViewsDirectory = function () {
                    return viewsDirectory;
                },

                getControllersDirectory = function () {
                    return controllersDirectory;
                };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function (routeConfig) {

            var resolve = function (baseName, path, secure) {
                    if (!path) path = '';

                    console.log('BaseName:' + baseName);
                    console.log('path: ' + path);
                    debugger;
                    var routeDef = {};
                    routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
                    routeDef.controller = baseName + 'Controller';
                    routeDef.secure = (secure) ? secure : false;
                    routeDef.resolve = {
                        load: ['$q', '$rootScope',
                            function ($q, $rootScope) {
                                console.log("Full path: " + path + baseName);
                                console.log("F:" + routeConfig.getControllersDirectory());
                                var dependencies = [routeConfig.getControllersDirectory() + path + baseName + 'Controller.js'];
                                return resolveDependencies($q, $rootScope, dependencies);
                    }]
                    };

                    return routeDef;
                },

                resolveDependencies = function ($q, $rootScope, dependencies) {
                    var defer = $q.defer();
                    require(dependencies, function () {
                        defer.resolve();
                        $rootScope.$apply()
                    });

                    return defer.promise;
                };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('routeResolver', routeResolver);
});