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
})
.filter('age', [
	() => (dateValue) => {
    	if (!dateValue) {
			return 'Belirtilmemiş';
		}
		let birthday = moment(dateValue);
		if (!birthday.isValid()) {
			birthday = moment(dateValue, 'DD/MM/YYYY');
		}
		return moment().diff(birthday, 'years');
	}
]);
