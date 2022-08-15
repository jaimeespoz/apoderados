// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosMarcasComerciales = () => {
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
										<p className="titulo-lg fc-grey mb-4">Marcas Comerciales</p>
										<p className="texto-sm fc-grey-light mt-3">
											Las marcas comerciales, logos, marcas de servicios, marcas
											registradas (conjuntamente las "Marcas Comerciales")
											expuestas en el Sitio Web o en los contenidos disponibles
											a través del Sitio Web son Marcas Comerciales de La
											Empresa registradas y no registradas y otras, y no pueden
											ser usadas con respecto a productos y/o servicios que no
											estén relacionados, asociados o patrocinados por sus
											poseedores de derechos y que puedan causar confusión a los
											clientes, o de alguna manera que denigre o desacredite a
											sus poseedores de derechos.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Todas las Marcas Comerciales que no sean de La Empresa que
											aparezcan en el sitio Web o en o a través de los servicios
											del Sitio Web, si las hubiera, son propiedad de sus
											respectivos dueños. Nada que esté contenido en el Sitio
											Web deberá ser interpretado como otorgando, por
											implicación, desestimación, o de otra manera, alguna
											licencia o derecho para usar alguna Marca Comercial
											expuesta en el Sitio Web sin el permiso escrito de La
											Empresa o de terceros que puedan ser dueños de dicha Marca
											Comercial.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El mal uso de las Marcas Comerciales expuestas en el Sitio
											Web o en o a través de cualquiera de los servicios del
											Sitio Web está estrictamente prohibido.
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

export default TerminosMarcasComerciales;
