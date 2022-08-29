// modulos
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import {
	url_regiones,
	url_comunas,
	url_locales,
} from '../../components/routes/Urls';

const initialForm = {
	Id: '',
	CODIGO_REGION_VOTA: '',
	CODIGO_COMUNA_VOTA: '',
	CODIGO_LOCAL_VOTA: '',
	MESA_VOTA: '',
};

const validationsForm = (form) => {
	let errors = {};

	form.ERRORES = '0';
	if (!form.CODIGO_REGION_VOTA) {
		errors.CODIGO_REGION_VOTA = 'Seleccione su Region';
		form.ERRORES = '1';
	}

	if (!form.CODIGO_COMUNA_VOTA) {
		errors.CODIGO_COMUNA_VOTA = 'Seleccione su Comuna';
		form.ERRORES = '1';
	}

	if (!form.CODIGO_LOCAL_VOTA) {
		errors.CODIGO_LOCAL_VOTA = 'Seleccione su Local';
		form.ERRORES = '1';
	}

	if (!form.MESA_VOTA) {
		errors.MESA_VOTA = 'Indiquenos su Mesa';
		form.ERRORES = '1';
	}
	return errors;
};

const CasosFormLocal = ({
	setOpcion,
	updateLocal,
	dataToEdit,
	setDataToEdit,
}) => {
	const [form, setForm] = useState(initialForm);

	const [dbRegiones, setDbRegiones] = useState('');
	const [dbComunas, setDbComunas] = useState('');
	const [dbLocales, setDbLocales] = useState('');

	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (dataToEdit) {
			setForm(initialForm);
			setForm(dataToEdit);
			cargaRegiones();
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const cargaRegiones = async () => {
		await fetch(url_regiones, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setDbRegiones(result.regiones);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const cargaComunas = async (url) => {
		await fetch(url, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setDbComunas(result.comunas);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const cargaLocales = async (url) => {
		await fetch(url, {
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				setDbLocales(result.locales);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (form.ERRORES === '0') {
			updateLocal(form);
		}
	};

	const handleVolver = (e) => {
		setOpcion('0');
	};

	return (
		<>
			<main>
				<div className="container py-8">
					<form>
						<div className="row">
							<div className="col-12">
								<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
									Local de Votacion
								</p>
							</div>
							<div className="col-12 bg-white bd-1 px-6 py-2">
								<div className="row">
									<div className="col-12">
										<div className="row">
											<div className="col-4">
												<label className="form-label-sm fc-blue">Nombres</label>
												<p className="form-control-sm fc-grey">
													{form.NOMBRES}
												</p>
											</div>
											<div className="col-4">
												<label className="form-label-sm fc-blue">
													Apellido Paterno
												</label>
												<p className="form-control-sm fc-grey">
													{form.APELLIDO_PATERNO}
												</p>
											</div>
											<div className="col-4">
												<label className="form-label-sm fc-blue">
													Apellido Materno
												</label>
												<p className="form-control-sm fc-grey">
													{form.APELLIDO_MATERNO}
												</p>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="row">
											<div className="col-3">
												<label className="form-label-sm fc-blue">Region</label>
												<p className="form-control-sm fc-grey">
													{form.DESC_REGION_VOTA_SUPERVISA}
												</p>
											</div>
											<div className="col-3">
												<label className="form-label-sm fc-blue">Comuna</label>
												<p className="form-control-sm fc-grey">
													{form.DESC_COMUNA_VOTA}
												</p>
											</div>
											<div className="col-4">
												<label className="form-label-sm fc-blue">Local</label>
												<p className="form-control-sm fc-grey">
													{form.DESC_LOCAL_VOTA}
												</p>
											</div>
											<div className="col-2">
												<label className="form-label-sm fc-blue">Mesa</label>
												<p className="form-control-sm fc-grey">
													{form.MESA_VOTA}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
									Datos de SU LOCAL de Votacion
								</p>
							</div>
							<div className="col-12 bg-white bd-1 px-6 py-2">
								<div className="row">
									<div className="col-6">
										<label className="form-label-sm fc-blue">Region</label>
										<div className="bootstrap-select">
											<select
												name="CODIGO_REGION_VOTA"
												id="CODIGO_REGION_VOTA"
												className="texto-sm fc-grey"
												onChange={(e) => {
													cargaComunas(url_comunas + e.target.value);
													form.CODIGO_REGION_VOTA = e.target.value;
													form.CODIGO_COMUNA_VOTA = '';
													form.CODIGO_LOCAL_VOTA = '';
													form.MESA_VOTA = '';
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
										{errors.CODIGO_REGION_VOTA && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.CODIGO_REGION_VOTA}
											</p>
										)}
									</div>
									<div className="col-6">
										<label className="form-label-sm fc-blue">Comuna</label>
										<div className="bootstrap-select">
											<select
												name="cb_comunas"
												id="cb_comunas"
												className="texto-sm fc-grey"
												onChange={(e) => {
													cargaLocales(
														url_locales +
															form.CODIGO_REGION_VOTA +
															'/' +
															e.target.value
													);
													form.CODIGO_COMUNA_VOTA = e.target.value;
													form.CODIGO_LOCAL_VOTA = '';
													form.MESA_VOTA = '';
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
										{errors.CODIGO_COMUNA_VOTA && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.CODIGO_COMUNA_VOTA}
											</p>
										)}
									</div>
								</div>
								<div className="row">
									<div className="col-8">
										<label className="form-label-sm fc-blue">Local</label>
										<div className="bootstrap-select">
											<select
												name="cb_locales"
												id="cb_locales"
												className="texto-sm fc-grey"
												onChange={(e) => {
													// setVotaLocal(e.target.value);
													form.CODIGO_LOCAL_VOTA = e.target.value;
													form.MESA_VOTA = '';
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
										{errors.CODIGO_LOCAL_VOTA && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.CODIGO_LOCAL_VOTA}
											</p>
										)}
									</div>
									<div className="col-3">
										<label
											htmlFor="MESA_VOTA"
											className="form-label-sm fc-blue"
										>
											Mesa de Votacion
										</label>
										<input
											type="text"
											className="form-control-sm"
											id="MESA_VOTA"
											name="MESA_VOTA"
											value={form.MESA_VOTA}
											placeholder="Numero de Mesa"
											onChange={(e) => {
												form.MESA_VOTA = e.target.value;
												handleChange(e);
											}}
										/>
										{errors.MESA_VOTA && (
											<p className="texto-sm fc-secondaryColor fw-medium mb-2">
												{errors.MESA_VOTA}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12 mt-2">
								<button onClick={handleSubmit} className="btn-primary">
									Aceptar
								</button>
								<Button
									variant="primary"
									size="sm"
									active
									onClick={handleVolver}
								>
									Volver
								</Button>
							</div>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};

export default CasosFormLocal;
