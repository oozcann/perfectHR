myApp.directive('goToNewEmployee', function(){

    return {

        restrict : "E",
        //template : '<div class="p-3 d-inline-block"><button ng-click="goToNewEmployeePage()" class="btn btn-success btn-square" style="width:112px;">Yeni Çalışan</button></div>'
        template : '<button ng-click="goToNewEmployeePage()" class="btn btn-success btn-square" style="width:112px;">Yeni Çalışan</button>'

    }


});