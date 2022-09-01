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

export const formatea_numero = (numero) => {
	let resultado = numero;
	if (numero !== '') {
		// if (numero.trim() !== '') {
		let nro = numero.trim();
		let largo = nro.length;

		if (largo === 6) {
			resultado = nro.substring(0, 3) + '.' + nro.substring(3, 6);
		}
		if (largo === 7) {
			resultado =
				nro.substring(0, 1) +
				'.' +
				nro.substring(1, 4) +
				'.' +
				nro.substring(4, 7);
		}
		if (largo === 8) {
			resultado =
				nro.substring(0, 2) +
				'.' +
				nro.substring(2, 5) +
				'.' +
				nro.substring(5, 8);
		}
		// if (largo === 9) {
		// 	resultado =
		// 		'(56) ' +
		// 		nro.substring(0, 1) +
		// 		' ' +
		// 		nro.substring(1, 5) +
		// 		' ' +
		// 		nro.substring(5, 9);
		// }
	}
	return resultado;
};
