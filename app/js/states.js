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
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee"></div>',
        controller: [
            '$scope',
            '$state',
            function ($scope, $state) {
                $scope.beingEdited = true;
                $scope.isNew = true;
            }
        ]
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
            employee : [
                '$http',
                '$stateParams',
                '$q',
                ($http,$stateParams,$q) => {
                    const query = {
                        "employeeId": $stateParams.employeeId
                    };
                    const deferred = $q.defer();
                    $http.post("/api/employee/:employeeId", query)
                    .then(function (response) {
                        if (response && response.data) {
                            deferred.resolve(response.data);
                        } else {
                            deferred.resolve();
                        }
                    });
                    return deferred.promise;
                }
            ]
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









