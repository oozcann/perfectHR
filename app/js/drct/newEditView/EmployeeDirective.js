myApp.directive('employeeDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            employee: '=',
            companies: '='
        },
        templateUrl: '../../../view/drct/newEditView/employee-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            'referenceService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService,referenceService) => {
                $scope.getEntityAddress = 'employee';
                $scope.entity = $scope.employee;
                if (!$scope.isNew) {
                    $scope.employeeCompanyRef = $scope.employee.companyRef._id;
                }
                $scope.createCompanyRef = function (companyRefId) {
                    referenceService.createEntityRef('company', companyRefId).then((data) => {
                        $scope.employee.companyRef = data;
                    });
                };
                if (!$scope.isNew && $scope.employee.dateOfBirth) {
                    $scope.employee.dateOfBirth = new Date($scope.employee.dateOfBirth);
                }
                if (!$scope.isNew && $scope.employee.jobStartDate) {
                    $scope.employee.jobStartDate = new Date($scope.employee.jobStartDate);
                }
                $scope.removeEmployee = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Çalışanı kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz!';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Kalıcı Olarak Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.removeEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                            $state.go('employees', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.activateEmployee = function () {
                    entityService.activateEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                        $state.go($state.current, {}, {reload: true});
                    });
                };
            }
        ]
    }
});