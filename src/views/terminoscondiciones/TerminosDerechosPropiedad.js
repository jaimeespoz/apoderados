// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosDerechosPropiedad = () => {
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
											Derechos de Propiedad
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa es el dueño único y exclusivo, de todos los
											derechos, titulo e intereses en y del Sitio Web, de todo
											el contenido (incluyendo audio, fotografías,
											ilustraciones, gráficos, otros medios visuales, videos,
											copias, textos, software, títulos, archivos de Onda de
											choque, entre otros), códigos, datos y materiales del
											mismo, el aspecto y el ambiente, el diseño y la
											organización del Sitio Web y la compilación de los
											contenidos, códigos, datos y los materiales en el Sitio
											Web, incluyendo pero no limitado a, cualesquiera derechos
											de autor, derechos de marca, derechos de patente, derechos
											de base de datos, derechos morales, derechos sui generis y
											otras propiedades intelectuales y derechos patrimoniales
											del mismo.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El uso del Sitio Web no le otorga propiedad de ninguno de
											los contenidos, códigos, datos o materiales a los que
											pueda acceder en o a través del Sitio Web.
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

export default TerminosDerechosPropiedad;
