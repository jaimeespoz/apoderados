// import '../App.css';
import 'styled-components';
import React, { useState, useEffect } from 'react';
import DataTable, { defaultThemes } from 'react-data-table-component';
import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';
import {
	url_apoderados_query,
	url_regiones,
} from '../../components/routes/Urls';

const customStyles = {
	header: {
		style: {
			minHeight: '32px',
		},
	},
	headRow: {
		style: {
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: defaultThemes.default.divider.default,
		},
	},
	headCells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				borderRightColor: defaultThemes.default.divider.default,
			},
		},
	},
	cells: {
		style: {
			'&:not(:last-of-type)': {
				borderRightStyle: 'solid',
				borderRightWidth: '1px',
				color: '#000000',
				borderRightColor: defaultThemes.default.divider.default,
			},
		},
	},
};

const NominaApoderados = () => {
	//1 - Configurar los hooks
	const [users, setUsers] = useState([]);
	let api = helpHttp();

	let data = {
		filter: "NOMBRES='JAIme'",
		limit: 3,
	};

	let options = {
		body: data,
		// headers: { 'content-type': 'application/json' },
	};

	useEffect(() => {
		api.post(url_apoderados_query, options).then((res) => {
			if (!res.err) {
				setUsers(res.apoderados);
			} else {
				setUsers('');
			}
		});
	}, []);

	//3 - Configuramos las columns para Datatable
	const columns = [
		{
			name: 'Paterno',
			selector: (row) => row.APELLIDO_PATERNO,
			sortable: true,
			width: '15%',
		},
		{
			name: 'Materno',
			selector: (row) => row.APELLIDO_MATERNO,
			sortable: true,
			width: '15%',
		},
		{
			name: 'Nombres',
			selector: (row) => row.NOMBRES,
			sortable: true,
			width: '15%',
		},
		{
			name: 'RUT',
			selector: (row) => row.RUT + '-' + row.DV,
			width: '15%',
		},
		{
			name: 'EMail',
			selector: (row) => row.EMAIL,
			width: '25%',
		},
		{
			name: 'Celular',
			selector: (row) => row.TELEFONO_MOVIL,
			width: '15%',
		},
	];

	const onRowClicked = (row, event) => {
		alert('aca.' + JSON.stringify(row));
		// onMeetingTitleClick(event, row.id);
	};

	return (
		<main>
			<div className="container-row mh">
				<section className="flex-auto my-8 w-50"></section>
				<section className="flex-auto my-8 w-50 mx-24">
					<div className="container-row">
						<article className="flex-auto bd-1">
							<div className="container-row my-3 mx-3">
								<article className="flex-auto">
									<DataTable
										title="Apoderados x el Rechazo"
										columns={columns}
										onRowClicked={onRowClicked}
										data={users}
										customStyles={customStyles}
										highlightOnHover={true}
										striped={true}
										pointerOnHover={true}
										pagination
										responsive={true}
									/>
								</article>
							</div>
						</article>
					</div>
				</section>
			</div>
		</main>
	);
};

export default NominaApoderados;
