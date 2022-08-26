const TipoParticipacion = (cod) => {
	switch (cod) {
		case '1':
			return 'Mismo Local y Misma Mesa';
		case '2':
			return 'Mismo Local y Cualquier Mesa del Local';
		case '3':
			return 'Misma Comuna y Cualquier Local';
		case '4':
			return 'Otra Comuna (especificar) y Otro Local (especificar)';
		case '5':
			return 'Otra Comuna (especificar) y Cualquier Local';
		default:
			return 'Sin Informacion';
	}
};

export default TipoParticipacion;
