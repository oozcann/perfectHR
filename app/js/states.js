var myApp = angular.module("myApp", ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../view/home.html',
        controller: [
             '$rootScope',
             function ($rootScope) {
                 $rootScope.$emit('homePageBreadcrumb');
             }
        ]
    })
    /*
    .state('employees-list', {
        url: '/employees-list',
        templateUrl: "html/employeesList.html",
        controller:"employeesListController"

    })
    */   
    .state('employee', {
        url: '/employee/{employeeId}',
        templateUrl: "../view/employee-detail.html",
        controller : "employeeDetailController"

    })
    .state('new-employee', {
        url: '/employee/new',
        template: '<div employee being-edited="beingEdited" is-new="isNew"></div>',
        controller: [
            '$scope',
            '$state',
            function ($scope, $state) {
                $scope.beingEdited = true;
                $scope.isNew = true;
            }
        ]
    })
    .state('employees', {
        url: '/employees',
        templateUrl: "../view/employees.html",
        controller : "employeesListController"

    })
    .state('edit-employee', {
        url: '/employee/:employeeId/edit',
        templateUrl: "../view/drct/neweditView/new-employee.html",
        controller : "editEmployeeController"

    })
    .state('delete-employee', {
        url: '/delete-employee/{id}',
        templateUrl: "html/delete-employee.html",
        controller : "deleteEmployeeController"

    })
    .state('activate-employee', {
        url: '/activate-employee/{id}',
        templateUrl: "html/activate-employee.html",
        controller : "activateEmployeeController"

    })
    .state('birthday', {
        url: '/birthday',
        templateUrl: "html/birthday.html",
        controller : "birthdayController"

    })
    .state('test', {
        url: '/test',
        templateUrl: "html/test.html",
        controller : "testController"

    }); 

    $urlRouterProvider.otherwise("/");



}]);









