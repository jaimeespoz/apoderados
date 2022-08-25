// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	fecha_del_dia_aaaammdd,
	fecha_nula_aaaammdd,
} from '../../utils/FuncionesFechas';

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

function Mantencion() {
	const [form, setForm] = useState(initialForm);
	const location = useLocation();
	const { Query, Row } = location.state;
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

	const handlePersonales = (e) => {
		navigate('/personales', { state: { Row: Row } });
	};

	const handleLocales = (e) => {
		navigate('/local', { state: { Row: Row } });
	};

	const handleSeleccionados = (e) => {
		navigate('/seleccionados', { state: { Row: Row } });
	};

	const handleVolver = (e) => {
		navigate('/nomina', { state: { Query: Query } });
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row py-8">
					<section className="flex-auto wd-20"></section>
					<section className="flex-auto wd-60">
						<div className="bd-1 px-12 py-6">
							<p className="texto fw-semi-bold fc-grey pt-3">
								Datos Personales
							</p>
							<div className="container-row gap-4">
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
							<p className="texto fw-semi-bold fc-grey pt-3">
								Datos de Contacto
							</p>
							<div className="container-row gap-4">
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
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">
										Tipo de Participacion
									</label>
									<p className="form-label-sm">{Row.PREFERENCIA_APODERADO}</p>
								</div>
							</div>
							<p className="texto fw-semi-bold fc-grey pt-3">
								Local de Votacion del Apoderado
							</p>
							<div className="container-row gap-4">
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
							<p className="texto fw-semi-bold fc-grey pt-3">
								Local de Votacion SELECCIONADO
							</p>
							<div className="container-row gap-4">
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
						<section className="flex-auto">
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
						</section>
						<button onClick={handlePersonales} className="btn-primary mt-8">
							Datos Personales
						</button>
						<button onClick={handleLocales} className="btn-primary mt-8">
							Local
						</button>
						<button onClick={handleSeleccionados} className="btn-primary mt-8">
							Seleccion
						</button>
						<button onClick={handleVolver} className="btn-primary mt-8">
							Volver
						</button>
					</section>
					<section className="flex-auto wd-20"></section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default Mantencion;
