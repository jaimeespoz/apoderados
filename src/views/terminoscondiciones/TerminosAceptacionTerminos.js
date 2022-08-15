// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosAceptacionTerminos = () => {
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
											Aceptacion de nuestros Terminos
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Las presentes condiciones generales de uso del portal
											regulan el acceso y la utilización del portal, incluyendo
											los contenidos y los servicios puestos a disposición de
											los usuarios en y/o a través del portal, bien por el
											portal, bien por sus usuarios, bien por terceros.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											No obstante, el acceso y la utilización de ciertos
											contenidos y/o servicios puede encontrarse sometido a
											determinadas condiciones específicas.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El mero acceso y/o utilización del portal, de todos o
											parte de sus contenidos y/o servicios significa la plena
											aceptación de las presentes condiciones generales de uso.
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

export default TerminosAceptacionTerminos;
