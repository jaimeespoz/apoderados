// modulos
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// css
import './Dropdown.css';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// url
import { url_tbl_clave_preguntas } from '../routes/Urls';

function PreguntasClave({ handlePreguntasClaveChange }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione una Pregunta');
	const [db, setDb] = useState(null);
	let api = helpHttp();

	useEffect(() => {
		api.get(url_tbl_clave_preguntas + '/Browse').then((res) => {
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
			{isActive && (
				<ul className="dropdown-content">
					{db &&
						db.map((el) => (
							<li
								key={el.id_clave_preguntas}
								onClick={(e) => {
									setSelected(el.glosa);
									setIsActive(false);
									handlePreguntasClaveChange(el.id_clave_preguntas);
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

export default PreguntasClave;
