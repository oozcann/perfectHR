myApp.directive('reminderList', function(){

    return {
        restrict : "A",
        scope: {
            reminders: '='
        },
        templateUrl: '../../../view/drct/list/reminder-list.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                $scope.getEntityAddress = 'company';

                $scope.archivedCompany = false;
                $scope.showHideArchivedCompanies = "Arşivli";
                $scope.btnClass = "btn-danger";
                $scope.toggleArchivedCompany = function () {
                    $scope.archivedCompany = !$scope.archivedCompany;
                    if ($scope.archivedCompany) {
                        $scope.showHideArchivedCompanies = "Aktif";
                        $scope.btnClass = "btn-success";
                    } else {
                        $scope.showHideArchivedCompanies = "Arşivli";
                        $scope.btnClass = "btn-danger";
                    }
                    $scope.getCompanies($scope.archivedCompany);
                };
                $scope.getCompanies = function (isArchived) {
                    const query = {archived: isArchived};
                    entityService.getList($scope.getEntityAddress, query).then((data)=>{
                        $scope.companies= data;
                    });
                };
            }
        ]
    }
});