// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosObligacionesUsuarios = () => {
	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto bg-azul px-10 wd-30">
						<TerminosUsoNav />
					</section>
					<section className="flex-auto my-8 wd-70">
						<div className="container-row jc-center">
							<article className="flex-auto mx-24">
								<div className="container-row-nowrap jc-center">
									<article className="flex-auto wd-60">
										<p className="titulo-xxl fc-grey-light my-4">
											Terminos y Condiciones de Uso del Sitio
										</p>

										<p className="titulo-lg fc-grey-light mb-4">
											Obligaciones del Usuario
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El usuario deberá respetar en todo momento los términos y
											condiciones establecidos en las presentes condiciones
											generales de uso del portal.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											De forma expresa el usuario manifiesta que utilizará el
											portal de forma diligente y asumiendo cualquier
											responsabilidad que pudiera derivarse del incumplimiento
											de las normas.
										</p>
									</article>
								</div>
							</article>
						</div>
					</section>
				</div>
			</main>
			<VinculosNav />
		</>
	);
};

export default TerminosObligacionesUsuarios;
