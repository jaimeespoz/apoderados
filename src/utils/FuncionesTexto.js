export const formatea_celular = (numero) => {
	let resultado = numero;
	if (numero !== '') {
		let nro = numero.trim();
		let largo = nro.length;

		if (largo === 11) {
			resultado =
				'(' +
				nro.substring(0, 2) +
				') ' +
				nro.substring(2, 3) +
				' ' +
				nro.substring(3, 7) +
				' ' +
				nro.substring(7, 11);
		}
		if (largo === 9) {
			resultado =
				'(56) ' +
				nro.substring(0, 1) +
				' ' +
				nro.substring(1, 5) +
				' ' +
				nro.substring(5, 9);
		}
	}
	return resultado;
};

export const capitalize = (s) => {
	if (typeof s !== 'string') return '';
	s = s.toLowerCase();
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export const crunch = (paterno, materno, nombres, largo) => {
	let nombre =
		capitalize(paterno.trim()) +
		' ' +
		capitalize(materno.trim()) +
		', ' +
		capitalize(nombres.trim());
	// if (typeof s !== 'string') return '';
	let len = nombre.trim().length;
	if (largo > len) {
		largo = len;
	}
	return nombre.substring(0, largo);
};
