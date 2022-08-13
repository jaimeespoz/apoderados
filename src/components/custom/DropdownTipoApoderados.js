import TipoApoderados from '../../api/TipoApoderados';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function DropdownTipoApoderados({ handleApoderadosChange }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Seleccione una Opcion');
	const [db, setDb] = useState(null);

	useEffect(() => {
		setDb(TipoApoderados.tipoapoderados);
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
								key={el.id}
								onClick={(e) => {
									setSelected(el.descripcion);
									setIsActive(false);
									handleApoderadosChange(el.id);
								}}
								className="dropdown-item"
							>
								<p>{el.descripcion}</p>
							</li>
						))}
				</ul>
			)}
		</div>
	);
}

export default DropdownTipoApoderados;
