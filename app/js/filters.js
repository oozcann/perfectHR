angular.module('myApp.filters', [])
.filter('formatDateToDDMMYYYY', () => (date) => {
    if (date && date != null && date != '') {
        let day = date.slice(8, 10);
        const dateArray = date.split('-',2);
        dateArray.push(day);
        return dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
    } else {
        return '';
    }
});
