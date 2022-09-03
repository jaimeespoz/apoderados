import Email from './Email';

const mockData = {
	apoderados: [
		{
			NOMBRES: 'Carlos',
			APELLIDO_PATERNO: 'Thomas',
			APELLIDO_MATERNO: 'Suhr',
			DESC_REGION_VOTA: 'sds sd sd sd',
			DESC_COMUNA_VOTA: 'sdsd sd sd sd',
			DESC_LOCAL_VOTA: 'sdsdsdsd sd sd sd sd',
			MESA_VOTA: 1,
		},
	],
};

function EmailMain() {
	return <Email data={mockData.apoderados} />;
}

export default EmailMain;
