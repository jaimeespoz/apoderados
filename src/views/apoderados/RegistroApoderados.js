// modulos
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
import {
	fecha_del_dia_aaaammdd,
	fecha_nula_aaaammdd,
} from '../../utils/FuncionesFechas';

// paginas
import DropdownRegiones from '../../components/custom/DropdownRegiones';
import DropdownComunas from '../../components/custom/DropdownComunas';
import DropdownLocales from '../../components/custom/DropdownLocales';
import Headings from '../home/Headings';
import { RegistroApoderadosNav, VinculosNav } from '../../components/layout';

// helpers
import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';

const initialForm = {
	nombres: '',
	paterno: '',
	materno: '',
	rut: '',
	correo: '',
	celular: '',
	region: '',
	comuna: '',
	local: '',
	mesa: '',
};

const validationsForm = (form) => {
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
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

	if (!form.correo.trim()) {
		errors.correo = 'Ingrese su Correo Electronico';
	} else if (!regexEmail.test(form.correo.trim())) {
		errors.correo = 'El Email ingresado es incorrecto';
	}

	if (!form.celular.trim()) {
		errors.celular = 'Ingrese su Celular';
	} else if (!regexCelular.test(form.celular.trim())) {
		errors.celular = 'El Celular ingresado es incorrecto';
	}

	if (!form.rut.trim()) {
		errors.rut = 'Ingrese su RUT';
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

function RegistroApoderados({ form1 }) {
	const [form, setForm] = useState(initialForm);
	const [region, setRegion] = useState(null);
	const [regionGlosa, setRegionGlosa] = useState(null);
	const [comuna, setComuna] = useState(null);
	const [comunaGlosa, setComunaGlosa] = useState(null);
	const [local, setLocal] = useState(null);
	const [localGlosa, setLocalGlosa] = useState(null);
	const [mesa, setMesa] = useState(null);
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

	const handleRegionChange = (codigo, glosa) => {
		form.region = codigo;
		setRegion(codigo);
		setRegionGlosa(glosa);
		setComuna('');
	};

	const handleComunaChange = (codigo, glosa) => {
		form.comuna = codigo;
		setComuna(codigo);
		setComunaGlosa(glosa);
		setLocal(null);
	};

	const handleLocalChange = (codigo, glosa) => {
		form.local = codigo;
		setLocal(codigo);
		setLocalGlosa(glosa);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// alert(JSON.stringify(form));

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (errors) {
			alert('con errores');
			navigate('/registroapoderados2', { form: form });
		} else {
			alert('SIN errores');
			navigate('/registroapoderados2');
		}

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
				<div className="container-row py-4 px-12">
					<section className="flex-auto wd-30">
						<RegistroApoderadosNav />
					</section>
					<section className="flex-auto wd-70">
						<div className="container-row">
							<section className="flex-fijo">
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
									<div className="container-row-nowrap gap-4 pt-3">
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
									<div className="container-row-nowrap gap-4 pt-3">
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
									<div className="container-row-nowrap gap-4 pt-3">
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
													<label className="form-label-sm">
														Local Votacion
													</label>
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
										<div className="container-row-nowrap gap-12">
											{local && (
												<div className="flex-auto">
													<label htmlFor="mesa" className="form-label-sm">
														Mesa de Votacion
													</label>
													<input
														type="text"
														className="form-control-sm"
														id="mesa"
														name="mesa"
														value={form.mesa}
														placeholder="Numero de Mesa"
														onChange={handleChange}
													/>
													{errors.mesa && (
														<p className="texto-sm fc-secondaryColor fw-medium mb-2">
															{errors.mesa}
														</p>
													)}
												</div>
											)}
										</div>
									</div>
								</section>
							</section>
						</div>
						<button onClick={handleSubmit} className="btn-primary mt-8">
							Siguiente
						</button>
						<button onClick={handleVolver} className="btn-primary mt-8">
							Volver
						</button>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default RegistroApoderados;
