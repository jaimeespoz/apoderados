// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosDerechoMonitoreo = () => {
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
							<article className="flex-auto">
								<div className="container-row-nowrap jc-center">
									<article className="flex-auto wd-60">
										<p className="titulo-xxl fc-grey my-4">
											Terminos y Condiciones de Uso del Sitio
										</p>
										<p className="titulo-lg fc-grey mb-4">
											Derecho de Monitoreo y de Control Editorial
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa se reserva el derecho, pero no tiene la
											obligación, de monitorear y/o revisar todos los materiales
											enviados al Sitio Web o a través de los servicios o
											artículos del Sitio Web por los usuarios, y La Empresa no
											es responsable de dichos materiales enviados por los
											usuarios
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Sin embargo, La Empresa se reserva el derecho en todo
											momento de divulgar cualquier información que sea
											necesaria para satisfacer cualquier ley, reglamento o
											solicitud gubernamental, o de editar, rehusarse a colocar
											o a quitar cualquier información o materiales, todos o en
											parte, que a discreción únicamente de La Empresa sean
											censurables o en violación de estos Términos de Uso, de
											las políticas de La Empresa o de la ley aplicable.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											También podemos imponer límites sobre ciertos artículos de
											los foros o restringir su acceso a parte o a todos los
											foros sin notificación o sanción, si creemos que usted
											está en incumplimiento de las directrices establecidas en
											este párrafo, nuestros términos y condiciones o la ley
											aplicable, o por cualquier otra razón sin notificación o
											responsabilidad.
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

export default TerminosDerechoMonitoreo;
