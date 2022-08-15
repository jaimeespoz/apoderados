import DropdownComunas from '../../components/custom/DropdownComunas';
import DropdownLocales from '../../components/custom/DropdownLocalesxxx';

function Opcion04({
	region,
	regionglosa,
	handleSelComunaChange,
	handleSelLocalChange,
}) {
	return (
		<section>
			<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
				Opcion Elegida: Otra Comuna (espeficicar) y Otro Local (especificar)
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
			<div className="container-row-nowrap">
				<div className="flex-auto">
					<label className="form-label-sm">Local Votacion</label>
					<DropdownLocales
						region={region}
						// comuna={comuna}
						handleLocalChange={handleSelLocalChange}
					/>
				</div>
			</div>
		</section>
	);
}

export default Opcion04;
