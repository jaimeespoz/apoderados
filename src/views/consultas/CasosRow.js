import dislike from '../../components/assets/icons/dislike-comment-icon.png';
import pronounceright from '../../components/assets/icons/pronounce-right-icon.png';
import taskedit from '../../components/assets/icons/task-edit-icon.png';
import homeinspection from '../../components/assets/icons/home-inspection-icon.png';
import homeoffice from '../../components/assets/icons/home-office-icon.png';
import { formatea_celular, crunch } from '../../utils/FuncionesTexto';

import { formatea_numero } from '../../utils/FuncionesNumeros';

const CasosRow = ({ el, setOpcion, setDataToEdit }) => {
	let {
		RUT,
		DV,
		NOMBRES,
		APELLIDO_PATERNO,
		APELLIDO_MATERNO,
		// TELEFONO_MOVIL,
		CODIGO_REGION_VOTA,
		CODIGO_COMUNA_VOTA,
		CODIGO_LOCAL_VOTA,
		MESA_VOTA,
	} = el;

	return (
		<tr>
			<td className="texto-xsm fc-grey">
				{crunch(APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES, 30)}
			</td>
			<td className="texto-xsm fc-grey">
				{formatea_numero(RUT)}
				{'-'}
				{DV}
			</td>
			{/* <td className="texto-xsm fc-grey">{formatea_celular(TELEFONO_MOVIL)}</td> */}
			<td className="texto-xsm fc-grey">{CODIGO_REGION_VOTA}</td>
			<td className="texto-xsm fc-grey">{CODIGO_COMUNA_VOTA}</td>
			<td className="texto-xsm fc-grey">{CODIGO_LOCAL_VOTA}</td>
			<td className="texto-xsm fc-grey">{MESA_VOTA}</td>
			{/* <td colSpan={2}>
				<img
					src={dislike}
					className="img-opciones"
					alt="No Puede No Quiere"
					onClick={() => {
						setOpcion('4');
						setDataToEdit(el);
					}}
				/>
			</td>
			<td colSpan={2}>
				<img
					src={pronounceright}
					className="img-opciones"
					alt="Contactar"
					onClick={() => {
						setOpcion('5');
						setDataToEdit(el);
					}}
				/>
			</td> */}
			<td colSpan={2}>
				<img
					src={taskedit}
					className="img-opciones"
					alt="No Puede"
					onClick={() => {
						setOpcion('1');
						setDataToEdit(el);
					}}
				/>
			</td>
			<td colSpan={2}>
				<img
					src={homeinspection}
					className="img-opciones"
					alt="No Puede No Quiere"
					onClick={() => {
						setOpcion('2');
						setDataToEdit(el);
					}}
				/>
			</td>
			{/* <td colSpan={2}>
				<img
					src={homeoffice}
					className="img-opciones"
					alt="No Puede No Quiere"
					onClick={() => {
						setOpcion('3');
						setDataToEdit(el);
					}}
				/>
			</td> */}
		</tr>
	);
};

export default CasosRow;
