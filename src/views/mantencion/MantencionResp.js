// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fecha_nula_aaaammdd } from '../../utils/FuncionesFechas';

import { useLocation } from 'react-router-dom';
import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';
import { validateRUT } from 'validar-rut';

// url
import {
	url_apoderados_nuevo,
	url_apoderados_put,
} from '../../components/routes/Urls';
import {
	url_regiones,
	url_comunas,
	url_locales,
} from '../../components/routes/Urls';
import TipoApoderados from '../../api/TipoApoderados.json';

// helpers
import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';

const initialForm = {
	nombres: '',
	paterno: '',
	materno: '',
	rut: '',
	cuerpo: '',
	cdv: '',
	correo: '',
	celular: '',
	votaregion: '',
	votaregionglosa: '',
	votacomuna: '',
	votacomunaglosa: '',
	votalocal: '',
	votalocalglosa: '',
	votamesa: '',
	selregion: '',
	selregionglosa: '',
	selcomuna: '',
	selcomunaglosa: '',
	sellocal: '',
	sellocalglosa: '',
	selmesa: '',
	preferencia: '',
	errores: '0',
};
const validationsForm = (form) => {
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
	let regexComments = /^.{1,30}$/;
	// let regexRut = /^(\d{1,2}(?:[\.]?\d{3}){2}-[\dkK])$/;
	let errors = {};

	form.errores = '0';
	if (!form.nombres.trim()) {
		errors.nombres = 'Ingrese su Nombre';
		form.errores = '1';
	} else if (!regexName.test(form.nombres.trim())) {
		errors.nombres = 'Ingrese solo letras';
		form.errores = '1';
	} else if (!regexComments.test(form.nombres.trim())) {
		errors.nombres = 'Ingrese hasta 30 letras';
		form.errores = '1';
	}

	if (!form.paterno.trim()) {
		errors.paterno = 'Ingrese su Apellido Paterno';
		form.errores = '1';
	} else if (!regexName.test(form.paterno.trim())) {
		errors.paterno = 'Ingrese solo letras';
		form.errores = '1';
	} else if (!regexComments.test(form.paterno.trim())) {
		errors.paterno = 'Ingrese hasta 30 letras';
		form.errores = '1';
	}

	if (!form.materno.trim()) {
		errors.materno = 'Ingrese su Apellido Materno';
		form.errores = '1';
	} else if (!regexName.test(form.materno.trim())) {
		errors.materno = 'Ingrese solo letras';
		form.errores = '1';
	} else if (!regexComments.test(form.materno.trim())) {
		errors.materno = 'Ingrese hasta 30 letras';
		form.errores = '1';
	}

	if (!form.correo.trim()) {
		errors.correo = 'Ingrese su Correo Electronico';
		form.errores = '1';
	} else if (!regexEmail.test(form.correo.toLowerCase().trim())) {
		errors.correo = 'El Email ingresado es incorrecto';
		form.errores = '1';
	}

	if (!form.celular.trim()) {
		errors.celular = 'Ingrese su Celular';
		form.errores = '1';
	} else if (!regexCelular.test(form.celular.trim())) {
		errors.celular = 'El Celular ingresado es incorrecto';
		form.errores = '1';
	}

	if (!form.rut.trim()) {
		errors.rut = 'Ingrese su RUT';
		form.errores = '1';
	} else {
		// if (!regexRut.test(form.rut.trim())) {
		// 	errors.rut = 'El RUT ingresado es incorrecto';
		// } else {
		if (!validateRUT(form.rut.trim())) {
			errors.rut = 'El RUT ingresado es incorrecto';
			form.errores = '1';
		} else {
			// alert('form: ' + form.rut.trim());
			let rutpaso = form.rut.trim();
			// alert('rutpaso: ' + rutpaso);
			let rutpaso2 = rutpaso.replace(/-/g, '');
			// alert('rutpaso2: ' + rutpaso2);
			let rutpaso3 = rutpaso2.replace(/\./g, '');
			// alert('rutpaso3: ' + rutpaso3);
			let largo = rutpaso3.length;
			// alert('largo: ' + largo);
			let cuerpo = rutpaso3.substring(0, largo - 1);
			let digito = rutpaso3.substring(largo - 1, largo);
			// alert(rutpaso3 + ' : ' + cuerpo + '-' + digito);
			form.cuerpo = cuerpo;
			form.cdv = digito;
		}
		// }
	}

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

	if (!form.preferencia) {
		errors.preferencia = 'Seleccione su Preferencia';
		form.errores = '1';
	} else {
		segunpreferencia(form);
	}

	if (form.preferencia === '3') {
		if (!form.sellocal) {
			errors.sellocal = 'Seleccione el Local';
			form.errores = '1';
		}
	}

	return errors;
};

const segunpreferencia = (form) => {
	switch (form.preferencia) {
		case '1':
			form.selregion = form.votaregion;
			form.selcomuna = form.votacomuna;
			form.sellocal = form.votalocal;
			form.selmesa = form.votamesa;
			return;
		case '2':
			form.selregion = form.votaregion;
			form.selcomuna = form.votacomuna;
			form.sellocal = form.votalocal;
			form.selmesa = '';
			return;
		case '3':
			form.selregion = form.votaregion;
			form.selcomuna = form.votacomuna;
			form.sellocal = '';
			form.selmesa = '';
			return;
		case '4':
			form.selregion = form.votaregion;
			form.selcomuna = form.votacomuna;
			form.sellocal = form.votalocal;
			form.selmesa = '';
			return;
		case '5':
			form.selregion = form.votaregion;
			form.selcomuna = form.votacomuna;
			form.sellocal = '';
			form.selmesa = '';
			return;
		default:
			return;
	}
};

function MantencionResp() {
	const [form, setForm] = useState(initialForm);
	const location = useLocation();
	const { Row } = location.state;
	const [votaRegion, setVotaRegion] = useState('');
	const [votaComuna, setVotaComuna] = useState('');
	const [votaLocal, setVotaLocal] = useState('');
	const [votaMesa, setVotaMesa] = useState('');
	const [tipoApoderados, setTipoApoderados] = useState(null);

	// const [selRegion, setSelRegion] = useState('');
	const [selComuna, setSelComuna] = useState('');
	const [selLocal, setSelLocal] = useState('');
	// const [selMesa, setSelMesa] = useState('');

	const [votaRegionglosa, setVotaRegionGlosa] = useState('');
	const [votaComunaglosa, setVotaComunaGlosa] = useState('');
	const [votaLocalglosa, setVotaLocalGlosa] = useState('');

	const [selRegionglosa, setSelRegionGlosa] = useState('');
	const [selComunaglosa, setSelComunaGlosa] = useState('');
	const [selLocalglosa, setSelLocalGlosa] = useState('');

	const [dbRegiones, setDbRegiones] = useState('');
	const [dbComunas, setDbComunas] = useState('');
	const [dbLocales, setDbLocales] = useState('');
	const [dbTipoApoderados, setDbTipoApoderados] = useState(null);

	const [valido, setValido] = useState(false);
	const [errors, setErrors] = useState({});
	let navigate = useNavigate();
	let api = helpHttp();

	// datos iniciales
	useEffect(() => {
		form.nombres = Row.NOMBRES;
		form.paterno = Row.APELLIDO_PATERNO;
		form.materno = Row.APELLIDO_MATERNO;
		form.rut = Row.RUT + '-' + Row.DV;
		form.cuerpo = Row.RUT;
		form.cdv = Row.DV;
		form.correo = Row.EMAIL;
		form.celular = Row.TELEFONO_MOVIL;
	}, []);

	useEffect(() => {
		api.get(url_regiones).then((res) => {
			if (!res.err) {
				setDbRegiones(res.regiones);
			} else {
				setDbRegiones('');
			}
		});
		setDbTipoApoderados(TipoApoderados.tipoapoderados);
	}, []);

	const cargaComunas = (url) => {
		setDbLocales('');
		api.get(url).then((res) => {
			if (!res.err) {
				setDbComunas(res.comunas);
			} else {
				setDbComunas('');
			}
		});
	};

	const cargaLocales = (url) => {
		api.get(url).then((res) => {
			if (!res.err) {
				setDbLocales(res.locales);
			} else {
				setDbLocales('');
			}
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (form.errores === '0') {
			let data = {
				RUT: form.cuerpo,
				DV: form.cdv,
				NOMBRES: form.nombres,
				APELLIDO_PATERNO: form.paterno,
				APELLIDO_MATERNO: form.materno,
				TELEFONO_MOVIL: form.celular,
				EMAIL: form.correo,
				TIPO_LOCAL_MESA: 'I',
				CODIGO_REGION_VOTA: form.votaregion,
				CODIGO_COMUNA_VOTA: form.votacomuna,
				CODIGO_LOCAL_VOTA: form.votalocal,
				MESA_VOTA: form.votamesa,
				PREFERENCIA_APODERADO: form.preferencia,
			};
			let data2 = {
				RUT: form.cuerpo,
				DV: form.cdv,
				NOMBRES: form.nombres,
				APELLIDO_PATERNO: form.paterno,
				APELLIDO_MATERNO: form.materno,
				TELEFONO_MOVIL: form.celular,
				EMAIL: form.correo,
				TIPO_LOCAL_MESA: 'I',
				CODIGO_REGION_VOTA: form.votaregion,
				CODIGO_COMUNA_VOTA: form.votacomuna,
				CODIGO_LOCAL_VOTA: form.votalocal,
				MESA_VOTA: form.votamesa,
				PREFERENCIA_APODERADO: form.preferencia,

				VALIDADO: '0',
				VALIDADO_CUANDO: fecha_nula_aaaammdd(),
				RECHAZADO: '0',
				RECHAZADO_CUANDO: fecha_nula_aaaammdd(),
				RECHAZADO_MOTIVO: '0',
				CONTACTADO: '0',
				CONTACTADO_CUANDO: fecha_nula_aaaammdd(),
				ASIGNADO: '0',
				ASIGNADO_CUANDO: fecha_nula_aaaammdd(),
				ASIGNACION_COMUNICADA: '1',
				ASIGNACION_COMUNICADA_CUANDO: fecha_nula_aaaammdd(),
				CODIGO_COMUNA_ASIGNADA: '0',
				CODIGO_LOCAL_ASIGNADO: '0',
				CODIGO_MESA_ASIGNADA: '0',
				SE_PRESENTO_DIA_VOTACION: '9',
			};
			// graba header apoderado
			let options = {
				body: data,
				headers: { 'content-type': 'application/json' },
			};

			// console.log(JSON.stringify(options));
			api.post(url_apoderados_nuevo, options).then((res) => {
				if (!res.err) {
					setErrors((prevState) => ({
						...prevState,
						usuario: 'Usuario ingresado ya esta Registrado',
					}));
				}
			});
			// graba detalle apoderado
			let options2 = {
				body: data2,
				headers: { 'content-type': 'application/json' },
			};

			console.log(JSON.stringify(options2));
			api.post(url_apoderados_put + form.rut, options2).then((res) => {
				if (!res.err) {
					setErrors((prevState) => ({
						...prevState,
						usuario: 'Usuario ingresado ya esta Registrado',
					}));
				}
			});
			alert('Registrado. Nos contactaremos con Usted, a la brevedad posible');
			navigate('/');
			return;
		}
	};

	const handleVolver = (e) => {
		navigate('/nomina');
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<div>
						<hr></hr>
						<section>
							<div className="bd-1">
								<div className="container-row gap-4 pt-3">
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">Nombres</label>
										<p className="form-label-sm">{Row.NOMBRES}</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">
											Apellido Paterno
										</label>
										<p className="form-label-sm">{Row.APELLIDO_PATERNO}</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">
											Apellido Materno
										</label>
										<p className="form-label-sm">{Row.APELLIDO_MATERNO}</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">
											Carnet Identidad
										</label>
										<p className="form-label-sm">{Row.RUT + '-' + Row.DV}</p>
									</div>
								</div>
								<div className="container-row gap-4 mt-3">
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">
											Casilla de Correo
										</label>
										<p className="form-label-sm">{Row.EMAIL}</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">Celular</label>
										<p className="form-label-sm">{Row.TELEFONO_MOVIL}</p>
									</div>
									{/* </div>
								<div className="container-row gap-4 mt-3"> */}
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">
											Tipo de Participacion
										</label>
										<p className="form-label-sm">{Row.PREFERENCIA_APODERADO}</p>
									</div>
								</div>
								<div className="container-row gap-4 mt-3">
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">Region</label>
										<p className="form-label-sm">
											{Row.DESC_REGION_VOTA_SUPERVISA}
										</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">Comuna</label>
										<p className="form-label-sm">{Row.DESC_COMUNA_VOTA}</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">Local</label>
										<p className="form-label-sm">{Row.DESC_LOCAL_VOTA}</p>
									</div>
									<div className="flex-auto">
										<label className="form-label-sm fc-blue">
											Mesa de Votacion
										</label>
										<p className="form-label-sm">{Row.MESA_VOTA}</p>
									</div>
								</div>
							</div>
						</section>
						<section className="flex-auto">
							<section id="personales">
								<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
									Datos Personales
								</p>
								<div className="container-row gap-4 pt-3">
									<div className="flex-auto">
										<label htmlFor="nombres" className="form-label-sm">
											Nombres
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="nombres"
											name="nombres"
											value={form.nombres}
											placeholder="Ingrese Nombres"
											onChange={handleChange}
										/>
										{errors.nombres && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.nombres}
											</p>
										)}
									</div>
									<div className="flex-auto">
										<label htmlFor="paterno" className="form-label-sm">
											Apellido Paterno
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="paterno"
											name="paterno"
											value={form.paterno}
											placeholder="Ingrese su Apellido Paterno"
											onChange={handleChange}
										/>
										{errors.paterno && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.paterno}
											</p>
										)}
									</div>
									<div className="flex-auto">
										<label htmlFor="materno" className="form-label-sm">
											Apellido Materno
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="materno"
											name="materno"
											value={form.materno}
											placeholder="Ingrese su Apellido Materno"
											onChange={handleChange}
										/>
										{errors.materno && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.materno}
											</p>
										)}
									</div>
									<div className="flex-auto">
										<label htmlFor="rut" className="form-label-sm">
											Carnet Identidad
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="rut"
											name="rut"
											value={form.rut}
											placeholder="Numero de Carnet"
											onChange={handleChange}
										/>
										{errors.rut && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.rut}
											</p>
										)}
									</div>
								</div>
							</section>
							{/* Datos de Contacto */}
							<section id="contacto">
								<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
									Datos de Contacto
								</p>
								<div className="container-row gap-4 pt-3">
									<div className="flex-auto">
										<label htmlFor="correo" className="form-label-sm">
											Casilla de Correo
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="correo"
											name="correo"
											value={form.correo}
											placeholder="Casilla de Correo"
											onChange={handleChange}
										/>
										{errors.correo && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.correo}
											</p>
										)}
									</div>
									<div className="flex-auto">
										<label htmlFor="celular" className="form-label-sm">
											Celular
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="celular"
											name="celular"
											value={form.celular}
											placeholder="Numero Celular"
											onChange={handleChange}
										/>
										{errors.celular && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.celular}
											</p>
										)}
									</div>
								</div>
							</section>
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
										{errors.votaregion && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.votaregion}
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
														url_locales + votaRegion + '/' + e.target.value
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
										{errors.votacomuna && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.votacomuna}
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
										{errors.votalocal && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.votalocal}
											</p>
										)}
									</div>
									<div className="flex-auto">
										<label htmlFor="votamesa" className="form-label-sm">
											Mesa de Votacion
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="votamesa"
											name="votamesa"
											value={form.votamesa}
											placeholder="Numero de Mesa"
											onChange={(e) => {
												setVotaMesa(e.target.value);
												form.votamesa = e.target.value;
												form.selmesa = e.target.value;
												setValido(true);
												// handleChange();
											}}
										/>
										{errors.votamesa && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.votamesa}
											</p>
										)}
									</div>
								</div>
							</section>

							{/* Indiquenos como nos puede ayudar */}
							<section id="forma">
								{valido && (
									<>
										<div className="container-row-nowrap gap-4 pt-3">
											<div className="flex-auto">
												<label className="form-label-sm">
													Tipo de Participacion
												</label>
												<div className="bootstrap-select">
													<select
														name="cb_preferencia"
														id="cb_preferencia"
														className="texto-sm fc-grey"
														onChange={(e) => {
															form.preferencia = e.target.value;
															setTipoApoderados(e.target.value);
														}}
													>
														<option value="" className="texto-sm fc-grey">
															Elige una Preferencia
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
												{errors.preferencia && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.preferencia}
													</p>
												)}
											</div>
										</div>
									</>
								)}
							</section>
							<section id="seleccion">
								{tipoApoderados === '1' && (
									<section>
										<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
											Opcion Elegida: Mismo Local y Misma Mesa
										</p>
										<hr></hr>
										<table>
											<tbody>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Region</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaRegionglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Comuna</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaComunaglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">
															Local Votacion
														</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaLocalglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">
															Mesa Votacion
														</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaMesa}
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</section>
								)}
								{tipoApoderados === '2' && (
									<section>
										<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
											Opcion Elegida: Mismo Local y Cualquier Mesa del Local
										</p>
										<hr></hr>
										<table>
											<tbody>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Region</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaRegionglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Comuna</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaComunaglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">
															Local Votacion
														</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaLocalglosa}
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</section>
								)}
								{tipoApoderados === '3' && (
									<section>
										<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
											Opcion Elegida: Misma Comuna y Cualquier Local
										</p>
										<hr></hr>
										<table>
											<tbody>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Region</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaRegionglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Comuna</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaComunaglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">
															Local Votacion
														</label>
													</td>
													<td style={{ width: '60%' }}>
														<div className="bootstrap-select">
															<select
																name="cb_locales_seleccion"
																id="cb_locales_seleccion"
																className="texto-sm fc-grey"
																onChange={(e) => {
																	setSelLocal(e.target.value);
																	setSelLocalGlosa(
																		e.target.options[e.target.selectedIndex]
																			.text
																	);
																	form.sellocal = e.target.value;
																	form.setlocalglosa =
																		e.target.options[
																			e.target.selectedIndex
																		].text;
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
													</td>
												</tr>
											</tbody>
										</table>
									</section>
								)}
								{tipoApoderados === '4' && (
									<section>
										<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
											Opcion Elegida: Otra Comuna (espeficicar) y Otro Local
											(especificar)
										</p>
										<hr></hr>
										<table>
											<tbody>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Region</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaRegionglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Comuna</label>
													</td>
													<td style={{ width: '60%' }}>
														<div className="bootstrap-select">
															<select
																name="cb_comunas_seleccion"
																id="cb_comunas_seleccion"
																className="texto-sm fc-grey"
																onChange={(e) => {
																	cargaLocales(
																		url_locales +
																			votaRegion +
																			'/' +
																			e.target.value
																	);
																	setSelComuna(e.target.value);
																	setSelComunaGlosa(
																		e.target.options[e.target.selectedIndex]
																			.text
																	);
																	setSelLocal('');
																	setSelLocalGlosa('Sin Informacion');
																	form.selcomuna = e.target.value;
																	form.selcomunaglosa =
																		e.target.options[
																			e.target.selectedIndex
																		].text;
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
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">
															Local Votacion
														</label>
													</td>
													<td style={{ width: '60%' }}>
														<div className="bootstrap-select">
															<select
																name="cb_locales_seleccion"
																id="cb_locales_seleccion"
																className="texto-sm fc-grey"
																onChange={(e) => {
																	setSelLocal(e.target.value);
																	setSelLocalGlosa(
																		e.target.options[e.target.selectedIndex]
																			.text
																	);
																	form.sellocal = e.target.value;
																	form.sellocalglosa =
																		e.target.options[
																			e.target.selectedIndex
																		].text;
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
													</td>
												</tr>
											</tbody>
										</table>
									</section>
								)}
								{tipoApoderados === '5' && (
									<section>
										<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
											Opcion Elegida: Otra Comuna (espeficicar) y Cualquier
											Local
										</p>
										<hr></hr>
										<table>
											<tbody>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Region</label>
													</td>
													<td style={{ width: '60%' }}>
														<span className="texto-sm fc-secondaryColor">
															{/* {votaRegion} */}
															{votaRegionglosa}
														</span>
													</td>
												</tr>
												<tr>
													<td style={{ width: '40%' }}>
														<label className="form-label-sm">Comuna</label>
													</td>
													<td style={{ width: '60%' }}>
														<div className="bootstrap-select">
															<select
																name="cb_comunas_seleccion"
																id="cb_comunas_seleccion"
																className="texto-sm fc-grey"
																onChange={(e) => {
																	setSelComuna(e.target.value);
																	setSelComunaGlosa(
																		e.target.options[e.target.selectedIndex]
																			.text
																	);
																	form.selcomuna = e.target.value;
																	form.selcomunaglosa =
																		e.target.options[
																			e.target.selectedIndex
																		].text;
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
													</td>
												</tr>
											</tbody>
										</table>
									</section>
								)}
							</section>
						</section>
						<button onClick={handleSubmit} className="btn-primary mt-8">
							Aceptar
						</button>
						<button onClick={handleVolver} className="btn-primary mt-8">
							Volver
						</button>
					</div>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default MantencionResp;
