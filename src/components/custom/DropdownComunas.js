// modulos
import React, { useEffect, useState } from 'react';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// css
import './Dropdown.css';

function DropdownComunas({ url, handleChange }) {
	// const [isActive, setIsActive] = useState(false);
	// const [selected, setSelected] = useState('Seleccione una Comuna');
	const [dbComunas, setDbComunas] = useState('');
	let api = helpHttp();

	alert('comunas : ' + url);

	useEffect(() => {
		api.get(url).then((res) => {
			if (!res.err) {
				setDbComunas(res.comunas);
			} else {
				setDbComunas('');
			}
		});
	}, []);

	return (
		<div className="dropdown">
			{/* <section
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
					{dbComunas &&
						dbComunas.map((el) => (
							<li
								key={el.CODIGO}
								onClick={(e) => {
									setSelected(el.DESCRIPCION);
									setIsActive(false);
									handleComunaChange(el.CODIGO, el.DESCRIPCION);
								}}
								className="dropdown-item"
							>
								<p>{el.DESCRIPCION}</p>
							</li>
						))}
				</ul>
			)} */}
			<select
				name="cb_comunas"
				id="cb_comunas"
				className="texto-sm fc-grey"
				onChange={handleChange}
			>
				<option value="" className="texto-sm fc-grey">
					Elige un
				</option>
				{dbComunas &&
					dbComunas.map((el) => (
						<option
							key={el.CODIGO}
							value={el.CODIGO}
							className="texto-sm fc-grey"
						>
							{el.DESCRIPCION}
						</option>
					))}
			</select>
		</div>
	);
}

export default DropdownComunas;
