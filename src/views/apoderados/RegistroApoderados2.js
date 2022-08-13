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
import DropdownTipoApoderados from '../../components/custom/DropdownTipoApoderados';
import Headings from '../home/Headings';
import { RegistroApoderadosNav, VinculosNav } from '../../components/layout';

// helpers
import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';
import Opcion01 from './Opcion01';
import Opcion02 from './Opcion02';
import Opcion03 from './Opcion03';
import Opcion04 from './Opcion04';
import Opcion05 from './Opcion05';

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
	selregion: '',
	selcomuna: '',
	sellocal: '',
	selmesa: '',
	tipoapoderados: '',
};

const validationsForm = (form) => {
	alert('entre');
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

	if (!form.tipoapoderados) {
		errors.tipoapoderados = 'Seleccione el Tipo de Apoyo';
	}
	return errors;
};

function RegistroApoderados2({ form1 }) {
	const [form, setForm] = useState(initialForm);
	const [region, setRegion] = useState(null);
	const [regionGlosa, setRegionGlosa] = useState(null);
	const [comuna, setComuna] = useState(null);
	const [comunaGlosa, setComunaGlosa] = useState(null);
	const [local, setLocal] = useState(null);
	const [localGlosa, setLocalGlosa] = useState(null);
	const [mesa, setMesa] = useState(null);
	const [tipoApoderados, setTipoApoderados] = useState(null);
	const [selregion, setSelRegion] = useState(null);
	const [selregionGlosa, setSelRegionGlosa] = useState(null);
	const [selcomuna, setSelComuna] = useState(null);
	const [selcomunaGlosa, setSelComunaGlosa] = useState(null);
	const [sellocal, setSelLocal] = useState(null);
	const [sellocalGlosa, setSelLocalGlosa] = useState(null);
	const [selmesa, setSelMesa] = useState(null);
	const [valido, setValido] = useState(false);
	const [errors, setErrors] = useState({});
	let navigate = useNavigate();
	let api = helpHttp();

	alert(form1.nombres);

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
		setTipoApoderados('');
		setComuna('');
	};

	const handleComunaChange = (codigo, glosa) => {
		form.comuna = codigo;
		setComuna(codigo);
		setComunaGlosa(glosa);
		setTipoApoderados(null);
		setLocal(null);
	};

	const handleLocalChange = (codigo, glosa) => {
		form.local = codigo;
		setLocal(codigo);
		setLocalGlosa(glosa);
		setTipoApoderados('0');
	};

	const handleSelRegionChange = (codigo, glosa) => {
		form.selregion = codigo;
		setSelRegion(codigo);
		setSelRegionGlosa(glosa);
		setTipoApoderados('');
		setSelComuna('');
	};

	const handleSelComunaChange = (codigo, glosa) => {
		form.selcomuna = codigo;
		setSelComuna(codigo);
		setSelComunaGlosa(glosa);
		setTipoApoderados(null);
		setSelLocal(null);
	};

	const handleSelLocalChange = (codigo, glosa) => {
		form.sellocal = codigo;
		setSelLocal(codigo);
		setSelLocalGlosa(glosa);
		setTipoApoderados('0');
	};

	const handleApoderadosChange = (codigo) => {
		setTipoApoderados(codigo);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		alert(JSON.stringify(form));

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (errors) {
			setValido(true);
		} else {
			setValido(false);
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

	const handleAnterior = (e) => {
		navigate('/registroapoderados');
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
								{/* Indiquenos como nos puede ayudar */}
								<section id="forma">
									<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
										Indiquenos como nos puede ayudar
									</p>
									<hr></hr>
									<p className="texto-sm fc-grey pt-3">
										Favor a continuacion seleccione la forma que mas le acomoda
										a usted.
									</p>
									<div className="container-row-nowrap gap-4 pt-3">
										<div className="flex-auto">
											<label className="form-label-sm">
												Tipo de Participacion
											</label>
											<DropdownTipoApoderados
												handleApoderadosChange={handleApoderadosChange}
											/>
											{errors.tipoapoderados && (
												<p className="texto-sm fc-secondaryColor fw-medium mb-2">
													{errors.tipoapoderados}
												</p>
											)}
										</div>
									</div>
								</section>
								<section id="seleccion">
									{tipoApoderados === '1' && (
										<section>
											<Opcion01
												region={region}
												regionglosa={regionGlosa}
												comuna={comuna}
												comunaglosa={comunaGlosa}
												local={form.local}
												localglosa={localGlosa}
												mesa={form.mesa}
											/>
										</section>
									)}
									{tipoApoderados === '2' && (
										<section>
											<Opcion02
												region={region}
												regionglosa={regionGlosa}
												comuna={comuna}
												comunaglosa={comunaGlosa}
												local={form.local}
												localglosa={localGlosa}
											/>
										</section>
									)}
									{tipoApoderados === '3' && (
										<section>
											<Opcion03
												region={region}
												regionglosa={regionGlosa}
												comuna={comuna}
												comunaglosa={comunaGlosa}
												handleSelLocalChange={handleSelLocalChange}
											/>
										</section>
									)}
									{tipoApoderados === '3' && (
										<section>
											<Opcion04
												region={region}
												regionglosa={regionGlosa}
												comuna={comuna}
												comunaglosa={comunaGlosa}
												handleSelComunaChange={(region, handleSelComunaChange)}
												handleSelLocalChange={handleSelLocalChange}
											/>
										</section>
									)}
									{tipoApoderados === '5' && (
										<section>
											<Opcion05
												region={region}
												regionglosa={regionGlosa}
												comuna={comuna}
												comunaglosa={comunaGlosa}
												handleSelComunaChange={(region, handleComunaChange)}
											/>
										</section>
									)}
								</section>
							</section>
						</div>
						<button onClick={handleAnterior} className="btn-primary mt-8">
							Anterior
						</button>
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

export default RegistroApoderados2;
