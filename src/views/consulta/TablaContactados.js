import TablaCasos from './TablaCasos';

const TablaContactados = ({ data, setOpcion, setDataToEdit }) => {
	return (
		<div className="container">
			<div className="row my-4">
				<div className="col-12 mb-1">
					<h3 className="texto-lg fc-grey">Apoderados de Mesa CONTACTADOS</h3>
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
										data.map((el) => <TablaCasos key={el.Id} el={el} />)
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

export default TablaContactados;
