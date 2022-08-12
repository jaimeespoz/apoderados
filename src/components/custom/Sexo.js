// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// css
import './Dropdown.css';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
import { url_tbl_sexo } from '../routes/Urls';

function Sexo({ handleSexoChange }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione su Sexo');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	useEffect(() => {
		let options = {
			jwt: true,
		};
		api.get(url_tbl_sexo + '/Browse', options).then((res) => {
			if (!res.err) {
				if ([401, 403].includes(res.status)) {
					alert('No autorizado');
				} else {
					setDb(res);
				}
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
								key={el.id_sexo}
								onClick={(e) => {
									setSelected(el.glosa);
									setIsActive(false);
									handleSexoChange(el.id_sexo);
								}}
								className="dropdown-item"
							>
								<p>{el.glosa}</p>
							</li>
						))}
				</ul>
			)}
		</div>
	);
}

export default Sexo;
