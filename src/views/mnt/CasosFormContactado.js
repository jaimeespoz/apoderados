import { useState, useEffect } from 'react';
import { fecha_del_dia_aaaammdd } from '../../utils/FuncionesFechas';
import Button from 'react-bootstrap/Button';

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
		form.TIPO_LOCAL_MESA = '';

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
					<div className="col-12 bg-white bd-1 px-6 py-3">
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
