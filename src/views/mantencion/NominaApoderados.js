// import '../App.css';
import 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable, { defaultThemes } from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';
import { url_apoderados_query } from '../../components/routes/Urls';

import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';

import TipoApoderados from '../../api/TipoApoderados.json';
import ApoderadosAsignados from '../../api/ApoderadosAsignados.json';
import ApoderadosPresentacion from '../../api/ApoderadosPresentacion.json';
import ApoderadosContactados from '../../api/ApoderadosContactados.json';
import ApoderadosValidados from '../../api/ApoderadosValidados.json';
import Mantencion from './Mantencion';

const initialForm = {
	contactados: '',
	validados: '',
	asignados: '',
	presentacion: '',
	preferencia: '',
};
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

const paginacionOpciones = {
	rowsPerPageText: 'Filas por pagina',
	rangeSeparatorText: 'de',
	selectAllTowsItem: true,
	selectAllRowsItemText: 'Todos',
};

const NominaApoderados = () => {
	const [form, setForm] = useState(initialForm);
	const [users, setUsers] = useState([]);
	const [busqueda, setBusqueda] = useState('');
	const [filtrados, setFiltrados] = useState([]);
	const [columnas, setColumnas] = useState([]);
	const [dbApoderadosContactados, setDbApoderadosContactados] = useState(null);
	const [dbApoderadosValidados, setDbApoderadosValidados] = useState(null);
	const [dbApoderadosAsignados, setDbApoderadosAsignados] = useState(null);
	const [dbApoderadosPresentacion, setDbApoderadosPresentacion] =
		useState(null);
	const [dbTipoApoderados, setDbTipoApoderados] = useState(null);
	let navigate = useNavigate();
	let api = helpHttp();

	useEffect(() => {
		// api.post(url_apoderados_query, options).then((res) => {
		// 	if (!res.err) {
		// 		setUsers(res.apoderados);
		// 	} else {
		// 		setUsers('');
		// 	}
		// });
		setDbApoderadosContactados(ApoderadosContactados.apoderadoscontactados);
		setDbApoderadosValidados(ApoderadosValidados.apoderadosvalidados);
		setDbApoderadosAsignados(ApoderadosAsignados.apoderadosasignados);
		setDbApoderadosPresentacion(ApoderadosPresentacion.apoderadospresentacion);
		setDbTipoApoderados(TipoApoderados.tipoapoderados);
	}, []);

	const consulta = () => {
		let str = '';
		if (form.contactados !== '') {
			// if (form.contactados !== '' && form.contactados !== '0') {
			str = 'CONTACTADO=' + form.contactados;
		}
		if (form.validados !== '' && form.validados !== '0') {
			if (str.length === 0) {
				str = str + 'VALIDADO=' + form.validados;
			} else {
				str = str + ' AND VALIDADO=' + form.validados;
			}
		}
		if (form.asignados !== '' && form.asignados !== '0') {
			if (str.length === 0) {
				str = str + 'ASIGNADO=' + form.asignados;
			} else {
				str = str + ' AND ASIGNADO=' + form.asignados;
			}
		}
		if (form.presentacion !== '' && form.presentacion !== '0') {
			if (str.length === 0) {
				str = str + 'SE_PRESENTO_DIA_DE_VOTACION=' + form.presentacion;
			} else {
				str = str + ' AND SE_PRESENTO_DIA_DE_VOTACION=' + form.presentacion;
			}
		}
		if (form.preferencia !== '' && form.preferencia !== '0') {
			if (str.length === 0) {
				str = str + 'PREFERENCIA_APODERADO=' + form.preferencia;
			} else {
				str = str + ' AND PREFERENCIA_APODERADO=' + form.preferencia;
			}
		}

		// alert(str);

		let data = {
			filter: str,
			limit: 100,
		};

		let options = {
			body: data,
			// headers: { 'content-type': 'application/json' },
		};

		// alert(JSON.stringify(options));
		api.post(url_apoderados_query, options).then((res) => {
			if (!res.err) {
				setUsers(res.apoderados);
			} else {
				setUsers('');
			}
		});
	};

	const onRowClicked = (row, event) => {
		// event.preventDefault();
		// alert('aca.' + JSON.stringify(row));
		// onMeetingTitleClick(event, row.id);
		// alert('====> voy a Mantencion');
		//navigate('/mantencion', { state: { Id: row.Id } });
		busca(row.Id);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		consulta();
	};

	const busca = (Id) => {
		// alert('aca');
		let data = {
			// filter: 'PREFERENCIA_APODERADO=1',
			filter: 'ID=' + Id,
			limit: 1,
		};
		// alert(JSON.stringify(data));
		let options = {
			body: data,
			// headers: { 'content-type': 'application/json' },
		};

		// alert(JSON.stringify(options));
		api.post(url_apoderados_query, options).then((res) => {
			// alert(JSON.stringify(res));
			// alert(JSON.stringify(res.apoderados));
			if (!res.err) {
				// alert('* ' + JSON.stringify(res));
				// setSeleccion(res);
				setUsers(res.apoderados);
				setFiltrados(res.apoderados);
				// alert(JSON.stringify(users));
				navigate('/mantencion', { state: { Obj: users } });
			} else {
				alert(res.status);
				// setSeleccion('');
			}
		});
	};

	const creaIndice = () => {
		let contador = 1;
		filtrados.map((elemento) => {
			elemento['Id'] = contador;
			contador++;
		});
	};

	const asignarColumnas = () => {
		const columns = [
			{
				name: 'Paterno',
				selector: (row) => row.APELLIDO_PATERNO,
				sortable: true,
			},
			{
				name: 'Materno',
				selector: (row) => row.APELLIDO_MATERNO,
				sortable: true,
			},
			{
				name: 'Nombres',
				selector: (row) => row.NOMBRES,
				sortable: true,
			},
			{
				name: 'RUT',
				selector: (row) => row.RUT + '-' + row.DV,
				right: true,
			},
			{
				name: 'EMail',
				selector: (row) => row.EMAIL,
				grow: 3,
			},
			{
				name: 'Celular',
				selector: (row) => row.TELEFONO_MOVIL,
			},
		];

		setColumnas(columns);
	};

	const busquedaHandler = async (e) => {
		e.persist();
		await setBusqueda(e.target.value);
		filtarElementos();
	};

	const filtarElementos = () => {
		let search = users.filter((item) => {
			if (
				item.APELLIDO_PATERNO.includes(busqueda) ||
				item.APELLIDO_MATERNO.includes(busqueda) ||
				item.NOMBRES.includes(busqueda)
			) {
				return item;
			}
		});
		setFiltrados(search);
	};

	useEffect(() => {
		creaIndice();
		asignarColumnas();
		//setFiltrados(users);
	}, []);

	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto my-2 mx-24">
						<hr></hr>
						<div className="container-row">
							<div className="flex-auto">
								<label className="form-label-sm">Contactado</label>
								<div className="bootstrap-select">
									<select
										name="cb_contactado"
										id="cb_contactado"
										className="texto-sm fc-grey"
										onChange={(e) => {
											form.contactados = e.target.value;
										}}
									>
										<option value="" className="texto-sm fc-grey">
											Elige una Opcion
										</option>
										{dbApoderadosContactados &&
											dbApoderadosContactados.map((el) => (
												<option
													key={el.id}
													value={el.id}
													className="texto-sm fc-grey"
												>
													{el.descripcion}
												</option>
											))}
									</select>
								</div>
							</div>

							<div className="flex-auto">
								<label className="form-label-sm">Validado</label>
								<div className="bootstrap-select">
									<select
										name="cb_validado"
										id="cb_validado"
										className="texto-sm fc-grey"
										onChange={(e) => {
											form.validados = e.target.value;
										}}
									>
										<option value="" className="texto-sm fc-grey">
											Elige una Opcion
										</option>
										{dbApoderadosValidados &&
											dbApoderadosValidados.map((el) => (
												<option
													key={el.id}
													value={el.id}
													className="texto-sm fc-grey"
												>
													{el.descripcion}
												</option>
											))}
									</select>
								</div>
							</div>

							<div className="flex-auto">
								<label className="form-label-sm">Asignacion</label>
								<div className="bootstrap-select">
									<select
										name="cb_asignado"
										id="cb_asignado"
										className="texto-sm fc-grey"
										onChange={(e) => {
											form.asignados = e.target.value;
										}}
									>
										<option value="" className="texto-sm fc-grey">
											Elige una Opcion
										</option>
										{dbApoderadosAsignados &&
											dbApoderadosAsignados.map((el) => (
												<option
													key={el.id}
													value={el.id}
													className="texto-sm fc-grey"
												>
													{el.descripcion}
												</option>
											))}
									</select>
								</div>
							</div>
						</div>
						<hr></hr>
						<div className="container-row jc-center">
							<div className="flex-auto">
								<label className="form-label-sm">Presentacion</label>
								<div className="bootstrap-select">
									<select
										name="cb_presentacion"
										id="cb_presentacion"
										className="texto-sm fc-grey"
										onChange={(e) => {
											form.presentacion = e.target.value;
										}}
									>
										<option value="" className="texto-sm fc-grey">
											Elige una Opcion
										</option>
										{dbApoderadosPresentacion &&
											dbApoderadosPresentacion.map((el) => (
												<option
													key={el.id}
													value={el.id}
													className="texto-sm fc-grey"
												>
													{el.descripcion}
												</option>
											))}
									</select>
								</div>
							</div>

							<div className="flex-auto">
								<label className="form-label-sm">Tipo de Participacion</label>
								<div className="bootstrap-select">
									<select
										name="cb_preferencia"
										id="cb_preferencia"
										className="texto-sm fc-grey"
										onChange={(e) => {
											form.preferencia = e.target.value;
										}}
									>
										<option value="" className="texto-sm fc-grey">
											Elige una Opcion
										</option>
										{dbTipoApoderados &&
											dbTipoApoderados.map((el) => (
												<option
													key={el.id}
													value={el.id}
													className="texto-sm fc-grey"
												>
													{el.descripcion}
												</option>
											))}
									</select>
								</div>
							</div>

							<div className="flex-auto">
								<button onClick={handleSubmit} className="btn-primary mt-8">
									Aceptar
								</button>
							</div>
						</div>
						<hr></hr>
					</section>

					<section className="flex-auto my-2 mx-24">
						<div className="container-row">
							<article className="flex-auto bd-1">
								<div className="container-row my-3 mx-3">
									<article className="flex-auto">
										<div className="table-responsive">
											<div className="barraBusqueda">
												<input
													type="text"
													placeholder="Buscar"
													className="texto"
													name="busqueda"
													value={busqueda}
													onChange={busquedaHandler}
												/>
												<button type="button" className="btnBuscar">
													<FontAwesomeIcon icon={faSearch} />{' '}
												</button>
											</div>
											<DataTable
												title="Apoderados x el Rechazo"
												columns={columnas}
												// onRowClicked={onRowClicked}
												onRowClicked={<Mantencion />}
												// data={users}
												data={filtrados}
												noDataComponent={<span>Sin Informacion</span>}
												customStyles={customStyles}
												highlightOnHover={true}
												striped={true}
												pointerOnHover={true}
												pagination
												paginationComponentOptions={paginacionOpciones}
												fixedHeader
												fixedHeaderScrollHeight="600px"
												responsive={true}
											/>
										</div>
									</article>
								</div>
							</article>
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
};

export default NominaApoderados;
