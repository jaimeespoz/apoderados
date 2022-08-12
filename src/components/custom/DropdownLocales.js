// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
// import { url_tbl_locales } from '../routes/Urls';
import { url_locales } from '../routes/Urls';

// css
import './Dropdown.css';

function DropdownLocales({ region, comuna, handleLocalChange }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione un Local');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	// alert(
	// 	url_tbl_locales + '/Browse_Locales?region=' + region + '&comuna=' + comuna
	// );

	useEffect(() => {
		let options = {
			jwt: true,
		};
		api.get(url_locales + region + '/' + comuna, options).then((res) => {
			if (!res.err) {
				setDb(res.locales);
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
						// 		key={el.id_locales}
						// 		onClick={(e) => {
						// 			setSelected(el.descripcion);
						// 			setIsActive(false);
						// 			handleLocalChange(el.id_locales);
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
									handleLocalChange(el.CODIGO);
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

export default DropdownLocales;
