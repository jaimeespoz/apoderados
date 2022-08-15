// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosModificacionesSitio = () => {
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
										<p className="titulo-xxl fc-grey my-4">
											Terminos y Condiciones de Uso del Sitio
										</p>
										<p className="titulo-lg fc-grey mb-4">
											Modificaciones del Sitio
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa se reserva la facultad de modificar en
											cualquier momento las condiciones generales de uso del
											portal.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											En todo caso, se recomienda que consulte periódicamente
											los presentes términos de uso del portal, ya que pueden
											ser modificados.
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

export default TerminosModificacionesSitio;
