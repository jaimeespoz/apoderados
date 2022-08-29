import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { isNumber, isDigitoRut } from '../../utils/FuncionesNumeros';

const initialForm = {
	Id: '',
	NOMBRES: '',
	APELLIDO_PATERNO: '',
	APELLIDO_MATERNO: '',
	RUT: '',
	DV: '',
	TELEFONO_MOVIL: '',
	EMAIL: '',
};

const validationsForm = (form) => {
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
	let regexComments = /^.{1,30}$/;
	let errors = {};

	form.ERRORES = '0';
	if (!form.NOMBRES.trim()) {
		errors.NOMBRES = 'Ingrese su Nombre';
		form.ERRORES = '1';
	} else if (!regexName.test(form.NOMBRES.trim())) {
		errors.NOMBRES = 'Ingrese solo letras';
		form.ERRORES = '1';
	} else if (!regexComments.test(form.NOMBRES.trim())) {
		errors.NOMBRES = 'Ingrese hasta 30 letras';
		form.ERRORES = '1';
	}

	if (!form.APELLIDO_PATERNO.trim()) {
		errors.APELLIDO_PATERNO = 'Ingrese su Apellido Paterno';
		form.ERRORES = '1';
	} else if (!regexName.test(form.APELLIDO_PATERNO.trim())) {
		errors.APELLIDO_PATERNO = 'Ingrese solo letras';
		form.ERRORES = '1';
	} else if (!regexComments.test(form.APELLIDO_PATERNO.trim())) {
		errors.APELLIDO_PATERNO = 'Ingrese hasta 30 letras';
		form.ERRORES = '1';
	}

	if (!form.APELLIDO_MATERNO.trim()) {
		form.APELLIDO_MATERNO = '';
	} else if (!regexName.test(form.APELLIDO_MATERNO.trim())) {
		errors.APELLIDO_MATERNO = 'Ingrese solo letras';
		form.ERRORES = '1';
	} else if (!regexComments.test(form.APELLIDO_MATERNO.trim())) {
		errors.APELLIDO_MATERNO = 'Ingrese hasta 30 letras';
		form.ERRORES = '1';
	}

	if (!form.EMAIL.trim()) {
		form.EMAIL = '';
	} else if (!regexEmail.test(form.EMAIL.toLowerCase().trim())) {
		errors.EMAIL = 'El Email ingresado es incorrecto';
		form.ERRORES = '1';
	}

	if (!form.TELEFONO_MOVIL) {
		form.TELEFONO_MOVIL = 0;
	} else if (!regexCelular.test(form.TELEFONO_MOVIL.trim())) {
		errors.TELEFONO_MOVIL = 'El Celular ingresado es incorrecto';
		form.ERRORES = '1';
	}

	if (!form.RUT.trim()) {
		errors.RUT = 'Ingrese su RUT';
		form.ERRORES = '1';
	} else if (!isNumber(form.RUT)) {
		errors.RUT = 'Ingrese un numero';
		form.ERRORES = '1';
	} else {
		let rutpaso = form.RUT.trim();
		let rutpaso2 = rutpaso.replace(/-/g, '');
		let rutpaso3 = rutpaso2.replace(/\./g, '');
		let largo = rutpaso3.length;
		let cuerpo = rutpaso3.substring(0, largo - 1);
		let digito = rutpaso3.substring(largo - 1, largo);
		form.CUERPO = cuerpo;
		form.CDV = digito;
	}

	if (!form.DV.trim()) {
		errors.DV = 'Ingrese un Digito';
		form.ERRORES = '1';
	} else if (!isDigitoRut(form.DV.trim())) {
		errors.DV = 'Ingrese un Digito';
		form.ERRORES = '1';
	}
	return errors;
};

const CasosFormPersonales = ({
	setOpcion,
	updatePersonal,
	dataToEdit,
	setDataToEdit,
}) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (dataToEdit) {
			setForm(initialForm);
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

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

		if (form.ERRORES === '0') {
			updatePersonal(form);
			setForm(initialForm);
			setDataToEdit(null);
			setOpcion('0');
		}
	};

	const handleVolver = (e) => {
		setOpcion('0');
	};

	return (
		<form>
			<div className="container py-8">
				<div className="row">
					<div className="col-12">
						<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
							Datos Personales
						</p>
					</div>
					<div className="col-12 bg-white bd-1 px-6 py-3">
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div className="col-4">
										<label htmlFor="NOMBRES" className="form-label-sm fc-blue">
											Nombres
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="NOMBRES"
											placeholder="Nombres"
											onChange={handleChange}
											value={
												form.NOMBRES.toLowerCase().trim() === 'none'
													? null
													: form.NOMBRES
											}
										/>
										{errors.NOMBRES && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.NOMBRES}
											</p>
										)}
									</div>
									<div className="col-4">
										<label
											htmlFor="APELLIDO_PATERNO"
											className="form-label-sm fc-blue"
										>
											Apellido Paterno
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="APELLIDO_PATERNO"
											placeholder="Apellido Paterno"
											onChange={handleChange}
											value={
												form.APELLIDO_PATERNO.toLowerCase().trim() === 'none'
													? null
													: form.APELLIDO_PATERNO
											}
										/>
										{errors.APELLIDO_PATERNO && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.APELLIDO_PATERNO}
											</p>
										)}
									</div>
									<div className="col-4">
										<label
											htmlFor="APELLIDO_MATERNO"
											className="form-label-sm fc-blue"
										>
											Apellido Materno
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="APELLIDO_MATERNO"
											placeholder="Apellido Materno"
											onChange={handleChange}
											value={
												form.APELLIDO_MATERNO.toLowerCase().trim() === 'none'
													? null
													: form.APELLIDO_MATERNO
											}
										/>
										{errors.APELLIDO_MATERNO && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.APELLIDO_MATERNO}
											</p>
										)}
									</div>
								</div>
								<div className="row">
									<div className="col-4">
										<label htmlFor="RUT" className="form-label-sm fc-blue">
											RUT
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="RUT"
											placeholder="RUT"
											onChange={handleChange}
											value={
												form.RUT.toLowerCase().trim() === 'none'
													? null
													: form.RUT
											}
										/>
										{errors.RUT && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.RUT}
											</p>
										)}
									</div>
									<div className="col-2">
										<label htmlFor="DV" className="form-label-sm fc-blue">
											DV
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="DV"
											placeholder="Digito"
											onChange={handleChange}
											value={
												form.DV.toLowerCase().trim() === 'none' ? null : form.DV
											}
										/>
										{errors.DV && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.DV}
											</p>
										)}
									</div>
								</div>
								<div className="row">
									<div className="col-4">
										<label
											htmlFor="TELEFONO_MOVIL"
											className="form-label-sm fc-blue"
										>
											Celular
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="TELEFONO_MOVIL"
											placeholder="Celular"
											onChange={handleChange}
											value={
												form.TELEFONO_MOVIL.toLowerCase().trim() === 'none'
													? null
													: form.TELEFONO_MOVIL
											}
										/>
										{errors.TELEFONO_MOVIL && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.TELEFONO_MOVIL}
											</p>
										)}
									</div>
									<div className="col-8">
										<label htmlFor="EMAIL" className="form-label-sm fc-blue">
											Casilla Correo
										</label>
										<input
											type="text"
											className="form-control-sm"
											name="EMAIL"
											placeholder="Casilla de Correo"
											onChange={handleChange}
											value={
												form.EMAIL.toLowerCase().trim() === 'none'
													? null
													: form.EMAIL
											}
										/>
										{errors.EMAIL && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.EMAIL}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 mt-2">
						<Button variant="primary" size="sm" active onClick={handleSubmit}>
							Aceptar
						</Button>
						<Button variant="primary" size="sm" active onClick={handleVolver}>
							Volver
						</Button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CasosFormPersonales;
