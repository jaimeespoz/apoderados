import 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataTable, { defaultThemes } from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { url_apoderados_query } from '../../components/routes/Urls';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';

// url
import { url_apoderados_put } from '../../components/routes/Urls';

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

const Seleccion = () => {
	// const location = useLocation();
	// const { Query } = location.state;
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [filtrados, setFiltrados] = useState([]);
	const [columnas, setColumnas] = useState([]);

	// alert(Query);

	useEffect(() => {
		carga_query();
		asignarColumnas();
		setFiltrados(users);
	}, []);

	const carga_query = async () => {
		let data = {
			filter: 'NOMBRES<>""',
			limit: 1000,
		};

		let options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};

		await fetch(url_apoderados_query, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				setUsers(result.apoderados);
				setFiltrados(result.apoderados);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const asignarColumnas = () => {
		const columns = [
			{
				name: 'Paterno',
				selector: (row) =>
					row.APELLIDO_PATERNO +
					' ' +
					row.APELLIDO_MATERNO +
					', ' +
					row.NOMBRES,
				sortable: true,
				grow: 2,
			},
			{
				name: 'Correo',
				selector: (row) => row.EMAIL,
				sortable: true,
			},
			{
				name: 'Celular',
				selector: (row) => row.TELEFONO_MOVIL,
			},
			{
				name: 'Action',
				cell: (row) => (
					<>
						<Link to={'/mantencion'} state={{ Row: row }}>
							<button className="btn btn-sm btn-primary">Editar</button>
						</Link>
						<button
							onClick={() => handleButtonClick(row.Id)}
							className="btn btn-sm btn-secondary"
						>
							Contactado
						</button>
					</>
				),
			},
		];
		setColumnas(columns);
	};

	const conditionalRowStyles = [
		{
			when: (row) => row.CONTACTADO === '0',
			style: {
				backgroundColor: 'pink',
				color: 'white',
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
		{
			when: (row) => row.CONTACTADO !== '0',
			style: {
				backgroundColor: 'lightgreen',
				color: 'white',
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
	];

	useEffect(() => {
		let result = users.filter((item) => {
			if (
				item.APELLIDO_PATERNO.toLowerCase().includes(search.toLowerCase()) ||
				item.APELLIDO_MATERNO.toLowerCase().includes(search.toLowerCase()) ||
				item.NOMBRES.toLowerCase().includes(search.toLowerCase())
			) {
				return item;
			}
		});
		setFiltrados(result);
	}, [search]);

	const handleButtonClick = async (Id) => {
		let data = {
			CONTACTADO: '1',
		};

		fetch(url_apoderados_put + Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				// if (result.filasafectadas === 0) {
				// 	alert('No se pudo grabar');
				// }
				// if (result.filasafectadas === 1) {
				// 	alert('Grabado');
				// }
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleVolver = (e) => {
		// navigate('/seleccion');
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto bg-azul px-10 wd-30">
						<OpcionesNav />
					</section>
					<section className="flex-auto Aligner-item--center wd-70">
						<div className="container-row jc-center mx-12">
							<div className="flex-auto">
								<p className="titulo-xl fc-grey my-8">
									Auditaremos el Proceso de Votacion
								</p>
							</div>
							<div className="container-row my-3 mx-3">
								<DataTable
									// title="Apoderados x el Rechazo"
									columns={columnas}
									data={filtrados}
									conditionalRowStyles={conditionalRowStyles}
									customStyles={customStyles}
									highlightOnHover
									striped
									pointerOnHover
									pagination
									paginationComponentOptions={paginacionOpciones}
									localization={{
										header: {
											actions: 'Acciones',
										},
									}}
									subHeader
									subHeaderComponent={
										<input
											type="text"
											placeholder="buscar"
											className="w-25 form-control"
											value={search}
											onChange={(e) => setSearch(e.target.value)}
										></input>
									}
									dense
								/>
							</div>
						</div>
						<button onClick={handleVolver} className="btn-primary mt-8">
							Volver
						</button>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
};

export default Seleccion;
