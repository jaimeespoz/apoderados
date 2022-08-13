import DropdownComunas from '../../components/custom/DropdownComunas';

function Opcion05({ region, regionglosa, handleSelComunaChange }) {
	return (
		<section>
			<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
				Opcion Elegida: Otra Comuna (espeficicar) y Cualquier Local
			</p>
			<hr></hr>
			<div className="container-row-nowrap gap-4 pt-2">
				<div className="flex-auto">
					<label className="form-label-sm">Region</label>
					<span className="texto-sm fc-secondaryColor">
						{/* {region} */}
						{regionglosa}
					</span>
				</div>
			</div>
			<div className="container-row-nowrap">
				<div className="flex-auto">
					<label className="form-label-sm">Comuna</label>
					<DropdownComunas
						region={region}
						handleComunaChange={(region, handleSelComunaChange)}
					/>
				</div>
			</div>
		</section>
	);
}

export default Opcion05;
