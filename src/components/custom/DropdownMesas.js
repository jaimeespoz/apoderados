// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
import { url_tbl_mesas } from '../routes/Urls';

// css
import './Dropdown.css';

const DropdownMesas = ({ region, comuna, local, handleMesaChange }) => {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione un Local');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	useEffect(() => {
		let options = {
			jwt: true,
		};
		api
			.get(
				url_tbl_mesas +
					'/Browse_Mesas?region=' +
					region +
					'&comuna=' +
					comuna +
					'&local=' +
					local,
				options
			)
			.then((res) => {
				if (!res.err) {
					setDb(res);
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
			<ul className="dropdown-content">
				{db &&
					db.map((el) => (
						<li
							key={el.mesa}
							onClick={(e) => {
								setSelected(el.descripcion);
								setIsActive(false);
								handleMesaChange(el.id_mesa);
							}}
							className="dropdown-item"
						>
							<p>{el.descripcion}</p>
						</li>
					))}
			</ul>
		</div>
	);
};

export default DropdownMesas;
