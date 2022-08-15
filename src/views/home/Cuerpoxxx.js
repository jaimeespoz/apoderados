// modulos
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// paginas
import { VinculosTerminosNav } from '../../components/layout';

// url

// helpers

const initialForm = {
	usuario: 'aa@aa.cl',
	clave: '123',
	recuerdame: false,
	terminos: true,
	existe: false,
	registrado: false,
};

const validationsForm = (form) => {
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	//	let regexComments = /^.{1,255}$/;
	let errors = {};
	let api = helpHttp();

	if (!form.usuario) {
		errors.usuario = 'Ingrese su Correo Electronico';
	} else if (!regexEmail.test(form.usuario)) {
		errors.usuario = 'Ingrese un Correo Electronico valido';
	}

	if (!form.clave) {
		errors.clave = 'Ingrese su Clave de Acceso';
	}

	if (!form.terminos) {
		errors.terminos = 'Debe aceptar Terminos de este Sitio';
	}

	if (errors) {
		api
			.get(url_tbl_usuarios + '/Existe_Correo?correo=' + form.usuario)
			.then((res) => {
				if (!res.err) {
					errors.valido = true;
					// alert('usuario existe..');
				}
			});
	}

	return errors;
};

const Cuerpo = () => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({ usuario: '', clave: '', valido: '' });
	let navigate = useNavigate();
	let api = helpHttp();
	let api2 = SessionStorage();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleChecked = (e) => {
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

		if (errors) {
			let data = {
				username: form.usuario,
				password: form.clave,
			};
			let options = {
				body: data,
				headers: { 'content-type': 'application/json' },
			};
			api.register(url_tbl_usuarios + '/Register', options).then((res) => {
				if (!res.err) {
					form.registrado = true;
					let data = {
						username: form.usuario,
						password: form.clave,
					};
					let options = {
						body: data,
						headers: { 'content-type': 'applicatio	n/json' },
					};
					api.login(url_tbl_usuarios + '/Login', options).then((res) => {
						if (!res.err) {
							api2.save('username', form.usuario);
							api2.save('password', form.clave);
							api2.save('passwordhash', res.passwordHash);
							api2.save('passwordsalt', res.passwordSalt);
							api2.save('token', res.token);
							navigate('/mantenciones/mantusuario/MantUsuario');
						} else {
							alert('Clave erronea');
							return;
						}
					});
				} else {
					alert('El Usuario no se pudo registrar');
					return;
				}
			});
		} else {
			return;
		}
	};

	return (
		<main>
			<div className="container-row mh">
				<section className="flex-auto bg-degrade px-10 wd-30">
					<div className="container-row gap-16 mt-12 jc-center wd-90">
						<p className="titulo-xxxl fc-white">Team Patriota</p>
						<p className="titulo-lg fc-white">Equipo de Auditoria</p>
						<p className="titulo-xl fc-white">
							Conéctese o Regístrese desde aquí para ingresar
						</p>
						<hr />
						<p className="texto-sm fc-white">
							Regístrese desde aquí para ingresar
						</p>
					</div>
				</section>
				<section className="flex-auto Aligner-item--center wd-70">
					<div className="container-row jc-center">
						<form onSubmit={handleSubmit}>
							<article className="flex-auto">
								<div className="bg-white bd-1 py-8 px-12">
									<Link to="/registro">
										<p className="texto-vinculo fc-blue pt-2 pb-4">
											¿ No tiene una Cuenta aun ?
										</p>
									</Link>
									<label htmlFor="usuario" className="form-label-sm">
										Correo Electronico
									</label>
									<input
										type="text"
										className="form-control-sm"
										id="usuario"
										name="usuario"
										value={form.usuario}
										placeholder="Ingrese Casilla Correo"
										// onChange={(e) => setUsuario(e.target.value)}
										onChange={handleChange}
									/>
									{errors.usuario && (
										<p className="texto-sm fc-secondaryColor fw-medium mb-2">
											{errors.usuario}
										</p>
									)}
									{errors.existe && (
										<p className="texto-sm fc-secondaryColor fw-medium mb-2">
											{errors.existe}
										</p>
									)}
									<label htmlFor="clave" className="form-label-sm">
										Clave de Acceso
									</label>
									<input
										type="text"
										className="form-control-sm"
										id="clave"
										name="clave"
										value={form.clave}
										placeholder="Ingrese Clave de Acceso"
										// onChange={(e) => setPassword(e.target.value)}
										onChange={handleChange}
									/>
									{errors.clave && (
										<p className="texto-sm fc-secondaryColor fw-medium mb-2">
											{errors.clave}
										</p>
									)}
									<article className="check-box">
										<input
											id="terminos"
											name="terminos"
											type="checkbox"
											value={form.terminos}
											onChange={handleChecked}
										/>
										<label htmlFor="terminos">
											Acepto los Terminos de Uso de este sitio
										</label>
									</article>
									{errors.terminos && (
										<p className="texto-sm fc-secondaryColor fw-medium mb-2">
											{errors.terminos}
										</p>
									)}
									<article className="check-box py-1">
										<input
											id="recuerdame"
											name="recuerdame"
											type="checkbox"
											value={form.recuerdame}
											onChange={handleChecked}
										/>
										<label htmlFor="recuerdame">Recuerdame</label>
									</article>
									<Link to="/olvido">
										<p className="texto-vinculo fc-blue pt-4 pb-2">
											¿ Olvido su Clave de Acceso ?
										</p>
									</Link>
								</div>
								<VinculosTerminosNav />
								<button onClick={handleSubmit} className="btn-primary mt-4">
									Aceptar
								</button>
							</article>
						</form>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Cuerpo;
