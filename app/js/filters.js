angular.module('myApp.filters', [])
.filter('formatDateToDDMMYYYY', () => (date) => {
    if (!date) {
        return 'Belirtilmemiş';
    }
    let dateToFormat = moment(date);
    if (dateToFormat.isValid()) {
        dateToFormat = moment(date).format('DD/MM/YYYY');
    }
    return dateToFormat;

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
