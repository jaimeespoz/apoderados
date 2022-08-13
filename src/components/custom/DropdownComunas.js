// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
import { url_comunas } from '../routes/Urls';

// css
import './Dropdown.css';

function DropdownComunas({ region, handleComunaChange }) {
	// const [region, setRegion] = useState('00');
	const [comuna, setComuna] = useState('00000');
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione una Comuna');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	useEffect(() => {
		api.get(url_comunas + region).then((res) => {
			if (!res.err) {
				setDb(res.comunas);
				// alert(JSON.stringify(res.comunas));
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
									setComuna(el.CODIGO);
									handleComunaChange(el.CODIGO, el.DESCRIPCION);
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
