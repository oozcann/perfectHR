var myApp = angular.module("myApp", ['ui.router']);


myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../view/home.html'
    }); 

    $urlRouterProvider.otherwise("/");



}]);









