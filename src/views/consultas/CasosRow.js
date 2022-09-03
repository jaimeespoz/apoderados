import taskedit from '../../components/assets/icons/task-edit-icon.png';
import homeinspection from '../../components/assets/icons/home-inspection-icon.png';
import { formatea_celular, crunch } from '../../utils/FuncionesTexto';

import { formatea_numero } from '../../utils/FuncionesNumeros';
import { Mailto } from '../../utils/FuncionesMail';

const CasosRow = ({ el, setOpcion, setDataToEdit }) => {
	let {
		RUT,
		DV,
		NOMBRES,
		APELLIDO_PATERNO,
		APELLIDO_MATERNO,
		TELEFONO_MOVIL,
		EMAIL,
		CODIGO_REGION_VOTA,
		CODIGO_COMUNA_VOTA,
		CODIGO_LOCAL_VOTA,
		MESA_VOTA,
	} = el;

	let casilla = 'jespoz@outlook.es';
	let subject = 'Apoderados x el RECHAZO';
	let body = '<h2>Hola</h2>';
	body = body + '<table style="font-family: Tahoma; font-size: 16px;">"';
	body = body + '<tbody>';
	body = body + '<tr>';
	body = body + '<td>hola</td>';
	body = body + '<td>chao</td>';
	body = body + '</tr>';
	body = body + '</tbody>';
	body = body + '</table>';
	// css.Append(String.Concat('<tbody>'));
	// css.Append(String.Concat('<tr>'));
	// css.Append(String.Concat("<td style='width: 100px;'>&nbsp;</td>"));
	// css.Append(
	// 	String.Concat("<td style='width: 160px;'>Correo Electronico</td>")
	// );
	// css.Append(String.Concat("<td style='width: 20px;'>:</td>"));
	// css.Append(
	// 	String.Concat("<td style='width: 360px;'>", email.Trim(), '</td>')
	// );
	// css.Append(String.Concat('</tr>'));
	// css.Append(String.Concat('<tr>'));
	// css.Append(String.Concat("<td style='width: 100px;'>&nbsp;</td>"));
	// css.Append(String.Concat("<td style='width: 160px;'>Nombre</td>"));
	// css.Append(String.Concat("<td style='width: 20px;'>:</td>"));
	// css.Append(
	// 	String.Concat("<td style='width: 360px;'>", nombre.Trim(), '</td>')
	// );
	// css.Append(String.Concat('</tr>'));
	// css.Append(String.Concat('<tr>'));
	// css.Append(String.Concat("<td style='width: 100px;'>&nbsp;</td>"));
	// css.Append(String.Concat("<td style='width: 160px;'>Telefono</td>"));
	// css.Append(String.Concat("<td style='width: 20px;'>:</td>"));
	// css.Append(
	// 	String.Concat("<td style='width: 360px;'>", telefono.Trim(), '</td>')
	// );
	// css.Append(String.Concat('</tr>'));
	// css.Append(String.Concat('<tr>'));
	// css.Append(String.Concat("<td style='width: 100px;'>&nbsp;</td>"));
	// css.Append(String.Concat("<td style='width: 160px;'>Mensaje</td>"));
	// css.Append(String.Concat("<td style='width: 20px;'>:</td>"));
	// css.Append(
	// 	String.Concat("<td style='width: 360px;'>", mensaje.Trim(), '</td>')
	// );
	// css.Append(String.Concat('</tr>'));
	// css.Append(String.Concat('</tbody>'));
	// css.Append(String.Concat('</table>'));

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
			<td className="texto-xsm fc-grey">{formatea_celular(TELEFONO_MOVIL)}</td>
			<td className="texto-xsm fc-grey">
				<Mailto email={casilla} subject={subject} body={body}>
					Mail
				</Mailto>
				{/* ,<a href="mailto:{casilla}?subject={subject}&body={body}">{EMAIL}</a> */}
			</td>
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
