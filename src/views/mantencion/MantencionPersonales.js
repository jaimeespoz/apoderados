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

const initialForm = {
	NOMBRES: '',
	APELLIDO_PATERNO: '',
	APELLIDO_MATERNO: '',
	RUT: '',
	CUERPO: '',
	DV: '',
	EMAIL: '',
	TELEFONO_MOVIL: '',
	ERRORES: '0',
};

const validationsForm = (form) => {
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
	let regexComments = /^.{1,30}$/;
	let errors = {};

	form.ERRORES = '0';
	// if (!form.NOMBRES.trim()) {
	// 	errors.NOMBRES = 'Ingrese su Nombre';
	// 	form.ERRORES = '1';
	// } else if (!regexName.test(form.NOMBRES.trim())) {
	// 	errors.NOMBRES = 'Ingrese solo letras';
	// 	form.ERRORES = '1';
	// } else if (!regexComments.test(form.NOMBRES.trim())) {
	// 	errors.NOMBRES = 'Ingrese hasta 30 letras';
	// 	form.ERRORES = '1';
	// }

	// if (!form.APELLIDO_PATERNO.trim()) {
	// 	errors.APELLIDO_PATERNO = 'Ingrese su Apellido Paterno';
	// 	form.ERRORES = '1';
	// } else if (!regexName.test(form.APELLIDO_PATERNO.trim())) {
	// 	errors.APELLIDO_PATERNO = 'Ingrese solo letras';
	// 	form.ERRORES = '1';
	// } else if (!regexComments.test(form.APELLIDO_PATERNO.trim())) {
	// 	errors.APELLIDO_PATERNO = 'Ingrese hasta 30 letras';
	// 	form.ERRORES = '1';
	// }

	// if (!form.APELLIDO_MATERNO.trim()) {
	// 	form.APELLIDO_MATERNO = '';
	// } else if (!regexName.test(form.APELLIDO_MATERNO.trim())) {
	// 	errors.APELLIDO_MATERNO = 'Ingrese solo letras';
	// 	form.ERRORES = '1';
	// } else if (!regexComments.test(form.APELLIDO_MATERNO.trim())) {
	// 	errors.APELLIDO_MATERNO = 'Ingrese hasta 30 letras';
	// 	form.ERRORES = '1';
	// }

	// if (!form.EMAIL.trim()) {
	// 	form.EMAIL = '';
	// } else if (!regexEmail.test(form.EMAIL.toLowerCase().trim())) {
	// 	errors.EMAIL = 'El Email ingresado es incorrecto';
	// 	form.ERRORES = '1';
	// }

	// if (!form.TELEFONO_MOVIL) {
	// 	form.TELEFONO_MOVIL = 0;
	// } else if (!regexCelular.test(form.TELEFONO_MOVIL.trim())) {
	// 	errors.TELEFONO_MOVIL = 'El Celular ingresado es incorrecto';
	// 	form.ERRORES = '1';
	// }

	// if (!form.RUT.trim()) {
	// 	errors.RUT = 'Ingrese su RUT';
	// 	form.ERRORES = '1';
	// } else {
	// 	let rutpaso = form.RUT.trim();
	// 	let rutpaso2 = rutpaso.replace(/-/g, '');
	// 	let rutpaso3 = rutpaso2.replace(/\./g, '');
	// 	let largo = rutpaso3.length;
	// 	let cuerpo = rutpaso3.substring(0, largo - 1);
	// 	let digito = rutpaso3.substring(largo - 1, largo);
	// 	form.CUERPO = cuerpo;
	// 	form.CDV = digito;
	// }
	return errors;
};

const MantencionPersonales = () => {
	const [form, setForm] = useState(initialForm);
	const [users, setUsers] = useState('');
	const location = useLocation();
	const { Id } = location.state;
	const [errors, setErrors] = useState({});
	let navigate = useNavigate();

	// useEffect(() => {
	// 	cargaApoderado();

	// 	// form.APELLIDO_PATERNO = Row.APELLIDO_PATERNO;
	// 	// form.APELLIDO_MATERNO = Row.APELLIDO_MATERNO;
	// 	// form.RUT = Row.RUT;
	// 	// form.DV = Row.DV;
	// 	// form.EMAIL = Row.EMAIL;
	// 	// form.TELEFONO_MOVIL = Row.TELEFONO_MOVIL;
	// }, []);

	// useEffect(() => {
	// 	form.NOMBRES = users.NOMBRES;
	// }, [users]);
	// datos iniciales
	// useEffect(() => {
	// 	cargaApoderado();
	// }, []);
	// useEffect(() => {
	// 	// form.NOMBRES = users.NOMBRES;
	// }, [users]);

	const cargaApoderado = () => {
		let data = {
			filter: 'ID=' + Id,
			limit: 1,
		};
		fetch(url_apoderados_query, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				setUsers(result.apoderados[0]);
				alert(JSON.stringify(users));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const allData = async () => {
			const datos = await cargaApoderado();
			if (datos) {
				setUsers(datos);
				alert(users.NOMBRES);
			}
		};
		allData();
		// form.NOMBRES = users.NOMBRES;
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;

		// setForm({
		// 	...form,
		// 	[name]: value,
		// });
		setUsers({
			...users,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (form.ERRORES === '0') {
			let data = {
				RUT: form.CUERPO,
				DV: form.CDV,
				NOMBRES: form.NOMBRES,
				APELLIDO_PATERNO: form.APELLIDO_PATERNO,
				APELLIDO_MATERNO: form.APELLIDO_MATERNO,
				TELEFONO_MOVIL: form.TELEFONO_MOVIL,
				EMAIL: form.EMAIL,
			};

			// alert(Id);
			// alert(JSON.stringify(data));
			// await fetch(url_apoderados_put + Id, {
			// 	method: 'post',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(data),
			// })
			// 	.then((res) => res.json())
			// 	.then((result) => {
			// 		alert(JSON.stringify(result));
			// 		if (result.filasafectadas === 0) {
			// 			alert('No se pudo grabar');
			// 		}
			// 		if (result.filasafectadas === 1) {
			// 			alert('Grabado');
			// 		}
			// 	})
			// 	.catch((err) => {
			// 		console.log(err);
			// 	});
			navigate('/mantencion');
		}
	};

	const handleVolver = (e) => {
		navigate('/mantencion');
	};

	return (
		<>
			<Headings />
			<main>
				<form onSubmit={handleSubmit}>
					<div className="container-row mh">
						<section className="flex-auto bg-azul px-10 wd-20">
							<OpcionesNav />
						</section>
						<section className="flex-auto Aligner-item--center wd-80">
							<div className="container-row jc-center">
								<div className="container-row my-2">
									<section className="flex-auto bd-1 px-12 py-6">
										<p className="texto fw-semi-bold fc-grey pt-3">
											Datos Personales
										</p>
										<div className="container-row gap-4 pt-3">
											<div className="flex-auto">
												<label htmlFor="NOMBRES" className="form-label-sm">
													Nombres
												</label>
												<input
													type="text"
													className="form-control-sm"
													id="NOMBRES"
													name="NOMBRES"
													value={users.NOMBRES}
													placeholder="Ingrese Nombres"
													onChange={(e) => {
														setUsers(...form, (e.target.name = e.target.value));
													}}
												/>
												{errors.NOMBRES && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.NOMBRES}
													</p>
												)}
											</div>
											{/* <div className="flex-auto">
												<label
													htmlFor="APELLIDO_PATERNO"
													className="form-label-sm"
												>
													Apellido Paterno
												</label>
												<input
													type="text"
													className="form-control-sm"
													id="APELLIDO_PATERNO"
													name="APELLIDO_PATERNO"
													value={form.APELLIDO_PATERNO}
													placeholder="Ingrese su Apellido Paterno"
													onChange={handleChange}
												/>
												{errors.APELLIDO_PATERNO && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.APELLIDO_PATERNO}
													</p>
												)}
											</div>
											<div className="flex-auto">
												<label
													htmlFor="APELLIDO_MATERNO"
													className="form-label-sm"
												>
													Apellido Materno
												</label>
												<input
													type="text"
													className="form-control-sm"
													id="APELLIDO_MATERNO"
													name="APELLIDO_MATERNO"
													value={form.APELLIDO_MATERNO}
													placeholder="Ingrese su Apellido Materno"
													onChange={handleChange}
												/>
												{errors.APELLIDO_MATERNO && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.APELLIDO_MATERNO}
													</p>
												)}
											</div>
											<div className="flex-auto">
												<label htmlFor="RUT" className="form-label-sm">
													Carnet Identidad
												</label>
												<input
													type="text"
													className="form-control-sm"
													id="RUT"
													name="RUT"
													value={form.RUT + '-' + form.DV}
													placeholder="Numero de Carnet"
													onChange={handleChange}
												/>
												{errors.RUT && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.RUT}
													</p>
												)}
											</div> */}
										</div>
									</section>
								</div>
							</div>

							{/* <div className="container-row jc-center">
								<div className="container-row my-2">
									<section className="flex-auto bd-1 px-12 py-6">
										<p className="texto fw-semi-bold fc-grey pt-3">
											Datos de Contacto
										</p>
										<div className="container-row gap-4 pt-3">
											<div className="flex-auto">
												<label htmlFor="EMAIL" className="form-label-sm">
													Casilla de Correo
												</label>
												<input
													type="text"
													className="form-control-sm"
													id="EMAIL"
													name="EMAIL"
													value={form.EMAIL}
													placeholder="Casilla de Correo"
													onChange={handleChange}
												/>
												{errors.EMAIL && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.EMAIL}
													</p>
												)}
											</div>
											<div className="flex-auto">
												<label
													htmlFor="TELEFONO_MOVIL"
													className="form-label-sm"
												>
													Celular
												</label>
												<input
													type="text"
													className="form-control-sm"
													id="TELEFONO_MOVIL"
													name="TELEFONO_MOVIL"
													value={form.TELEFONO_MOVIL}
													placeholder="Numero Celular"
													onChange={handleChange}
												/>
												{errors.TELEFONO_MOVIL && (
													<p className="texto-sm fc-secondaryColor fw-medium mb-2">
														{errors.TELEFONO_MOVIL}
													</p>
												)}
											</div>
										</div>
									</section>
								</div>
							</div> */}

							<div className="container-row jc-center">
								<div className="container-row">
									<input type="submit" value="Submit" />
									{/* <button onClick={handleSubmit} className="btn-primary mt-8">
										Aceptar
									</button> */}
									<button onClick={handleVolver} className="btn-primary mt-8">
										Volver
									</button>
								</div>
							</div>
						</section>
					</div>
				</form>
			</main>
			<VinculosNav />
		</>
	);
};

export default MantencionPersonales;
