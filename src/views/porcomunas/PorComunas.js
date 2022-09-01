// modulos
import { useState, useEffect } from 'react';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';

// url
import { url_apoderados_query } from '../../components/routes/Urls';
import { url_apoderados_put } from '../../components/routes/Urls';
import {
	url_regiones,
	url_comunas,
	url_locales,
} from '../../components/routes/Urls';

import TablaCasos from './TablaCasos';
import CasosFormPersonales from './CasosFormPersonales';
import CasosFormLocal from './CasosFormLocal';
import CasosFormSeleccion from './CasosFormSeleccion';
import CasosFormContactado from './CasosFormContactado';
import CasosFormNoPuede from './CasosFormNoPuede';
import CasosFormBlanco from './CasosFormBlanco';

function PorComunas() {
	const [contactados, setContactados] = useState('');
	const [opcion, setOpcion] = useState('0');
	const [dataToEdit, setDataToEdit] = useState(null);

	const [votaRegion, setVotaRegion] = useState('');
	const [votaComuna, setVotaComuna] = useState('');
	const [votaLocal, setVotaLocal] = useState('');

	const [dbRegiones, setDbRegiones] = useState('');
	const [dbComunas, setDbComunas] = useState('');
	const [dbLocales, setDbLocales] = useState('');

	useEffect(() => {
		cargaRegiones();
	}, []);

	const cargaRegiones = async () => {
		await fetch(url_regiones, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setDbRegiones(result.regiones);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const cargaComunas = async (url) => {
		await fetch(url, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setDbComunas(result.comunas);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const cargaLocales = async (url) => {
		await fetch(url, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setDbLocales(result.locales);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleBuscar = (e) => {
		cargaContactados();
	};

	const cargaContactados = async () => {
		let criterio = 'CONTACTADO=0 ';
		if (votaRegion) {
			criterio = criterio + ' AND CODIGO_REGION_VOTA="' + votaRegion + '"';
		}
		if (votaComuna) {
			criterio = criterio + ' AND CODIGO_COMUNA_VOTA="' + votaComuna + '"';
		}
		if (votaLocal) {
			criterio = criterio + ' AND CODIGO_LOCAL_VOTA="' + votaLocal + '"';
		}
		criterio =
			criterio +
			' ORDER BY DESC_COMUNA_VOTA, APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES';

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
			CODIGO_REGION_VOTA: '99',
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
						<div className="col-12 bd-1">
							<div className="row">
								<section className="col-12">
									<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
										Seleccion
									</p>
								</section>
								<section className="col-4">
									<label className="form-label-sm">Region</label>
									<div className="bootstrap-select">
										<select
											name="cb_regiones"
											id="cb_regiones"
											className="texto-sm fc-grey"
											onChange={(e) => {
												cargaComunas(url_comunas + e.target.value);
												setVotaRegion(e.target.value);
												setVotaComuna('');
												setVotaLocal('');
											}}
										>
											<option value="" className="texto-sm fc-grey">
												Elige una Region
											</option>
											{dbRegiones &&
												dbRegiones.map((el) => (
													<option
														key={el.CODIGO}
														value={el.CODIGO}
														className="texto-sm fc-grey"
													>
														{el.DESCRIPCION}
													</option>
												))}
										</select>
									</div>
								</section>
								<section className="col-4">
									<label className="form-label-sm">Comuna</label>
									<div className="bootstrap-select">
										<select
											name="cb_comunas"
											id="cb_comunas"
											className="texto-sm fc-grey"
											onChange={(e) => {
												cargaLocales(
													url_locales + votaRegion + '/' + e.target.value
												);
												setVotaComuna(e.target.value);
												setVotaLocal('');
											}}
										>
											<option value="" className="texto-sm fc-grey">
												Elige una Comuna
											</option>
											{dbComunas &&
												dbComunas.map((el) => (
													<option
														key={el.CODIGO}
														value={el.CODIGO}
														className="texto-sm fc-grey"
													>
														{el.DESCRIPCION}
													</option>
												))}
										</select>
									</div>
								</section>
								<section className="col-4">
									<label className="form-label-sm">Local</label>
									<div className="bootstrap-select">
										<select
											name="cb_locales"
											id="cb_locales"
											className="texto-sm fc-grey"
											onChange={(e) => {
												setVotaLocal(e.target.value);
											}}
										>
											<option value="" className="texto-sm fc-grey">
												Elige un Local
											</option>
											{dbLocales &&
												dbLocales.map((el) => (
													<option
														key={el.CODIGO}
														value={el.CODIGO}
														className="texto-sm fc-grey"
													>
														{el.DESCRIPCION}
													</option>
												))}
										</select>
									</div>
								</section>
								<section className="col-12">
									<button onClick={handleBuscar} className="btn-primary my-2">
										Buscar
									</button>
								</section>
							</div>
						</div>

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

export default PorComunas;
