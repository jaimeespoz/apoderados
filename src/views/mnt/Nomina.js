import { useState, useEffect } from 'react';
import { url_apoderados_query } from '../../components/routes/Urls';
import { fecha_del_dia_aaaammdd } from '../../utils/FuncionesFechas';
import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';

// url
import { url_apoderados_put } from '../../components/routes/Urls';
import CasosTabla from './CasosTabla';
import CasosFormPersonales from './CasosFormPersonales';
import CasosFormLocal from './CasosFormLocal';
import CasosFormSeleccion from './CasosFormSeleccion';

const Nomina = () => {
	const [db, setDb] = useState(null);
	const [opcion, setOpcion] = useState('1');
	const [dataToEdit, setDataToEdit] = useState(null);

	useEffect(() => {
		carga_query();
	}, []);

	const carga_query = () => {
		let data = {
			filter:
				// 'APELLIDO_PATERNO="THOMAS" CONTACTADO=0 OR TIPO_LOCAL_MESA<>"none" ORDER BY APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES',
				'APELLIDO_PATERNO="THOMAS"',
			limit: 300,
		};

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
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const createData = (data) => {
		data.id = Date.now();

		let options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};

		// api.post(url, options).then((res) => {
		// 	if (!res.err) {
		// 		setDb([...db, res]);
		// 	} else {
		// 		setError(res);
		// 	}
		// });
	};

	const updatePersonales = async (form) => {
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

		// alert(form.Id);
		// alert('data: ' + JSON.stringify(data));
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
					// alert('Grabado');
					carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateLocal = async (form) => {
		alert('updateLocal');
		let data = {
			CODIGO_REGION_VOTA: form.votaregion,
			CODIGO_COMUNA_VOTA: form.votacomuna,
			CODIGO_LOCAL_VOTA: form.votalocal,
			MESA_VOTA: form.votamesa,
		};

		alert('data: ' + JSON.stringify(data));
		// await fetch(url_apoderados_put + form.Id, {
		// 	method: 'post',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(data),
		// })
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 		if (result.filasafectadas === 0) {
		// 			alert('No se pudo grabar');
		// 		}
		// 		if (result.filasafectadas === 1) {
		// 			alert('Grabado');
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

	const updateSeleccion = async (form) => {};

	const deleteData = (id) => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro con el id '${id}'?`
		);

		// if (isDelete) {
		// 	let endpoint = `${url}/${id}`;
		// 	let options = {
		// 		headers: { 'content-type': 'application/json' },
		// 	};

		// 	api.del(endpoint, options).then((res) => {
		// 		if (!res.err) {
		// 			let newData = db.filter((el) => el.id !== id);
		// 			setDb(newData);
		// 		} else {
		// 			setError(res);
		// 		}
		// 	});
		// } else {
		// 	return;
		// }
	};

	const handleContacto = async (Id) => {
		let data = {
			CONTACTADO: '1',
			CONTACTADO_CUANDO: fecha_del_dia_aaaammdd,
		};

		await fetch(url_apoderados_put + Id, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				carga_query();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleNoPuede = async (Id) => {
		let data = {
			CONTACTADO: '1',
			CONTACTADO_CUANDO: fecha_del_dia_aaaammdd,
			TIPO_LOCAL_MESA: 'Z',
		};

		await fetch(url_apoderados_put + Id, {
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
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-6">
									<CasosTabla
										data={db}
										setOpcion={setOpcion}
										setDataToEdit={setDataToEdit}
										updatePersonales={updatePersonales}
										updateLocal={updateLocal}
										// deleteData={deleteData}
										// handleContacto={handleContacto}
										// handleNoPuede={handleNoPuede}
									/>
								</div>
								{opcion === '1' && (
									<div className="col-6">
										<CasosFormPersonales
											updatePersonales={updatePersonales}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
								{opcion === '2' && (
									<div className="col-6">
										<CasosFormLocal
											updateLocal={updateLocal}
											dataToEdit={dataToEdit}
											setDataToEdit={setDataToEdit}
										/>
									</div>
								)}
								{opcion === '3' && (
									<div className="col-6">
										<CasosFormSeleccion
											updateSeleccion={updateSeleccion}
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

export default Nomina;
