// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosLicenciaLimitada = () => {
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

										<p className="titulo-lg fc-grey mb-4">Licencia Limitada</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted puede acceder y ver el contenido del Sitio Web desde
											su computadora o desde cualquier otro aparato y, a menos
											de que se indique de otra manera en estos Términos y
											Condiciones o en el Sitio Web, sacar copias o impresiones
											individuales del contenido del Sitio Web para su uso
											personal, interno únicamente
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El uso del Sitio Web y de los servicios que se ofrecen en
											o a través del Sitio Web, son sólo para su uso personal,
											no comercial.
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

export default TerminosLicenciaLimitada;
