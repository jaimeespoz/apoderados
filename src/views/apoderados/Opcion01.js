function Opcion01({
	region,
	regionglosa,
	comuna,
	comunaglosa,
	local,
	localglosa,
	mesa,
}) {
	return (
		<section>
			<p className="texto-lg fw-semi-bold fc-secondaryColor pt-12 pb-1">
				Opcion Elegida: Mismo Local y Misma Mesa
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
					<span className="texto-sm fc-secondaryColor">
						{/* {local} */}
						{localglosa}
					</span>
				</div>
			</div>
			<div className="container-row-nowrap">
				<div className="flex-auto">
					<label className="form-label-sm">Mesa de Votacion</label>
					<span className="texto-sm fc-secondaryColor">{mesa}</span>
				</div>
			</div>
		</section>
	);
}

export default Opcion01;
