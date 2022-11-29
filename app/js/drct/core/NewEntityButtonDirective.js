myApp.directive('newEntityButton', function(){
    return {
        restrict : "EA",
        scope: {
            entity: '@'
        },
        templateUrl: '../../../view/drct/core/new-entity-button-directive.html',
        controller: [
            '$scope',
            '$state',
            'entityService',
            '$stateParams',
            ($scope,$state,entityService,$stateParams) => {
                entityService.getList("employee", {"archived": false}).then((data) => {
                    $scope.employees = data;
                    $scope.employeesForBootboxInput = [];
                    for (let i = 0; i < $scope.employees.length; i++) {
                        let employeeObject = {};
                        employeeObject.text = $scope.employees[i].fullName;
                        employeeObject.value = $scope.employees[i]._id;
                        $scope.employeesForBootboxInput.push(employeeObject);
                    }
                });
                $scope.askForEmployeeBeforeRedirect = function (stateToRedirect,idForQuery) {
                    const query = {};
                    if ($stateParams[idForQuery]) {
                        query[idForQuery] = $stateParams[idForQuery];
                        $state.go(stateToRedirect,query);
                    } else {
                        bootbox.prompt({
                            size: "medium",
                            className: 'bootboxPrompt',
                            closeButton: false,
                            title: "Yönlendirme Öncesi Çalışan Seçimi",
                            inputType: 'select',
                            inputOptions: $scope.employeesForBootboxInput,
                            buttons: {
                                confirm: {
                                    label: 'Devam Et',
                                    className: 'btn-success btn-square'
                                },
                                cancel: {
                                    label: 'Vazgeç',
                                    className: 'btn-danger btn-square'
                                }
                            },
                            callback: function(result){
                                query[idForQuery] = result;
                                $state.go(stateToRedirect,query);
                            }
                        });
                    }
                };
                $scope.goToNewCompanyPage = function () {
                    $state.go('new-company',{});
                };
                $scope.goToNewEmployeePage = function () {
                    $state.go('new-employee',{});
                };
                $scope.goToNewReminderPage = function () {
                    $state.go('new-reminder',{});
                };
                $scope.goToNewBonusPage = function () {
                    $scope.askForEmployeeBeforeRedirect('employee.newBonus','employeeId');
                };
                $scope.goToNewAnnualLeavePage = function () {
                    $scope.askForEmployeeBeforeRedirect('employee.newAnnualLeave','employeeId');
                };
            }
        ]
    }
});