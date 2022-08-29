export const isNumber = (str) => {
	if (str.trim() === '') {
		return false;
	}
	return !isNaN(str);
};

export const isDigitoRut = (str) => {
	if (str.trim() === '') {
		return false;
	}
	if (
		str === '0' ||
		str === '1' ||
		str === '2' ||
		str === '3' ||
		str === '4' ||
		str === '5' ||
		str === '6' ||
		str === '7' ||
		str === '8' ||
		str === '9' ||
		str === 'k' ||
		str === 'K'
	) {
		return true;
	} else {
		return false;
	}
};
