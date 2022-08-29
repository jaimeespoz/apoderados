// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';
import TipoParticipacion from '../../const';

// url
import {
	url_apoderados_query,
	url_apoderados_put,
} from '../../components/routes/Urls';
import {
	url_regiones,
	url_comunas,
	url_locales,
} from '../../components/routes/Urls';
import TipoApoderados from '../../api/TipoApoderados.json';

const initialForm = {
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
	let errors = {};

	form.errores = '0';
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

const CasosFormSeleccion = ({ updateSeleccion, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initialForm);
	const [votaRegion, setVotaRegion] = useState('');
	const [votaComuna, setVotaComuna] = useState('');
	const [votaLocal, setVotaLocal] = useState('');
	const [votaMesa, setVotaMesa] = useState('');

	const [votaRegionglosa, setVotaRegionGlosa] = useState('');
	const [votaComunaglosa, setVotaComunaGlosa] = useState('');
	const [votaLocalglosa, setVotaLocalGlosa] = useState('');

	const [dbRegiones, setDbRegiones] = useState('');
	const [dbComunas, setDbComunas] = useState('');
	const [dbLocales, setDbLocales] = useState('');

	const [selComuna, setSelComuna] = useState('');
	const [selLocal, setSelLocal] = useState('');

	const [selComunaglosa, setSelComunaGlosa] = useState('');
	const [selLocalglosa, setSelLocalGlosa] = useState('');

	const [valido, setValido] = useState(false);
	const [errors, setErrors] = useState({});
	const [dbTipoApoderados, setDbTipoApoderados] = useState(null);
	const [tipoApoderados, setTipoApoderados] = useState(null);

	useEffect(() => {
		setForm(dataToEdit);
		setDbTipoApoderados(TipoApoderados.tipoapoderados);
		//		cargaApoderado();
		cargaRegiones();
	}, []);

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
		// 	e.preventDefault();
		// 	setErrors(validationsForm(form));
		// 	setErrors((prevState) => validationsForm(form));
		// 	if (form.errores === '0') {
		// 		let data = {
		// 			CODIGO_REGION_VOTA: form.votaregion,
		// 			CODIGO_COMUNA_VOTA: form.votacomuna,
		// 			CODIGO_LOCAL_VOTA: form.votalocal,
		// 			MESA_VOTA: form.votamesa,
		// 		};
		// 		fetch(url_apoderados_put + Id, {
		// 			method: 'post',
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 			},
		// 			body: JSON.stringify(data),
		// 		})
		// 			.then((res) => res.json())
		// 			.then((result) => {
		// 				if (result.filasafectadas === 0) {
		// 					alert('No se pudo grabar');
		// 				}
		// 				if (result.filasafectadas === 1) {
		// 					alert('Grabado');
		// 				}
		// 			})
		// 			.catch((err) => {
		// 				console.log(err);
		// 			});
		// 		navigate('/mantencion', { state: { Id: Id } });
		// 	}
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
							<div className="col-12">
								<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
									Local de Votacion Seleccionado
								</p>
							</div>
							<div className="col-12 bg-white bd-1 px-6 py-2">
								<div className="row">
									<div className="col-12">
										<div className="row">
											<div className="col-4">
												<label className="form-label-sm fc-blue">
													Tipo de Participacion
												</label>
												<p className="form-control-sm fc-grey">
													{TipoParticipacion(form.PREFERENCIA_APODERADO)}
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
							<div className="col-12">
								<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
									Tipo de Participacion
								</p>
							</div>
							<div className="col-12 bg-white bd-1 px-6 py-2">
								<div className="row">
									<div className="col-12">
										<div className="bootstrap-select">
											<select
												name="cb_preferencia"
												id="cb_preferencia"
												className="texto-sm fc-grey"
												onChange={(e) => {
													form.preferencia = e.target.value;
													setTipoApoderados(e.target.value);
													cargaComunas(url_comunas + form.CODIGO_REGION_VOTA);
													if (e.target.value === '3') {
														cargaLocales(
															url_locales +
																form.CODIGO_REGION_VOTA +
																'/' +
																form.CODIGO_COMUNA_VOTA
														);
													}
													if (e.target.value === '4') {
														setDbLocales('');
													}
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
							</div>
							{tipoApoderados > '0' && (
								<div className="col-12 bg-white bd-1 px-6 my-2">
									<div className="row">
										<section className="col-12">
											<section id="seleccion">
												{tipoApoderados === '1' && (
													<section>
														<p className="texto-lg fw-semi-bold fc-secondaryColor pt-2 pb-1">
															Opcion Elegida: Mismo Local y Misma Mesa
														</p>
														<table>
															<tbody>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Region
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_REGION_VOTA_SUPERVISA}
																		</span>
																	</td>
																</tr>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Comuna
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_COMUNA_VOTA}
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
																			{form.DESC_LOCAL_VOTA}
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
																			{form.MESA_VOTA}
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
															Opcion Elegida: Mismo Local y Cualquier Mesa del
															Local
														</p>
														<table>
															<tbody>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Region
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_REGION_VOTA_SUPERVISA}
																		</span>
																	</td>
																</tr>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Comuna
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_COMUNA_VOTA}
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
																			{form.DESC_LOCAL_VOTA}
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
														<table>
															<tbody>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Region
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_REGION_VOTA_SUPERVISA}
																		</span>
																	</td>
																</tr>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Comuna
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_COMUNA_VOTA}
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
																						e.target.options[
																							e.target.selectedIndex
																						].text
																					);
																					form.sellocal = e.target.value;
																					form.setlocalglosa =
																						e.target.options[
																							e.target.selectedIndex
																						].text;
																				}}
																			>
																				<option
																					value=""
																					className="texto-sm fc-grey"
																				>
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
															Opcion Elegida: Otra Comuna (espeficicar) y Otro
															Local (especificar)
														</p>
														<table>
															<tbody>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Region
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_REGION_VOTA_SUPERVISA}
																		</span>
																	</td>
																</tr>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Comuna
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<div className="bootstrap-select">
																			<select
																				name="cb_comunas_seleccion"
																				id="cb_comunas_seleccion"
																				className="texto-sm fc-grey"
																				onChange={(e) => {
																					// cargaComunas(url_comunas + votaRegion);
																					cargaLocales(
																						url_locales +
																							form.CODIGO_REGION_VOTA +
																							'/' +
																							e.target.value
																					);
																					setSelComuna(e.target.value);
																					setSelComunaGlosa(
																						e.target.options[
																							e.target.selectedIndex
																						].text
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
																				<option
																					value=""
																					className="texto-sm fc-grey"
																				>
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
																						e.target.options[
																							e.target.selectedIndex
																						].text
																					);
																					form.sellocal = e.target.value;
																					form.sellocalglosa =
																						e.target.options[
																							e.target.selectedIndex
																						].text;
																				}}
																			>
																				<option
																					value=""
																					className="texto-sm fc-grey"
																				>
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
															Opcion Elegida: Otra Comuna (espeficicar) y
															Cualquier Local
														</p>
														<table>
															<tbody>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Region
																		</label>
																	</td>
																	<td style={{ width: '60%' }}>
																		<span className="texto-sm fc-secondaryColor">
																			{form.DESC_REGION_VOTA_SUPERVISA}
																		</span>
																	</td>
																</tr>
																<tr>
																	<td style={{ width: '40%' }}>
																		<label className="form-label-sm">
																			Comuna
																		</label>
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
																						e.target.options[
																							e.target.selectedIndex
																						].text
																					);
																					form.selcomuna = e.target.value;
																					form.selcomunaglosa =
																						e.target.options[
																							e.target.selectedIndex
																						].text;
																				}}
																			>
																				<option
																					value=""
																					className="texto-sm fc-grey"
																				>
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
								</div>
							)}
						</div>

						<div className="row">
							<div className="col-12 mt-2">
								<button onClick={handleSubmit} className="btn-primary">
									Aceptar
								</button>
							</div>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};

export default CasosFormSeleccion;
