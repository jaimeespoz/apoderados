import { useState, useEffect } from 'react';
import { url_apoderados_query } from '../../components/routes/Urls';
import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';
import { Casos_Por_Contactar, Casos_Limite } from '../../const';
import Button from 'react-bootstrap/Button';

// url
import { url_apoderados_put } from '../../components/routes/Urls';
import CasosTabla from './CasosTabla';
import CasosFormPersonales from './CasosFormPersonales';
import CasosFormLocal from './CasosFormLocal';
import CasosFormSeleccion from './CasosFormSeleccion';
import CasosFormContactado from './CasosFormContactado';
import CasosFormNoPuede from './CasosFormNoPuede';
import CasosFormBlanco from './CasosFormBlanco';

const Ricardo = () => {
	const [db, setDb] = useState(null);
	const [opcion, setOpcion] = useState('0');
	const [dataToEdit, setDataToEdit] = useState(null);

	useEffect(() => {
		carga_query();
	}, []);

	const carga_query = () => {
		let data = {
			filter:
				'ID > 342 AND CONTACTADO=0 ORDER BY APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES',
			// ' AND CONTACTADO=0
			// 'CONTACTADO=1 AND TIPO_LOCAL_MESA="Z" ORDER BY APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES',
			limit: 20,
		};
		// alert(JSON.stringify(data));

		fetch(url_apoderados_query, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				setDb(result.apoderados);
				// alert(result.apoderados.length);
				// alert(JSON.stringify(result.apoderados[19].Id));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const carga_query_busqueda = (raiz) => {
		let data = {
			filter:
				'(LOWER(NOMBRES) LIKE "%' +
				raiz +
				'%" OR LOWER(APELLIDO_PATERNO) LIKE "%' +
				raiz +
				'%" OR LOWER(APELLIDO_MATERNO) LIKE "%' +
				raiz +
				'%") AND CONTACTADO = 0 ORDER BY APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES',
			// ' AND CONTACTADO=0
			// 'CONTACTADO=1 AND TIPO_LOCAL_MESA="Z" ORDER BY APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES',
			limit: 20,
		};

		// alert(JSON.stringify(data));
		fetch(url_apoderados_query, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				// alert(result.apoderados);
				setDb(result.apoderados);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const createData = (data) => {
	// 	data.id = Date.now();

	// 	let options = {
	// 		body: data,
	// 		headers: { 'content-type': 'application/json' },
	// 	};

	// 	// api.post(url, options).then((res) => {
	// 	// 	if (!res.err) {
	// 	// 		setDb([...db, res]);
	// 	// 	} else {
	// 	// 		setError(res);
	// 	// 	}
	// 	// });
	// };

	const updatePersonal = async (form) => {
		let data = {
			Id: form.Id,
			RUT: form.CUERPO,
			DV: form.CDV,
			NOMBRES: form.NOMBRES,
			APELLIDO_PATERNO: form.APELLIDO_PATERNO,
			APELLIDO_MATERNO: form.APELLIDO_MATERNO,
			TELEFONO_MOVIL: form.TELEFONO_MOVIL,
			EMAIL: form.EMAIL,
		};

		// alert(JSON.stringify(data));
		await fetch(url_apoderados_put + form.Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				// alert(JSON.stringify(result));
				if (result.filasafectadas === 0) {
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateLocal = async (form) => {
		let data = {
			Id: form.Id,
			CODIGO_REGION_VOTA: form.CODIGO_REGION_VOTA,
			CODIGO_COMUNA_VOTA: form.CODIGO_COMUNA_VOTA,
			CODIGO_LOCAL_VOTA: form.CODIGO_LOCAL_VOTA,
			MESA_VOTA: form.MESA_VOTA,
		};

		await fetch(url_apoderados_put + form.Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.filasafectadas === 0) {
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateSeleccion = async (form) => {
		let data = {
			Id: form.Id,
			CODIGO_COMUNA_ASIGNADA: form.CODIGO_COMUNA_ASIGNADA,
			CODIGO_LOCAL_ASIGNADO: form.CODIGO_LOCAL_ASIGNADO,
			CODIGO_MESA_ASIGNADA: form.CODIGO_MESA_ASIGNADA,
		};

		await fetch(url_apoderados_put + form.Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.filasafectadas === 0) {
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// const deleteData = (id) => {
	// 	let isDelete = window.confirm(
	// 		`¿Estás seguro de eliminar el registro con el id '${id}'?`
	// 	);

	// 	// if (isDelete) {
	// 	// 	let endpoint = `${url}/${id}`;
	// 	// 	let options = {
	// 	// 		headers: { 'content-type': 'application/json' },
	// 	// 	};

	// 	// 	api.del(endpoint, options).then((res) => {
	// 	// 		if (!res.err) {
	// 	// 			let newData = db.filter((el) => el.id !== id);
	// 	// 			setDb(newData);
	// 	// 		} else {
	// 	// 			setError(res);
	// 	// 		}
	// 	// 	});
	// 	// } else {
	// 	// 	return;
	// 	// }
	// };

	const updateContacto = async (form) => {
		let data = {
			Id: form.Id,
			CONTACTADO: form.CONTACTADO,
			CONTACTADO_CUANDO: form.CONTACTADO_CUANDO,
			TIPO_LOCAL_MESA: form.TIPO_LOCAL_MESA,
		};

		await fetch(url_apoderados_put + form.Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				// alert(JSON.stringify(data));
				// alert(JSON.stringify(result));
				if (result.filasafectadas === 0) {
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateNoPuede = async (form) => {
		let data = {
			Id: form.Id,
			CONTACTADO: form.CONTACTADO,
			CONTACTADO_CUANDO: form.CONTACTADO_CUANDO,
			TIPO_LOCAL_MESA: form.TIPO_LOCAL_MESA,
		};

		await fetch(url_apoderados_put + form.Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.filasafectadas === 0) {
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (e) => {
		const { value } = e.target;

		if (value.length > 3) {
			carga_query_busqueda(value.toLowerCase());
		}
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container my-4">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-6">
									<CasosTabla
										data={db}
										setOpcion={setOpcion}
										setDataToEdit={setDataToEdit}
									/>
									<div className="bd-1">
										<div className="row d-flex justify-content-center align-items-center">
											<div className="col-6">
												<label htmlFor="raiz" className="form-label-sm fc-blue">
													Criterio de Busqueda
												</label>
												<input
													type="text"
													className="form-control-sm"
													name="raiz"
													placeholder="Criterio busqueda (minimo 3 digitos"
													onChange={handleChange}
												/>
											</div>
										</div>
									</div>
								</div>
								{opcion === '0' && (
									<div className="col-6">
										<CasosFormBlanco />
									</div>
								)}
								{opcion === '1' && (
									<div className="col-6">
										<CasosFormPersonales
											setOpcion={setOpcion}
											updatePersonal={updatePersonal}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
								{opcion === '2' && (
									<div className="col-6">
										<CasosFormLocal
											setOpcion={setOpcion}
											updateLocal={updateLocal}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
								{opcion === '3' && (
									<div className="col-6">
										<CasosFormSeleccion
											setOpcion={setOpcion}
											updateSeleccion={updateSeleccion}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
								{opcion === '4' && (
									<div className="col-6">
										<CasosFormNoPuede
											setOpcion={setOpcion}
											updateNoPuede={updateNoPuede}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
								{opcion === '5' && (
									<div className="col-6">
										<CasosFormContactado
											setOpcion={setOpcion}
											updateContacto={updateContacto}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
			<VinculosNav />
		</>
	);
};

export default Ricardo;
