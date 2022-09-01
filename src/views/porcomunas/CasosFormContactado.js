import { useState, useEffect } from 'react';
import { fecha_del_dia_aaaammdd } from '../../utils/FuncionesFechas';
import Button from 'react-bootstrap/Button';
// import { formatea_celular } from '../../utils/FuncionesTexto';

const initialForm = {
	Id: '',
	CONTACTADO: '',
	CONTACTADO_CUANDO: '',
	TIPO_LOCAL_MESA: '',
};
const CasosFormContactado = ({
	setOpcion,
	updateContacto,
	dataToEdit,
	setDataToEdit,
}) => {
	const [form, setForm] = useState(initialForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(initialForm);
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleSubmit = (e) => {
		e.preventDefault();

		form.CONTACTADO = '1';
		form.CONTACTADO_CUANDO = fecha_del_dia_aaaammdd();
		form.TIPO_LOCAL_MESA = '0';

		updateContacto(form);
		setForm(initialForm);
		setDataToEdit(null);
		setOpcion('0');
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
							Contactado
						</p>
					</div>
					<div className="col-12 bg-white bd-1 px-6 py-2">
						<div className="row">
							<div className="col-12">
								<div className="row">
									<div className="col-4">
										<label className="form-label-sm fc-blue">Nombres</label>
										<p className="form-control-sm fc-grey">{form.NOMBRES}</p>
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
									<div className="row">
										<div className="col-4">
											<label className="form-label-sm fc-blue">Celular</label>
											<p className="form-control-sm fc-grey">
												{form.TELEFONO_MOVIL}
											</p>
										</div>
										<div className="col-4">
											<label className="form-label-sm fc-blue">
												Casilla Correo
											</label>
											<p className="form-control-sm fc-grey">{form.EMAIL}</p>
										</div>
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
										<p className="form-control-sm fc-grey">{form.MESA_VOTA}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 bg-white bd-1 px-6 py-3 mt-2">
						<div className="row">
							<div className="col-12 my-4">
								<p className="texto fc-blue">
									¿ Confirma registrar Contactado ?
								</p>
							</div>
						</div>
						<div className="col-12 mt-4">
							<Button variant="primary" size="sm" active onClick={handleSubmit}>
								Aceptar
							</Button>
							<Button variant="primary" size="sm" active onClick={handleVolver}>
								Volver
							</Button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CasosFormContactado;
