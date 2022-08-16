// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	fecha_del_dia_aaaammdd,
	fecha_nula_aaaammdd,
} from '../../utils/FuncionesFechas';

// paginas
import Headings from '../home/Headings';
import { RegistroApoderadosNav, VinculosNav } from '../../components/layout';
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

	// errors.nombres = '';
	// errors.paterno = '';
	// errors.materno = '';
	// errors.correo = '';
	// errors.rut = '';
	// errors.celular = '';
	// errors.votaregion = '';
	// errors.votaregionglosa = '';
	// errors.votacomuna = '';
	// errors.votacomunaglosa = '';
	// errors.votalocal = '';
	// errors.votalocalglosa = '';
	// errors.votamesa = '';
	// errors.selregion = '';
	// errors.selregionglosa = '';
	// errors.selcomuna = '';
	// errors.selcomunaglosa = '';
	// errors.sellocal = '';
	// errors.sellocalglosa = '';
	// errors.selmesa = '';
	// errors.preferencia = '';

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
	} else if (!regexEmail.test(form.correo.trim())) {
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

function RegistroApoderados({ form1 }) {
	const [form, setForm] = useState(initialForm);
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

		// alert(JSON.stringify(form));
		// alert(JSON.stringify(errors));

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

			console.log(JSON.stringify(options));
			api.post(url_apoderados_nuevo, options).then((res) => {
				if (!res.err) {
					//alert(res.body);
					// alert(JSON.stringify(res.body));
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

	return (
		<>
			<Headings />
			<main>
				<div className="container-row py-4 px-12">
					<section className="flex-auto wd-30">
						<RegistroApoderadosNav />
					</section>
					<section className="flex-auto wd-70">
						<div className="container-row jc-center">
							<section className="flex-auto wd-70">
								{/* <section>
									<p className="texto-xl fw-semi-bold fc-highlight py-6 pb-1">Inicio</p>
								</section> */}
								<section id="introduccion">
									<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
										Introduccion
									</p>
									<hr></hr>
									<p className="texto-sm fc-grey pt-3">
										A traves de los siguiente parrafos, le orientaremos y
										ayudaremos a registrase correctamente.
									</p>
								</section>
								<section id="registro">
									<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
										Registro
									</p>
									<hr></hr>
									<p className="texto-sm fc-grey pt-3">
										A continuacion le solicitaremos tanto sus{' '}
										<b>Datos Personales</b>, sus <b>Datos de Contacto</b>, como
										tambien la informacion correspondiente a{' '}
										<b>su Local de Votacion</b>.
									</p>
									<p className="texto-sm fc-grey pt-3">
										Esta informacion esta protegida por la{' '}
										<b>Ley de Proteccion de Datos Personales</b> (Nro. 19.628 de
										1999). Cualquier duda, rogamos consultas los Terminos de Uso
										de este sitio, en el vinculo presente al pie de cada pagina
										de este portal.{' '}
									</p>
								</section>
								<section id="personales">
									<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
										Datos Personales
									</p>
									<hr></hr>
									<p className="texto-sm fc-grey pt-3">
										Esta informacion es esencial para nosotros. Ya que es quizas
										una de las pocas forma de evaluar adecuadamentemente, a cada
										una de las personas que se registren.
									</p>
									<p className="texto-sm fc-grey pt-3">
										Si usted no esta de acuerdo con realizar un registro con la
										transperencia que nosotros necesitamos, le sugerimos a usted
										que por favor, se registre en otros portales similares.
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
									<hr></hr>
									<p className="texto-sm fc-grey pt-3">
										Le solicitamos que ingrese la informacion de su{' '}
										<b>Correo Electronico</b> y/o <b>Numero de Celular</b>, ya
										que necesitaremos un medio de comunicacion con usted, antes
										dudas, coordinaciones u otra segun nos sea necesario.
									</p>
									<hr></hr>
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
									<hr></hr>
									<p className="texto-sm fc-grey pt-3">
										Con esta informacion podremos hacer una mejor administracion
										de las personas que se registren.
									</p>
									<p className="texto-sm fc-grey pt-3">
										Se socilitara (1) La Region, luego (2) La Comuna, en seguida
										(3) El Local de Votacion, y finalmente (4) La Mesa de
										Votacion. Las tres primeras son de caracter obligatorio.
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
											<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
												Indiquenos como nos puede ayudar
											</p>
											<hr></hr>
											<p className="texto-sm fc-grey pt-3">
												Favor a continuacion seleccione la forma que mas le
												acomoda a usted.
											</p>
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
						</div>
						<button onClick={handleSubmit} className="btn-primary mt-8">
							Aceptar
						</button>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default RegistroApoderados;
