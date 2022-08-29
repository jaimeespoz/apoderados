// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';

// url
import {
	url_apoderados_query,
	url_apoderados_put,
} from '../../components/routes/Urls';

import {
	url_regiones,
	url_comunas,
	url_locales,
} from '../../components/routes/Urls';

const initialForm = {
	votaregion: '',
	votaregionglosa: '',
	votacomuna: '',
	votacomunaglosa: '',
	votalocal: '',
	votalocalglosa: '',
	votamesa: '',
	errores: '0',
};
const validationsForm = (form) => {
	let errors = {};

	form.errores = '0';

	if (!form.votaregion) {
		errors.votaregion = 'Seleccione su Region';
		form.errores = '1';
	}

	if (!form.votacomuna) {
		errors.votacomuna = 'Seleccione su Comuna';
		form.errores = '1';
	}

	if (!form.votalocal) {
		errors.votalocal = 'Seleccione su Local';
		form.errores = '1';
	}

	if (!form.votamesa) {
		errors.votamesa = 'Indiquenos su Mesa';
		form.errores = '1';
	}
	return errors;
};

function MantencionLocal() {
	const [form, setForm] = useState(initialForm);
	const [users, setUsers] = useState('');
	const location = useLocation();
	const { Id } = location.state;
	const [votaRegion, setVotaRegion] = useState('');
	const [votaComuna, setVotaComuna] = useState('');
	const [votaLocal, setVotaLocal] = useState('');
	const [votaMesa, setVotaMesa] = useState('');

	const [votaRegionglosa, setVotaRegionGlosa] = useState('');
	const [votaComunaglosa, setVotaComunaGlosa] = useState('');
	const [votaLocalglosa, setVotaLocalGlosa] = useState('');

	const [dbRegiones, setDbRegiones] = useState('');
	const [dbComunas, setDbComunas] = useState('');
	const [dbLocales, setDbLocales] = useState('');

	const [valido, setValido] = useState(false);
	const [errors, setErrors] = useState({});
	let navigate = useNavigate();

	useEffect(() => {
		cargaApoderado();
		cargaRegiones();
	}, []);

	const cargaApoderado = async () => {
		let data = {
			filter: 'ID=' + Id,
			limit: 1,
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
				setUsers(result.apoderados[0]);
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

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (form.errores === '0') {
			let data = {
				CODIGO_REGION_VOTA: form.votaregion,
				CODIGO_COMUNA_VOTA: form.votacomuna,
				CODIGO_LOCAL_VOTA: form.votalocal,
				MESA_VOTA: form.votamesa,
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
					if (result.filasafectadas === 0) {
						alert('No se pudo grabar');
					}
					if (result.filasafectadas === 1) {
						alert('Grabado');
					}
				})
				.catch((err) => {
					console.log(err);
				});
			navigate('/mantencion', { state: { Id: Id } });
		}
	};

	const handleVolver = (e) => {
		navigate('/mantencion', { state: { Id: Id } });
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row">
					<section className="flex-auto bg-azul px-10 wd-20">
						<OpcionesNav />
					</section>
					<section className="flex-auto Aligner-item--center wd-80">
						<div className="container-row jc-center">
							<div className="container-row  px-12 py-6">
								<section className="flex-auto">
									<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
										Local de Votacion
									</p>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto bd-1 px-12 py-6">
									<p className="texto fw-semi-bold fc-grey pt-3">
										Datos Personales
									</p>
									<div className="container-row gap-4">
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Nombres</label>
											<p className="form-label-sm">{users.NOMBRES}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Apellido Paterno
											</label>
											<p className="form-label-sm">{users.APELLIDO_PATERNO}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Apellido Materno
											</label>
											<p className="form-label-sm">{users.APELLIDO_MATERNO}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Carnet Identidad
											</label>
											<p className="form-label-sm">
												{users.RUT + '-' + users.DV}
											</p>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto bd-1 px-12 py-6">
									<p className="texto fw-semi-bold fc-grey pt-3">
										Local de Votacion del Apoderado
									</p>
									<div className="container-row gap-4">
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Region</label>
											<p className="form-label-sm">
												{users.DESC_REGION_VOTA_SUPERVISA}
											</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Comuna</label>
											<p className="form-label-sm">{users.DESC_COMUNA_VOTA}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Local</label>
											<p className="form-label-sm">{users.DESC_LOCAL_VOTA}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Mesa de Votacion
											</label>
											<p className="form-label-sm">{users.MESA_VOTA}</p>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row">
								<section className="flex-auto bd-1 px-12">
									<section className="flex-auto">
										{/* Datos de SU LOCAL de Votacion */}
										<section id="local">
											<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
												Datos de SU LOCAL de Votacion
											</p>
											<div className="container-row gap-3 pt-3">
												<div className="flex-auto">
													<label className="form-label-sm">Region</label>
													<div className="bootstrap-select">
														<select
															name="cb_regiones"
															id="cb_regiones"
															className="texto-sm fc-grey"
															onChange={(e) => {
																cargaComunas(url_comunas + e.target.value);
																setVotaRegion(e.target.value);
																setVotaRegionGlosa(
																	e.target.options[e.target.selectedIndex].text
																);
																setVotaComuna('');
																setVotaComunaGlosa('Sin Informacion');
																setVotaLocal('');
																setVotaLocalGlosa('Sin Informacion');
																setValido(false);
																form.votaregion = e.target.value;
																form.votaregionglosa =
																	e.target.options[e.target.selectedIndex].text;
																form.selregion = e.target.value;
																form.selregionglosa =
																	e.target.options[e.target.selectedIndex].text;
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
													{errors.CODIGO_REGION_VOTA && (
														<p className="texto-sm fc-secondaryColor fw-medium mb-2">
															{errors.CODIGO_REGION_VOTA}
														</p>
													)}
												</div>
												<div className="flex-auto">
													<label className="form-label-sm">Comuna</label>
													<div className="bootstrap-select">
														<select
															name="cb_comunas"
															id="cb_comunas"
															className="texto-sm fc-grey"
															onChange={(e) => {
																cargaLocales(
																	url_locales +
																		votaRegion +
																		'/' +
																		e.target.value
																);
																setVotaComuna(e.target.value);
																setVotaComunaGlosa(
																	e.target.options[e.target.selectedIndex].text
																);
																setVotaLocal('');
																setVotaLocalGlosa('Sin Informacion');
																setValido(false);
																form.votacomuna = e.target.value;
																form.votacomunaglosa =
																	e.target.options[e.target.selectedIndex].text;
																form.selcomuna = e.target.value;
																form.selcomunaglosa =
																	e.target.options[e.target.selectedIndex].text;
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
													{errors.CODIGO_COMUNA_VOTA && (
														<p className="texto-sm fc-secondaryColor fw-medium mb-2">
															{errors.CODIGO_COMUNA_VOTA}
														</p>
													)}
												</div>
												<div className="flex-auto">
													<label className="form-label-sm">Local</label>
													<div className="bootstrap-select">
														<select
															name="cb_locales"
															id="cb_locales"
															className="texto-sm fc-grey"
															onChange={(e) => {
																setVotaLocal(e.target.value);
																setVotaLocalGlosa(
																	e.target.options[e.target.selectedIndex].text
																);
																setValido(false);
																form.votalocal = e.target.value;
																form.votalocalglosa =
																	e.target.options[e.target.selectedIndex].text;
																form.sellocal = e.target.value;
																form.sellocalglosa =
																	e.target.options[e.target.selectedIndex].text;
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
													{errors.CODIGO_LOCAL_VOTA && (
														<p className="texto-sm fc-secondaryColor fw-medium mb-2">
															{errors.CODIGO_LOCAL_VOTA}
														</p>
													)}
												</div>
												<div className="flex-auto">
													<label htmlFor="MESA_VOTA" className="form-label-sm">
														Mesa de Votacion
													</label>
													<input
														type="text"
														className="form-control-sm"
														id="MESA_VOTA"
														name="MESA_VOTA"
														value={form.MESA_VOTA}
														placeholder="Numero de Mesa"
														onChange={(e) => {
															setVotaMesa(e.target.value);
															form.MESA_VOTA = e.target.value;
															form.selmesa = e.target.value;
															setValido(true);
															handleChange();
														}}
													/>
													{errors.MESA_VOTA && (
														<p className="texto-sm fc-secondaryColor fw-medium mb-2">
															{errors.MESA_VOTA}
														</p>
													)}
												</div>
											</div>
										</section>
									</section>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row">
								<button onClick={handleSubmit} className="btn-primary mt-8">
									Aceptar
								</button>
								<button onClick={handleVolver} className="btn-primary mt-8">
									Volver
								</button>
							</div>
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default MantencionLocal;
