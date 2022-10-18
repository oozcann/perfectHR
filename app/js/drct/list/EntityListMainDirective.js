myApp.directive('entityListMain', function(){

    return {
        restrict : "A",
        scope: {
            headerItems: '='
        },
        templateUrl: '../../../view/drct/list/entity-list-main-directive.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                console.log("headerItems: " + $scope.headerItems);
            }
        ]
    }
});
/*
TAM OLARAK SONUÇLANMADI BU. İLERİDE BELKİ KULLANILABİLİR YA DA ÖZELLEŞTİRİLEBİLİR.
ŞU AN İÇİN KULLANIM DIŞI.
*/