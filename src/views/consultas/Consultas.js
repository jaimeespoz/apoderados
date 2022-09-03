// modulos
import { useState, useEffect } from 'react';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';

// url
import { url_apoderados_query } from '../../components/routes/Urls';
import { url_apoderados_put } from '../../components/routes/Urls';

import TablaCasos from './TablaCasos';
import CasosFormPersonales from './CasosFormPersonales';
import CasosFormLocal from './CasosFormLocal';
import CasosFormSeleccion from './CasosFormSeleccion';
import CasosFormContactado from './CasosFormContactado';
import CasosFormNoPuede from './CasosFormNoPuede';
import CasosFormBlanco from './CasosFormBlanco';

function Consultas() {
	const [contactados, setContactados] = useState('');
	const [opcion, setOpcion] = useState('0');
	const [dataToEdit, setDataToEdit] = useState(null);

	useEffect(() => {
		cargaContactados();
	}, []);

	const cargaContactados = async () => {
		let criterio =
			//'RUT > 0 AND MESA_VOTA IS NULL ORDER BY CODIGO_REGION_VOTA, APELLIDO_PATERNO';
			// 'RUT > 0 AND CODIGO_LOCAL_VOTA IS NULL ORDER BY CODIGO_REGION_VOTA, APELLIDO_PATERNO';
			//	'RUT > 0 AND CODIGO_COMUNA_VOTA IS NULL ORDER BY CODIGO_REGION_VOTA, APELLIDO_PATERNO';
			//'RUT > 0 AND CODIGO_REGION_VOTA IS NULL ORDER BY CODIGO_REGION_VOTA, APELLIDO_PATERNO';
			'CODIGO_REGION_VOTA = "99" ORDER BY RUT';

		let data = {
			filter: criterio,
			limit: 200,
		};

		// alert(JSON.stringify(data));
		await fetch(url_apoderados_query, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				// alert(JSON.stringify(result.apoderados));
				setContactados(result.apoderados);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updatePersonal = async (form) => {
		let data = {
			Id: form.Id,
			RUT: form.RUT,
			DV: form.DV,
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
				if (result.filasafectadas === 0) {
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(result));
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					// carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateExtrajeros = async (form) => {
		let data = {
			Id: form.Id,
			CODIGO_REGION_VOTA: '88',
			CODIGO_COMUNA_VOTA: '99999',
			CODIGO_LOCAL_VOTA: 99999,
			MESA_VOTA: 99999,
			TIPO_LOCAL_MESA: 'E',
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
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(result));
					alert('No se pudo grabar (updateExtrajeros)');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					// carga_query();
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
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(result));
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					// carga_query();
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
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(result));
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					// carga_query();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
				if (result.filasafectadas === 0) {
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(result));
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					// carga_query();
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
					console.log(JSON.stringify(data));
					console.log(JSON.stringify(result));
					alert('No se pudo grabar');
				}
				if (result.filasafectadas === 1) {
					alert('Cambios Grabados');
					// carga_query();
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
					<section className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-6">
									<TablaCasos
										data={contactados}
										setOpcion={setOpcion}
										setDataToEdit={setDataToEdit}
									/>
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
											updateExtrajeros={updateExtrajeros}
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
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default Consultas;
