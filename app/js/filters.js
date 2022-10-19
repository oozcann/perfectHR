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
])
.filter('gender', [
	() => (gender) => {
    	if (!gender) {
			return 'Belirtilmemiş';
		}
		if (gender == 'E') {
			return 'Erkek';
		} else if (gender == 'K') {
		    return 'Kadın';
		} else {
		    return 'Belirtilmemiş';
		}
	}
]);
