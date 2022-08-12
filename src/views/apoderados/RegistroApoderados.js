// modulos
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
import {
	fecha_del_dia_aaaammdd,
	fecha_nula_aaaammdd,
} from '../../utils/FuncionesFechas';

// paginas
import Nacionalidad from '../../components/custom/Nacionalidad';
import Sexo from '../../components/custom/Sexo';
import DropdownRegiones from '../../components/custom/DropdownRegiones';
import DropdownComunas from '../../components/custom/DropdownComunas';
import DropdownLocales from '../../components/custom/DropdownLocales';
import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';

// helpers
import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';

// url
import { url_tbl_usuarios } from '../../components/routes/Urls';

const initialForm = {
	nombres: '',
	paterno: '',
	materno: '',
	rut: '',
	sexo: '',
	nacionalidad: '',
	nacimiento: '',
	region: '',
	comuna: '',
	local: '',
};

const validationsForm = (form) => {
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexComments = /^.{1,30}$/;
	let errors = {};

	if (!form.nombres.trim()) {
		errors.nombres = 'Ingrese su Nombre';
	} else if (!regexName.test(form.nombres.trim())) {
		errors.nombres = 'Ingrese solo letras';
	} else if (!regexComments.test(form.nombres.trim())) {
		errors.nombres = 'Ingrese hasta 30 letras';
	}

	if (!form.paterno.trim()) {
		errors.paterno = 'Ingrese su Apellido Paterno';
	} else if (!regexName.test(form.paterno.trim())) {
		errors.paterno = 'Ingrese solo letras';
	} else if (!regexComments.test(form.paterno.trim())) {
		errors.paterno = 'Ingrese hasta 30 letras';
	}

	if (!form.materno.trim()) {
		errors.materno = 'Ingrese su Apellido Materno';
	} else if (!regexName.test(form.materno.trim())) {
		errors.materno = 'Ingrese solo letras';
	} else if (!regexComments.test(form.materno.trim())) {
		errors.materno = 'Ingrese hasta 30 letras';
	}

	if (!form.rut.trim()) {
		errors.rut = 'Ingrese su RUT';
	}

	if (!form.sexo) {
		errors.sexo = 'Seleccione su Sexo';
	}

	if (!form.nacionalidad) {
		errors.nacionalidad = 'Seleccione su Nacionalidad';
	}

	if (!form.nacimiento) {
		errors.nacimiento = 'Ingrese su Fecha de Nacimiento';
	}

	if (!form.region) {
		errors.region = 'Seleccione su Region';
	}

	if (!form.comuna) {
		errors.comuna = 'Seleccione su Comuna';
	}

	if (!form.local) {
		errors.local = 'Seleccione su Local';
	}
	return errors;
};

const RegistroApoderados = () => {
	const [form, setForm] = useState(initialForm);
	const [region, setRegion] = useState('');
	const [comuna, setComuna] = useState('');
	const [local, setLocal] = useState('');
	const [errors, setErrors] = useState({});
	let navigate = useNavigate();
	let api = helpHttp();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleRegionChange = (codigo) => {
		// alert('retorno : ' + codigo);
		form.region = codigo;
		setRegion(codigo);
	};

	const handleComunaChange = (codigo) => {
		// alert('retorno : ' + codigo);
		form.comuna = codigo;
		setComuna(codigo);
	};

	const handleLocalChange = (codigo) => {
		// alert('retorno : ' + codigo);
		form.local = codigo;
		setLocal(codigo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		alert(JSON.stringify(form));

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		// if (errors) {
		// 	api
		// 		.get(url_tbl_usuarios + '/Existe_Correo?correo=' + form.usuario)
		// 		.then((res) => {
		// 			if (!res.err) {
		// 				setErrors((prevState) => ({
		// 					...prevState,
		// 					usuario: 'Usuario ingresado ya esta Registrado',
		// 				}));
		// 			} else {
		// 				// const client = new SMTPClient({
		// 				// 	user: 'entreatrevidos@gmail.com',
		// 				// 	password: 'Jjea1993#',
		// 				// 	host: 'smtp.gmail.com',
		// 				// 	ssl: true,
		// 				// });
		// 				// client.send(
		// 				// 	{
		// 				// 		text: 'i hope this works',
		// 				// 		from: 'you <jespoz@outlook.es>',
		// 				// 		to: 'someone <jespoz@outlook.es>, another <jespoz@outlook.es>',
		// 				// 		cc: 'else <jespoz@outlook.es>',
		// 				// 		subject: 'testing emailjs',
		// 				// 	},
		// 				// 	(err, message) => {
		// 				// 		console.log(err || message);
		// 				// 	}
		// 				//);

		// 				// let data = {
		// 				// 	service_id: 'service_rk7h0f8',
		// 				// 	template_id: 'template_8x2sjql',
		// 				// 	user_id: 'MZjzd2_PyAW_vO5x-',
		// 				// };

		// 				// api.post(url_email, data).then((res) => {
		// 				// 	alert('enviado');
		// 				// 	console.log(res);
		// 				// });

		// 				emailjs
		// 					.sendForm(
		// 						'service_rk7h0f8',
		// 						'template_8x2sjql',
		// 						'#ppp',
		// 						'MZjzd2_PyAW_vO5x-'
		// 					)
		// 					.then((res) => {
		// 						alert('enviado');
		// 						console.log(res);
		// 					});

		// 				alert(JSON.stringify(form));
		// 				// let mail =
		// 				// 	'<h2 background-color: #EDF0F3;>Hola, esta es una prueba</h2>';
		// 				// api.post('https://formsubmit.co/ajax/jespoz@outlook.es', {
		// 				// 	body: mail,
		// 				// 	headers: {
		// 				// 		'Content-Type': 'application/json',
		// 				// 		Accept: 'application/json',
		// 				// 	},
		// 				// });
		// 				let data = {
		// 					id_usuarios: base64_encode(form.usuario),
		// 					passwordHash: base64_encode(form.clave),
		// 					securityStamp: base64_encode(form.usuario),
		// 					fechaSecurityStamp: fecha_del_dia_aaaammdd(),
		// 					concurrencyStamp: base64_encode(form.usuario),
		// 					correo: form.usuario,
		// 					pais: form.nacionalidad,
		// 					region: form.region,
		// 					comuna: form.comuna,
		// 					sexo: form.sexo,
		// 					rut: form.rut,
		// 					cdv: '',
		// 					paterno: form.paterno,
		// 					materno: form.materno,
		// 					nombres: form.nombres,
		// 					fechaNacimiento: form.nacimiento,
		// 					fechaCreacion: fecha_del_dia_aaaammdd(),
		// 					fechaEliminacion: fecha_nula_aaaammdd(),
		// 					pregunta1: '00',
		// 					respuesta1: '',
		// 					pregunta2: '00',
		// 					respuesta2: '',
		// 					ultimoAcceso: fecha_del_dia_aaaammdd(),
		// 					numeroAccesos: 0,
		// 					accesosErroneos: 0,
		// 					estado: '0',
		// 				};
		// 				let options = {
		// 					body: data,
		// 					headers: { 'content-type': 'application/json' },
		// 				};
		// 				console.log(JSON.stringify(data));

		// 				// api.get(url_tbl_usuarios + '/Write_Basico', options).then((res) => {
		// 				// 	if (!res.err) {
		// 				// 		alert('grabado con exito');
		// 				// 	} else {
		// 				// 		alert('problemas al grabar');
		// 				// 	}
		// 				// });
		// 			}
		// 		});
		// 	return;
		// }
	};

	const handleVolver = (e) => {
		navigate('/');
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto bg-degrade px-10 mwd-30">
						<div className="container-row gap-16 mt-12 jc-center wd-90">
							<p className="titulo-xxxl fc-white">Team Patriota</p>
							<p className="titulo-lg fc-white">Equipo de Auditoria</p>
							<p className="titulo-xl fc-white">
								Página de Creacion de Usuarios
							</p>
							<hr />
							<p className="texto-sm fc-white">Cree su Usuario desde aqui</p>
						</div>
					</section>
					<section className="flex-auto Aligner-item--center wd-70 my-8">
						<div className="container-row jc-center">
							<form onSubmit={handleSubmit}>
								<p className="titulo-lg fc-grey mb-2">Sus Datos Personales</p>
								<div className="bg-white bd-1 py-8 px-12">
									<div className="container-row-nowrap gap-12">
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
									</div>
									<div className="container-row-nowrap gap-12">
										<div className="flex-auto">
											<label htmlFor="rut" className="form-label-sm">
												RUT
											</label>
											<input
												type="text"
												className="form-control-sm"
												id="rut"
												name="rut"
												value={form.rut}
												placeholder="Ingrese su RUT"
												onChange={handleChange}
											/>
											{errors.rut && (
												<p className="texto-sm fc-secondaryColor fw-medium mb-2">
													{errors.rut}
												</p>
											)}
										</div>
										<div className="flex-auto">
											<label htmlFor="nacimiento" className="form-label-sm">
												Fecha Nacimiento
											</label>
											<input
												type="text"
												className="form-control-sm"
												id="nacimiento"
												name="nacimiento"
												value={form.nacimiento}
												placeholder="Ingrese Fecha Nacimiento"
												onChange={handleChange}
											/>
											{errors.nacimiento && (
												<p className="texto-sm fc-secondaryColor fw-medium mb-2">
													{errors.nacimiento}
												</p>
											)}
										</div>
									</div>
									<div className="container-row-nowrap">
										<div className="flex-auto">
											<label htmlFor="sexo" className="form-label-sm">
												Sexo
											</label>
											<Sexo />
											{errors.sexo && (
												<p className="texto-sm fc-secondaryColor fw-medium mb-2">
													{errors.sexo}
												</p>
											)}
										</div>
										<div className="flex-auto">
											<label htmlFor="nacionalidad" className="form-label-sm">
												Nacionalidad
											</label>
											<Nacionalidad />
											{errors.nacionalidad && (
												<p className="texto-sm fc-secondaryColor fw-medium mb-2">
													{errors.nacionalidad}
												</p>
											)}
										</div>
									</div>
								</div>
								<p className="titulo fc-grey mt-6 mb-2">
									Cual es su Local de Votacion
								</p>
								<div className="bg-white bd-1 py-8 px-12">
									<div className="container-row-nowrap gap-12">
										<div className="flex-auto">
											<label className="form-label-sm">Region</label>
											<DropdownRegiones
												handleRegionChange={handleRegionChange}
											/>
											{errors.region && (
												<p className="texto-sm fc-secondaryColor fw-medium mb-2">
													{errors.region}
												</p>
											)}
										</div>
										{region && (
											<div className="flex-auto">
												<label className="form-label-sm">Comuna</label>
												<DropdownComunas
													region={region}
													handleComunaChange={(region, handleComunaChange)}
												/>
												{errors.comuna && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.comuna}
													</p>
												)}
											</div>
										)}
									</div>
									<div className="container-row-nowrap gap-12">
										{comuna && (
											<div className="flex-auto">
												<label className="form-label-sm">Local Votacion</label>
												<DropdownLocales
													region={region}
													comuna={comuna}
													handleLocalChange={handleLocalChange}
												/>
												{errors.local && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.local}
													</p>
												)}
											</div>
										)}
									</div>
								</div>
								<button onClick={handleSubmit} className="btn-primary mt-4">
									Enviar
								</button>
								<button onClick={handleVolver} className="btn-primary mt-4">
									Volver
								</button>
							</form>
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
};

export default RegistroApoderados;
