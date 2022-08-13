// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
import { url_regiones } from '../routes/Urls';

// css
import './Dropdown.css';

function DropdownRegiones({ handleRegionChange }) {
	const [region, setRegion] = useState('00');
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione una Region');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	useEffect(() => {
		api.get(url_regiones).then((res) => {
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
						db.map((el) => (
							<li
								key={el.CODIGO}
								onClick={(e) => {
									setSelected(el.DESCRIPCION);
									setIsActive(false);
									setRegion(el.CODIGO);
									handleRegionChange(el.CODIGO, el.DESCRIPCION);
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
