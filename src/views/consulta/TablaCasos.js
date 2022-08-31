import { formatea_celular, crunch } from '../../utils/FuncionesTexto';

const TablaCasos = ({ el }) => {
	let {
		NOMBRES,
		APELLIDO_PATERNO,
		APELLIDO_MATERNO,
		TELEFONO_MOVIL,
		DESC_COMUNA_VOTA,
		DESC_LOCAL_VOTA,
		MESA_VOTA,
	} = el;

	return (
		<tr>
			<td className="texto-xsm fc-grey">
				{crunch(APELLIDO_PATERNO, APELLIDO_MATERNO, NOMBRES, 30)}
			</td>
			<td className="texto-xsm fc-grey">{formatea_celular(TELEFONO_MOVIL)}</td>
			<td className="texto-xsm fc-grey">{DESC_COMUNA_VOTA}</td>
			<td className="texto-xsm fc-grey">{DESC_LOCAL_VOTA}</td>
			<td className="texto-xsm fc-grey">{MESA_VOTA}</td>
		</tr>
	);
};

export default TablaCasos;
