// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosResponsabilidadPortal = () => {
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
											Responsabilidad del Portal
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El usuario conoce y acepta que el portal no otorga ninguna
											garantía de cualquier naturaleza, ya sea expresa o
											implícita, sobre los datos, contenidos, información y
											servicios que se incorporan y ofrecen desde el Portal.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Exceptuando los casos que la Ley imponga expresamente lo
											contrario, y exclusivamente con la medida y extensión en
											que lo imponga, el Portal no garantiza ni asume
											responsabilidad alguna respecto a los posibles daños y
											perjuicios causados por el uso y utilización de la
											información, datos y servicios del Portal.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											En todo caso, el Portal excluye cualquier responsabilidad
											por los daños y perjuicios que puedan deberse a la
											información y/o servicios prestados o suministrados por
											terceros diferentes de la Empresa. Toda responsabilidad
											será del tercero ya sea proveedor o colaborador.
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

export default TerminosResponsabilidadPortal;
