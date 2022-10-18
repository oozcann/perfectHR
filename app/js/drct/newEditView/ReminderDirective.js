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
            'referenceService',
            ($scope,referenceService) => {
                $scope.getEntityAddress = 'reminder';
                $scope.entity = $scope.reminder;
                if (!$scope.isNew) {
                    $scope.reminderCompanyRef = $scope.reminder.companyRef._id;
                }
                $scope.createCompanyRef = function (companyRefId) {
                    referenceService.createEntityRef('company', companyRefId).then((data) => {
                        $scope.reminder.companyRef = data;
                    });
                };
            }
        ]
    }
});