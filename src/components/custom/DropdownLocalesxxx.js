// modulos
import React, { useEffect, useState } from 'react';

// helpers
import { helpHttp } from '../stateManagement/helpers/helpHttp';

// css
import './Dropdown.css';

function DropdownLocales({ url, handleChange }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione un Local');
	const [dbLocales, setDbLocales] = useState('');
	let api = helpHttp();

	alert('locales : ' + url);

	useEffect(() => {
		api.get(url).then((res) => {
			if (!res.err) {
				setDbLocales(res.locales);
			} else {
				setDbLocales('');
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
					{dbLocales &&
						dbLocales.map((el) => (
							<li
								key={el.CODIGO}
								onClick={(e) => {
									setSelected(el.DESCRIPCION);
									setIsActive(false);
									handleLocalChange(el.CODIGO, el.DESCRIPCION);
								}}
								className="dropdown-item"
							>
								<p>{el.DESCRIPCION}</p>
							</li>
						))}
				</ul>
			)} */}
			<select
				name="cb_locales"
				id="cb_locales"
				className="texto-sm fc-grey"
				onChange={handleChange}
			>
				<option value="" className="texto-sm fc-grey">
					Elige un
				</option>
				{dbLocales &&
					dbLocales.map((el) => (
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

export default DropdownLocales;
