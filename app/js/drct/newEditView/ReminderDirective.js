myApp.directive('reminderDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            reminder: '=',
            companies: '='
        },
        templateUrl: '../../../view/drct/newEditView/reminder-directive.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                $scope.getEntityAddress = 'reminder';
                $scope.entity = $scope.reminder;
                if (!$scope.isNew) {
                    $scope.reminderCompanyRef = $scope.reminder.companyRef._id;
                }
                $scope.createCompanyRef = function (companyRefId) {
                    entityService.findById('company/:companyId', {"companyId": companyRefId}).then((data) => {
                        $scope.reminder.companyRef = {
                            _id: data._id,
                            name: data.name,
                            class: 'COMPANY'
                        };
                    });
                };
            }
        ]
    }
});