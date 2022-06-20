myApp.controller('employeesListController', ['$scope', '$state','$stateParams','$http', '$rootScope',
    function ($scope, $state,$stateParams, $http, $rootScope) {
  
    $scope.goToNewEmployeePage = function () {

        $state.go('new-employee',{});

    };
    $rootScope.$emit('employees');
    //$scope.hex = calculateAgeOfEmployee.myFunc(255);
    $http.get("/json/employees.json").then(function (response) {

        $scope.employees = response.data.employees;
		

/*calculateTheDifferencesInDays*/

    function calculateAnnualLeaveEarned (){

        var currentDate = new Date().getTime();
        for(i=0; i< $scope.employees.length; i++){            
            var empJobStartDate = $scope.employees[i].jobStartDate;
            empJobStartDate = empJobStartDate.split(".");
            var employeeJobStartDate = new Date(empJobStartDate[2],(empJobStartDate[1]-1),empJobStartDate[0]).getTime();
            var daysInDifference = Math.round((currentDate - employeeJobStartDate) / (1000 * 3600 * 24));
            var izinHakki;
            var year;
            if(daysInDifference<365){
                year = Math.floor(daysInDifference / 365);
                izinHakki = year * 0; 
            }
            else if(daysInDifference >= 365 && daysInDifference < 1825){
                year = Math.floor(daysInDifference / 365);
                izinHakki = year * 14;       
            }
            else if(daysInDifference >= 1825 && daysInDifference < 5475){
                year = Math.floor(daysInDifference / 365);
                izinHakki= year * 21;      
            }
            else if(daysInDifference >= 5475){
                year = Math.floor(daysInDifference / 365);
                izinHakki = year * 26;    
            }
            else{
                izinHakki = "Error";      
            }
            $scope.employees[i].annualLeaveEarned = izinHakki;
        }

}
calculateAnnualLeaveEarned();

/*calculateTheAgeOfTheEmployee*/

function calculateEmployeeAge (){

        var currentDate = new Date().getTime();
        for(i=0; i< $scope.employees.length; i++){            
            var empDateOfBirth = $scope.employees[i].dateOfBirth;
            empDateOfBirth = empDateOfBirth.split(".");
            var employeeDateOfBirth = new Date(empDateOfBirth[2],(empDateOfBirth[1]-1),empDateOfBirth[0]).getTime();
            var daysInDifference = Math.round((currentDate - employeeDateOfBirth) / (1000 * 3600 * 24));
         
            $scope.employees[i].age = Math.floor(daysInDifference / 365);
            
        }

}
calculateEmployeeAge();


    });


$scope.exportData = function (){
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("employeesList");
 
    /* Declaring array variable */
    var rows =[];
 
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
        column4 = row.cells[3].innerText;
        column5 = row.cells[4].innerText;
 
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
                column4,
                column5
            ]
        );
 
        }
        csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        /* create a hidden <a> DOM node and set its download attribute */
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "employees_list.csv");
        document.body.appendChild(link);
         /* download the data file named "Stock_Price_Report.csv" */
        link.click();
}



}]);


