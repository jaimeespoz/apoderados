import DropdownLocales from '../../components/custom/DropdownLocales';

function Opcion03({
	region,
	regionglosa,
	comuna,
	comunaglosa,
	handleSelLocalChange,
}) {
	return (
		<section>
			<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
				Opcion Elegida: Misma Comuna y Cualquier Local
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
					<span className="texto-sm fc-secondaryColor">
						{/* {comuna} */}
						{comunaglosa}
					</span>
				</div>
			</div>
			<div className="container-row-nowrap">
				<div className="flex-auto">
					<label className="form-label-sm">Local Votacion</label>
					<DropdownLocales
						region={region}
						comuna={comuna}
						handleLocalChange={handleSelLocalChange}
					/>
				</div>
			</div>
		</section>
	);
}

export default Opcion03;
