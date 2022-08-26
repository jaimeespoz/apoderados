// modulos
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import Headings from '../home/Headings';
import { OpcionesNav, VinculosNav } from '../../components/layout';
import TipoParticipacion from '../../const';

// url
import { url_apoderados_query } from '../../components/routes/Urls';

function Mantencion() {
	const location = useLocation();
	const { Id, Row } = location.state;
	const [users, setUsers] = useState('');
	let navigate = useNavigate();

	useEffect(() => {
		cargaApoderado();
	}, []);

	const cargaApoderado = async () => {
		let data = {
			filter: 'ID=' + Id,
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

	const handlePersonales = (e) => {
		navigate('/personales', { state: { Row: Row } });
	};

	const handleLocales = (e) => {
		navigate('/local', { state: { Id: Id } });
	};

	const handleSeleccionados = (e) => {
		navigate('/seleccionados', { state: { Id: Id } });
	};

	const handleVolver = (e) => {
		navigate('/nomina');
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
										Informacion Registrada del Apoderado de Mesa
									</p>
								</section>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row gap-2 bd-1 px-12 py-2 my-1">
								<div className="flex-fijo">
									<p className="texto fw-semi-bold fc-grey">Datos Personales</p>
								</div>
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
									<p className="form-label-sm">{users.RUT + '-' + users.DV}</p>
								</div>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row gap-2 bd-1 px-12 py-2 my-1">
								<div className="flex-fijo">
									<p className="texto fw-semi-bold fc-grey">
										Datos de Contacto
									</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">
										Casilla de Correo
									</label>
									<p className="form-label-sm">{users.EMAIL}</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">Celular</label>
									<p className="form-label-sm">{users.TELEFONO_MOVIL}</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">
										Tipo de Participacion
									</label>
									<p className="form-label-sm">
										{TipoParticipacion(users.PREFERENCIA_APODERADO)}
									</p>
								</div>
							</div>
						</div>
						<div className="container-row jc-center">
							<div className="container-row gap-2 bd-1 px-12 py-2 my-1">
								<div className="flex-fijo">
									<p className="texto fw-semi-bold fc-grey">
										Local de Votacion del Apoderado
									</p>
								</div>

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
						</div>
						<div className="container-row jc-center">
							<div className="container-row gap-2 bd-1 px-12 py-2 my-1">
								<div className="flex-fijo">
									<p className="texto fw-semi-bold fc-grey">
										Local de Votacion SELECCIONADO
									</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">Region</label>
									<p className="form-label-sm">
										{users.DESC_REGION_VOTA_SUPERVISA}
									</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">Comuna</label>
									<p className="form-label-sm">{users.DESC_COMUNA_ASIGNADA}</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">Local</label>
									<p className="form-label-sm">{users.DESC_LOCAL_ASIGNADO}</p>
								</div>
								<div className="flex-auto">
									<label className="form-label-sm fc-blue">
										Mesa de Votacion
									</label>
									<p className="form-label-sm">{users.CODIGO_MESA_ASIGNADA}</p>
								</div>
							</div>
						</div>
						<div className="container-row gap-2 px-12 py-2 my-1">
							<button onClick={handlePersonales} className="btn-primary mt-8">
								Datos Personales
							</button>
							<button onClick={handleLocales} className="btn-primary mt-8">
								Local
							</button>
							<button
								onClick={handleSeleccionados}
								className="btn-primary mt-8"
							>
								Seleccion
							</button>
							<button onClick={handleVolver} className="btn-primary mt-8">
								Volver
							</button>
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default Mantencion;
