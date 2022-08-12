// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
// import { url_tbl_regiones } from '../routes/Urls';
import { url_regiones } from '../routes/Urls';

// css
import './Dropdown.css';

function DropdownRegiones({ handleRegionChange }) {
	// const [region, setRegion] = useState('00');
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione una Region');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	useEffect(() => {
		let options = {
			jwt: false,
		};
		api.get(url_regiones, options).then((res) => {
			// api.get(url_tbl_regiones + '/Browse', options).then((res) => {
			if (!res.err) {
				setDb(res.regiones);
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
						// 		key={el.id_regiones}
						// 		onClick={(e) => {
						// 			setSelected(el.descripcion);
						// 			setIsActive(false);
						// 			setRegion(el.id_regiones);
						// 			handleRegionChange(el.id_regiones);
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
									// setRegion(el.CODIGO);
									handleRegionChange(el.CODIGO);
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

export default DropdownRegiones;
