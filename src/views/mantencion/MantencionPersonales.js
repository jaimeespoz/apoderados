// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';
import { validateRUT } from 'validar-rut';

// url
import { url_apoderados_put } from '../../components/routes/Urls';

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
			let rutpaso = form.rut.trim();
			let rutpaso2 = rutpaso.replace(/-/g, '');
			let rutpaso3 = rutpaso2.replace(/\./g, '');
			let largo = rutpaso3.length;
			let cuerpo = rutpaso3.substring(0, largo - 1);
			let digito = rutpaso3.substring(largo - 1, largo);
			form.cuerpo = cuerpo;
			form.cdv = digito;
		}
		return errors;
	}
};

function MantencionPersonales() {
	const [form, setForm] = useState(initialForm);
	const location = useLocation();
	const { Query, Row } = location.state;
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
				ID: Row.Id,
				RUT: form.cuerpo,
				DV: form.cdv,
				NOMBRES: form.nombres,
				APELLIDO_PATERNO: form.paterno,
				APELLIDO_MATERNO: form.materno,
				TELEFONO_MOVIL: form.celular,
				EMAIL: form.correo,
			};
			// graba header apoderado
			let options = {
				body: data,
				headers: { 'content-type': 'application/json' },
			};

			// console.log(JSON.stringify(options));
			api.post(url_apoderados_put + Row.Id, options).then((res) => {
				if (!res.err) {
					setErrors((prevState) => ({
						...prevState,
						usuario: 'Usuario ingresado ya esta Registrado',
					}));
				}
			});
			alert('Registrado. Nos contactaremos con Usted, a la brevedad posible');
			navigate('/mantencion', { state: { Query: Query, Row: Row } });
			return;
		}
	};

	const handleVolver = (e) => {
		navigate('/mantencion', { state: { Query: Query, Row: Row } });
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row py-8">
					<section className="flex-auto wd-20"></section>
					<section className="flex-auto wd-60">
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
						</section>
						<button onClick={handleSubmit} className="btn-primary mt-8">
							Aceptar
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

export default MantencionPersonales;
