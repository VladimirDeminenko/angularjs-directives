(function () {
    'use strict';

    const APP_NAME = 'Learning AngularJS Directives> Helmet';
    const HELMET_COLOR = 'red';
    const HTML_URL = './templates/hello-world.html';
    const IMAGE_URL = './images/helmet.svg';

    angular.module('UserDirectivesApp', [])
        .controller('MainController', MainController)
        .directive('helloWorld', HelloWorld)
        .directive('helmet', Helmet);

    MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.appName = APP_NAME;
        $scope.helmetColor = HELMET_COLOR;
    }

    function HelloWorld() {
        return {
            scope: {
                appName: '@applicationName'
            },
            templateUrl: HTML_URL
        };
    }

    function Helmet() {
        return {
            scope: {
                color: '@'
            },
            templateUrl: IMAGE_URL
        };
    }
})();
