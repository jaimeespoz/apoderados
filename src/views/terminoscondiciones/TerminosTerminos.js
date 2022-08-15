// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosTerminos = () => {
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
											Termino del Servicios del Portal
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa puede terminar, cambiar, suspender o
											descontinuar cualquier aspecto del Sitio Web o de los
											servicios del Sitio Web en cualquier momento.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa puede restringir, suspender o terminar su
											acceso al Sitio Web y/o a sus servicios si creemos que
											usted está en incumplimiento de nuestros términos y
											condiciones o de la ley aplicable, o por cualquier otra
											razón sin notificación o responsabilidad.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa mantiene una política que estipula la
											terminación, en circunstancias apropiadas, de los
											privilegios de uso del Sitio Web para usuarios que son
											violadores repetitivos de los derechos de propiedad
											intelectual.
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

export default TerminosTerminos;
