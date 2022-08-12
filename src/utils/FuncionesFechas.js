export const fecha_del_dia = () => {
	return new Date();
};

export const fecha_del_dia_aaaammdd = () => {
	var today = new Date();
	return (
		today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate()
	);
};

export const fecha_nula_aaaammdd = () => {
	return '1900/01/01';
};
