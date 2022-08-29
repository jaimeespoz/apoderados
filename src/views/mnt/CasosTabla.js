import CasosRow from './CasosRow';

const CasosTabla = ({ data, setOpcion, setDataToEdit }) => {
	return (
		<div className="container">
			<div className="row my-4">
				<div className="col-12 mb-1">
					<h3 className="texto-lg fc-grey">Tabla de Datos</h3>
				</div>
				<div className="col-12">
					<div className="bd-1 px-4">
						<table className="table table-striped table-hover table-sm table-responsive-sm">
							<thead className="thead-dark">
								<tr className="texto fc-grey">
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
								</tr>
							</thead>
							{data && (
								<tbody>
									{data.length > 0 ? (
										data.map((el) => (
											<CasosRow
												key={el.Id}
												el={el}
												setOpcion={setOpcion}
												setDataToEdit={setDataToEdit}
											/>
										))
									) : (
										<tr>
											<td colSpan="3">Sin datos</td>
										</tr>
									)}
								</tbody>
							)}
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CasosTabla;
