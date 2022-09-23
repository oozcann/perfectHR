var myApp = angular.module("myApp", ['ui.router','myApp.services']);

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
    .state('employeeDetail', {
        url: '/employee/{employeeId}/detail',
        templateUrl: "../view/employee-detail.html",
        controller : "employeeDetailController"

    })
    .state('new-employee', {
        url: '/employee/new',
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            function ($scope, $state, $rootScope) {
                $rootScope.$emit('newEmployeeBreadcrumb');
                $scope.beingEdited = true;
                $scope.isNew = true;
            }
        ]
    })
    .state('employee', {
        url: '/employee/{employeeId}',
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'employee',
            function ($scope, $state, $rootScope, employee) {
                $rootScope.$emit('employeeDetailBreadcrumb',{name: employee.name, surname:employee.surname});
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.employee = employee;
            }
        ],
        resolve: {
            employee: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("employee/:employeeId", {"employeeId": $stateParams.employeeId})}]
        }
    })
    .state('edit-employee', {
        url: '/employee/:employeeId/edit',
        params: { employeeId: null },
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee"></div>',
        controller: [
            '$scope',
            '$state',
            'employee',
            function ($scope, $state, employee) {
                $scope.beingEdited = true;
                $scope.isNew = false;
                $scope.employee = employee;
            }
        ],
        resolve: {
            employee: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("employee/:employeeId", {"employeeId": $stateParams.employeeId})}]
        }
    })
    .state('delete-employee', {
        url: '/delete-employee/{id}',
        templateUrl: "html/delete-employee.html",
        controller : "deleteEmployeeController"

    })
    .state('employees', {
        url: '/employees',
        templateUrl: "../view/employees.html",
        controller : "employeesListController"

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









