import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Headings from '../home/Headings';
import { VinculosNav } from '../../components/layout';

// url
import { url_apoderados_query } from '../../components/routes/Urls';

import { helpHttp } from '../../components/stateManagement/helpers/helpHttp';

function Mantencion() {
	alert('entre Mantencion');
	const location = useLocation();
	const { Obj } = location.state;
	const [datos, setDatos] = useState([]);
	let api = helpHttp();

	// const { Id, RUT } = Obj;

	useEffect(() => {
		setDatos(Obj);
		alert('en mantencion' + JSON.stringify(Obj));
		// alert('en mantencion' + JSON.parse(Obj));
		alert('***********: ' + JSON.stringify(datos));
		alert(datos.Id);
		alert(Obj.Id);
	}, []);
	// let data = {
	// 	filter: 'ID=' + Id,
	// 	limit: 1,
	// };
	// // alert(JSON.stringify(data));
	// let options = {
	// 	body: data,
	// 	headers: { 'content-type': 'application/json' },
	// };

	// useEffect(() => {
	// 	//if (dbUser === '') {
	// 	alert(JSON.stringify(options));
	// 	api.post(url_apoderados_query, options).then((res) => {
	// 		if (!res.err) {
	// 			alert('**: ' + JSON.stringify(res.apoderados));
	// 			setDatos(res);
	// 			alert(JSON.stringify(datos));
	// 		} else {
	// 			setDatos('');
	// 		}
	// 	});
	// 	//}
	// }, []);

	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<div>
						<hr></hr>
						{datos && (
							<section>
								<article className="texto fc-grey">
									<p className="texto-sm fc-grey">RUT</p>
									<p className="texto-sm fc-grey">
										{datos.RUT}-{datos.DV}
									</p>
								</article>
								{/* <tr>
										<td className="texto-sm fc-grey">Nombres</td>
										<td className="texto-sm fc-grey">{dbUser.NOMBRES}</td>
									</tr>
									<tr>
										<td className="texto-sm fc-grey">Apellido Paterno</td>
										<td className="texto-sm fc-grey">
											{dbUser.APELLIDO_PATERNO}
										</td>
									</tr>
									<tr>
										<td className="texto-sm fc-grey">Apellido Paterno</td>
										<td className="texto-sm fc-grey">
											{dbUser.APELLIDO_MATERNO}
										</td>
									</tr>
									<tr>
										<td className="texto-sm fc-grey">Celular</td>
										<td className="texto-sm fc-grey">
											{dbUser.TELEFONO_MOVIL}
										</td>
									</tr>{' '}
									<tr>
										<td className="texto-sm fc-grey">Correo</td>
										<td className="texto-sm fc-grey">{dbUser.EMAIL}</td>
									</tr>
									<tr>
										<td>Nombres</td>
										<td>{dbUser.NOMBRES}</td>
									</tr>
								</table> */}
							</section>
						)}
					</div>
				</div>
			</main>
			<VinculosNav />
		</>
	);
}

export default Mantencion;
