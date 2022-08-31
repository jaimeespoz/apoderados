// modulos
import { useState, useEffect } from 'react';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';

// url
import { url_apoderados_query } from '../../components/routes/Urls';

import {
	url_regiones,
	url_comunas,
	url_locales,
} from '../../components/routes/Urls';
import TablaContactados from './TablaContactados';
import TablaPorContactar from './TablaPorContactar';
import TablaNoPuede from './TablaNoPuede';

function Consulta() {
	const [contactados, setContactados] = useState('');
	const [porcontactar, setPorContactar] = useState('');
	const [nopuede, setNoPuede] = useState('');

	const [votaRegion, setVotaRegion] = useState('');
	const [votaComuna, setVotaComuna] = useState('');
	const [votaLocal, setVotaLocal] = useState('');

	const [dbRegiones, setDbRegiones] = useState('');
	const [dbComunas, setDbComunas] = useState('');
	const [dbLocales, setDbLocales] = useState('');

	useEffect(() => {
		cargaRegiones();
	}, []);

	const cargaContactados = async (opcion) => {
		let criterio = 'CONTACTADO=1';
		switch (opcion) {
			case '1':
				// alert('opcion 1');
				criterio = 'CONTACTADO=1';
				break;
			case '2':
				// alert('opcion 2');
				criterio = 'CONTACTADO=0';
				break;
			case '3':
				// alert('opcion 3');
				criterio = 'CONTACTADO=1 AND TIPO_LOCAL_MESA="Z"';
				break;
			default:
				// alert('opcion default');
				criterio = 'CONTACTADO=1';
				break;
		}

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
			limit: 100,
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
				if (opcion === '1') {
					// alert(JSON.stringify(result.apoderados));
					setContactados(result.apoderados);
				}
				if (opcion === '2') {
					// alert(JSON.stringify(result.apoderados));
					setPorContactar(result.apoderados);
				}
				if (opcion === '3') {
					// alert(JSON.stringify(result.apoderados));
					setNoPuede(result.apoderados);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
		cargaContactados('1');
		cargaContactados('2');
		cargaContactados('3');
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
						<div className="col-12 bd-1">
							<TablaContactados data={contactados} />
						</div>
						<div className="col-12 bd-1">
							<TablaPorContactar data={porcontactar} />
						</div>
						<div className="col-12 bd-1">
							<TablaNoPuede data={nopuede} />
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default Consulta;
