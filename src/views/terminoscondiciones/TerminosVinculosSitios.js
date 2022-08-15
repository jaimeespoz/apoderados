// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosVinculosSitios = () => {
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
											Vinculos a otros Sitios
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted no tiene permitido enlazarse directamente a ninguna
											imagen almacenada en el Sitio Web o en nuestros servicios,
											como sería usar un método de enlace "en-línea" para
											provocar que la imagen almacenada por nosotros fuera
											expuesta en otro sitio web. Usted se obliga a no descargar
											o usar imágenes almacenadas en este Sitio Web en otro
											sitio web, con cualquier propósito, incluyendo, sin
											limitación, publicar dichas imágenes en otro sitio web.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted está de acuerdo en que si incluye un enlace (link)
											de cualquier otro sitio web al Sitio Web, dicho enlace se
											abrirá en una nueva ventana navegadora y se enlazará con
											la versión completa de una página formateada HTML de este
											Sitio Web.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted se obliga a no enlazarse de cualquier otro sitio web
											a este Sitio Web de tal manera que el Sitio Web, o
											cualquier página del Sitio Web, esté "enmarcado", rodeado
											u ofuscado por los contenidos, materiales o
											posicionamientos de marca de cualquier tercero.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Nos reservamos todos nuestros derechos bajo la ley para
											insistir en que cualquier enlace al Sitio Web sea
											descontinuado y a revocar su derecho a enlazarse al Sitio
											Web de cualquier otro sitio web, en cualquier momento en
											el que le mandemos notificación por escrito
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

export default TerminosVinculosSitios;
