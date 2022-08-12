// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
// import { url_tbl_comunas } from '../routes/Urls';
import { url_comunas } from '../routes/Urls';

// css
import './Dropdown.css';

function DropdownComunas({ region, handleComunaChange }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione una Comuna');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	// alert(url_tbl_comunas + '/Browse_Comunas' + region);

	useEffect(() => {
		let options = {
			jwt: true,
		};
		api
			.get(url_comunas + region, options)
			// .get(url_tbl_comunas + '/Browse_Comunas' + region, options)
			.then((res) => {
				if (!res.err) {
					setDb(res.comunas);
				} else {
					setDb(null);
				}
			});
	}, []);

	return (
		<div className="dropdown">
			<section
				className="dropdown-btn"
				onClick={(e) => {
					setIsActive(!isActive);
				}}
			>
				{selected}
				<p>
					<FontAwesomeIcon icon={faCaretDown} />
				</p>
			</section>
			{isActive && (
				<ul className="dropdown-content">
					{db &&
						// db.map((el) => (
						// 	<li
						// 		key={el.id_comunas}
						// 		onClick={(e) => {
						// 			setSelected(el.descripcion);
						// 			setIsActive(false);
						// 			handleComunaChange(el.id_comunas);
						// 		}}
						// 		className="dropdown-item"
						// 	>
						// 		<p>{el.descripcion}</p>
						// 	</li>
						// ))}
						db.map((el) => (
							<li
								key={el.CODIGO}
								onClick={(e) => {
									setSelected(el.DESCRIPCION);
									setIsActive(false);
									handleComunaChange(el.CODIGO);
								}}
								className="dropdown-item"
							>
								<p>{el.DESCRIPCION}</p>
							</li>
						))}
				</ul>
			)}
		</div>
	);
}

export default DropdownComunas;
