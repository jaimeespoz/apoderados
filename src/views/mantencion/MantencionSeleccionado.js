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

function MantencionSeleccionados() {
	const [form, setForm] = useState(initialForm);
	const [users, setUsers] = useState('');
	const location = useLocation();
	const { Query, Row } = location.state;
	const [tipoApoderados, setTipoApoderados] = useState(null);

	// const [selRegion, setSelRegion] = useState('');
	const [selComuna, setSelComuna] = useState('');
	const [selLocal, setSelLocal] = useState('');
	// const [selMesa, setSelMesa] = useState('');

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

	useEffect(() => {
		setDbTipoApoderados(TipoApoderados.tipoapoderados);
		cargaApoderado();
		cargaRegiones();
	}, []);

	const cargaApoderado = async () => {
		let data = {
			filter: 'ID=' + Row.Id,
			limit: 1,
		};
		await fetch(url_apoderados_query, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				setUsers(result.apoderados[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors(validationsForm(form));
		setErrors((prevState) => validationsForm(form));

		if (form.errores === '0') {
			if (form.errores === '0') {
				let data = {
					PREFERENCIA_APODERADO: form.preferencia,
					CODIGO_COMUNA_ASIGNADA: '0',
					CODIGO_LOCAL_ASIGNADO: '0',
					CODIGO_MESA_ASIGNADA: '0',
				};

				fetch(url_apoderados_put + Row.Id, {
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.then((result) => {
						if (result.filasafectadas === 0) {
							alert('No se pudo grabar');
						}
						if (result.filasafectadas === 1) {
							alert('Grabado');
						}
					})
					.catch((err) => {
						console.log(err);
					});
				navigate('/mantencion', { state: { Query: Query, Row: Row } });
			}
		}
	};

	const handleVolver = (e) => {
		navigate('/mantencion', { state: { Query: Query, Row: Row } });
	};

	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto bg-azul px-10 wd-20">
						<OpcionesNav />
					</section>
					<section className="flex-auto Aligner-item--center wd-80">
						<div className="container-row jc-center">
							<div className="container-row  px-12 py-6">
								<section className="flex-auto">
									<p className="texto-lg fw-semi-bold fc-grey pt-6 pb-1">
										Local de Votacion Seleccionado
									</p>
								</section>
							</div>
						</div>

						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto bd-1 px-12 py-6">
									<p className="texto fw-semi-bold fc-grey pt-3">
										Datos Personales
									</p>
									<div className="container-row gap-4 pt-3">
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Nombres</label>
											<p className="form-label-sm">{users.NOMBRES}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Apellido Paterno
											</label>
											<p className="form-label-sm">{users.APELLIDO_PATERNO}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Apellido Materno
											</label>
											<p className="form-label-sm">{users.APELLIDO_MATERNO}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Carnet Identidad
											</label>
											<p className="form-label-sm">
												{users.RUT + '-' + users.DV}
											</p>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto bd-1 px-12 py-6">
									<p className="texto fw-semi-bold fc-grey pt-3">
										Local de Votacion del Apoderado
									</p>
									<div className="container-row gap-4 mt-3">
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Region</label>
											<p className="form-label-sm">
												{users.DESC_REGION_VOTA_SUPERVISA}
											</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Comuna</label>
											<p className="form-label-sm">{users.DESC_COMUNA_VOTA}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Local</label>
											<p className="form-label-sm">{users.DESC_LOCAL_VOTA}</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Mesa de Votacion
											</label>
											<p className="form-label-sm">{users.MESA_VOTA}</p>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto bd-1 px-12 py-6">
									<p className="texto fw-semi-bold fc-grey pt-3">
										Local de Votacion Seleccionado
									</p>
									<div className="container-row gap-4 mt-3">
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Region</label>
											<p className="form-label-sm">
												{users.DESC_REGION_VOTA_SUPERVISA}
											</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Comuna</label>
											<p className="form-label-sm">
												{users.DESC_COMUNA_ASIGNADA}
											</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">Local</label>
											<p className="form-label-sm">
												{users.DESC_LOCAL_ASIGNADO}
											</p>
										</div>
										<div className="flex-auto">
											<label className="form-label-sm fc-blue">
												Mesa de Votacion
											</label>
											<p className="form-label-sm">
												{users.CODIGO_MESA_ASIGNADA}
											</p>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto py-6">
									<section className="flex-auto">
										{/* Indiquenos como nos puede ayudar */}
										<section id="forma">
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
																cargaComunas(
																	url_comunas + users.CODIGO_REGION_VOTA
																);
																if (e.target.value === '3') {
																	cargaLocales(
																		url_locales +
																			users.CODIGO_REGION_VOTA +
																			'/' +
																			users.CODIGO_COMUNA_VOTA
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
										</section>
									</section>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto px-12 py-6">
									<section id="seleccion">
										{tipoApoderados === '1' && (
											<section>
												<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
													Opcion Elegida: Mismo Local y Misma Mesa
												</p>
												<hr></hr>
												<table>
													<tbody>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Region</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_REGION_VOTA_SUPERVISA}
																</span>
															</td>
														</tr>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Comuna</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_COMUNA_VOTA}
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
																	{users.DESC_LOCAL_VOTA}
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
																	{users.MESA_VOTA}
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
													Opcion Elegida: Mismo Local y Cualquier Mesa del Local
												</p>
												<hr></hr>
												<table>
													<tbody>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Region</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_REGION_VOTA_SUPERVISA}
																</span>
															</td>
														</tr>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Comuna</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_COMUNA_VOTA}
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
																	{users.DESC_LOCAL_VOTA}
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
												<hr></hr>
												<table>
													<tbody>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Region</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_REGION_VOTA_SUPERVISA}
																</span>
															</td>
														</tr>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Comuna</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_COMUNA_VOTA}
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
																				e.target.options[e.target.selectedIndex]
																					.text
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
													Opcion Elegida: Otra Comuna (espeficicar) y Otro Local
													(especificar)
												</p>
												<hr></hr>
												<table>
													<tbody>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Region</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_REGION_VOTA_SUPERVISA}
																</span>
															</td>
														</tr>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Comuna</label>
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
																					users.CODIGO_REGION_VOTA +
																					'/' +
																					e.target.value
																			);
																			setSelComuna(e.target.value);
																			setSelComunaGlosa(
																				e.target.options[e.target.selectedIndex]
																					.text
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
																				e.target.options[e.target.selectedIndex]
																					.text
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
													Opcion Elegida: Otra Comuna (espeficicar) y Cualquier
													Local
												</p>
												<hr></hr>
												<table>
													<tbody>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Region</label>
															</td>
															<td style={{ width: '60%' }}>
																<span className="texto-sm fc-secondaryColor">
																	{users.DESC_REGION_VOTA_SUPERVISA}
																</span>
															</td>
														</tr>
														<tr>
															<td style={{ width: '40%' }}>
																<label className="form-label-sm">Comuna</label>
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
																				e.target.options[e.target.selectedIndex]
																					.text
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
						<div className="container-row jc-center">
							<div className="container-row my-2">
								<section className="flex-auto px-12 py-6">
									<button onClick={handleSubmit} className="btn-primary mt-8">
										Aceptar
									</button>
									<button onClick={handleVolver} className="btn-primary mt-8">
										Volver
									</button>
								</section>
							</div>
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default MantencionSeleccionados;
