// modulos
import React, { useEffect, useState } from 'react';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// css
import './Dropdown.css';

function DropdownRegiones({ url, handleChange }) {
	// const [isActive, setIsActive] = useState(false);
	// const [selected, setSelected] = useState('Seleccione una Region');
	const [dbRegiones, setDbRegiones] = useState('');
	let api = helpHttp();

	alert('regiones : ' + url);

	useEffect(() => {
		api.get(url).then((res) => {
			if (!res.err) {
				setDbRegiones(res.regiones);
			} else {
				setDbRegiones('');
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
			</section> */}
			{/* {isActive && (
				<ul className="dropdown-content">
					{dbRegiones &&
						dbRegiones.map((el) => (
							<li
								key={el.CODIGO}
								onClick={(e) => {
									setSelected(el.DESCRIPCION);
									setIsActive(false);
									handleRegionChange(el.CODIGO, el.DESCRIPCION);
								}}
								className="dropdown-item"
							>
								<p>{el.DESCRIPCION}</p>
							</li>
						))}
				</ul>
			 )} */}
			<select
				name="cb_regiones"
				id="cb_regiones"
				className="texto-sm fc-grey"
				onChange={handleChange}
			>
				<option value="" className="texto-sm fc-grey">
					Elige una Region
				</option>
				{dbRegiones &&
					dbRegiones.map((el) => (
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

export default DropdownRegiones;
