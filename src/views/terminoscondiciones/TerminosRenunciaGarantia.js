// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosRenunciaGarantia = () => {
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
											Renuncia de Garantias
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											El sitio web, incluyendo, sin limitación, todos los
											servicios, contenidos, funciones y materiales
											proporcionados a través del sitio web, son proporcionados
											"tal como estén", "como se ponen a la disposición", sin
											garantía de ningún tipo, ya sea expresa o implícita,
											incluyendo, sin limitación, cualquier garantía de
											información, datos, servicios de procesamiento de datos,
											acceso ilimitado o ininterrumpido, cualquier garantía con
											respecto a la disponibilidad, interpretabilidad, no
											interpretabilidad, exactitud, precisión, rectitud,
											perfección, conclusión, utilidad, o contenido de la
											información, y cualquier garantía de título,
											no-infracción, comerciabilidad o aptitud para un propósito
											en particular, y en el presente renunciamos a cualquiera y
											a todas dichas garantías, expresas e implícitas.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											No garantizamos que el sitio web o los servicios,
											contenidos, funciones o materiales proporcionados a través
											del sitio web seran oportunos, seguros, ininterrumpidos o
											libres de error, o que los defectos seran corregidos.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											No damos garantía de que el sitio web o de que los
											servicios proporcionados cumplieran con los requerimientos
											de los usuarios. Ningún consejo, resultados o información,
											ya sea oral o escrito, que usted obtenga de nosotros a
											través del sitio web crearé alguna garantía que no haya
											sido establecida expresamente en el presente.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa tampoco asume ninguna responsabilidad, y no
											sera responsable de cualquier daño a, o de cualquier virus
											que pudiera infectar su equipo a causa de su acceso a, uso
											de, o navegación en el sitio web o por descargar
											cualquiera de los materiales, datos, textos, imagenes,
											contenidos de video o contenidos de audio del sitio web.
											Si usted no esté satisfecho con el sitio web, su única
											solución es descontinuar usando el sitio web.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Tratamos de asegurar que la información publicada en el
											sitio web es correcta y actualizada. Nos reservamos el
											derecho de cambiar o hacer correcciones a cualquier
											información proporcionada en el sitio web en cualquier
											momento y sin ningún aviso previo.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La empresa no avala ni es responsable de la exactitud o
											veracidad de cualquier opinión, consejo o declaración en
											el sitio web, ni de cualquier publicación ofensiva,
											difamatoria, obscena, indecente, ilegal o violatoria hecha
											en el mismo por cualquier persona a no ser un empleado
											portavoz autorizado de La Emoresa en su caracter oficial
											(incluyendo, sin limitación, otros usuarios del sitio
											web). Es su responsabilidad evaluar la exactitud,
											conclusión o utilidad de cualquier información, opinión,
											consejo u otro contenido disponible a través del sitio
											web. Por favor busque el consejo de profesionales, según
											sea apropiado, con respecto a la evaluación de cualquier
											información, opinión, consejo u otro contenido específico,
											incluyendo pero no limitado a, información, opinión,
											consejo u otro contenido financiero, de salud o de estilo
											de vida.
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

export default TerminosRenunciaGarantia;
