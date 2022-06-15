var myApp = angular.module("myApp", ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../view/home.html'
    })
    .state('employees-list', {
        url: '/employees-list',
        templateUrl: "html/employeesList.html",
        controller:"employeesListController"

    })
    .state('archived-employees', {
        url: '/archived-employees',
        templateUrl: "html/archived-employees.html",
        controller:"archivedEmployeesController"

    })    
    .state('employee', {
        url: '/employee/{id}',
        templateUrl: "html/employee-detail.html",
        controller : "employeeDetailController"

    })
    .state('employees', {
        url: '/employees',
        templateUrl: "html/employees.html",
        controller : "employeesListController"

    })
    .state('new-employee', {
        url: '/new-employee',
        templateUrl: "../view/new-employee.html",
        controller : "newEmployeeController",
        data: {
            pageHeader: {
                title: 'PAGE_HEADER.EQUIPMENT.TITLE',
                titleSmall: 'PAGE_HEADER.EQUIPMENT.DESCRIPTION'
            },
            breadcrumbItems: [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:"#!/employees"},
                {name: "Yeni Çalışan", link:""}
            ]
        },
        reload: true

    })
    .state('edit-employee', {
        url: '/edit-employee/{id}',
        templateUrl: "html/edit-employee.html",
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









