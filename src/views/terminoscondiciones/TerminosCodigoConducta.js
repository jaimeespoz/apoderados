// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosCodigoConducta = () => {
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
										<p className="titulo-lg fc-grey mb-4">Codigo de Conducta</p>
										<ul>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Usted garantiza y está de acuerdo en que, mientras use
													el Sitio Web y los diversos servicios y artículos que
													se ofrecen en o a través del Sitio Web, usted no:
												</p>
											</li>
										</ul>
										<ul className="ul-alfa-sm fc-grey ml-4">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													personalizará a ninguna persona o entidad ni
													desvirtuará su afiliación con alguna otra persona o
													entidad;
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													insertará su propio anuncio, posicionamiento de marca
													o algún otro contenido promocional o el de un tercero
													en cualquiera de los contenidos, materiales o
													servicios o materiales del Sitio Web (por ejemplo, sin
													limitación, en una actualización RSS o en un programa
													de radio grabado (podcast) recibido de La Empresa o de
													algún otro modo a través del Sitio Web), ni usará,
													redistribuirá, republicará o explotará dichos
													contenidos o servicios con cualquier otro propósito
													adicional comercial o promocional;
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													intentará ganar acceso no autorizado a otros sistemas
													de cómputo a través del Sitio Web. Usted no:
												</p>
												<ul className="ul-roman-sm fc-grey ml-4">
													<li>
														<p className="texto-sm fc-grey-light mt-3">
															participará en navegar por la red, en "raspar
															(scraping) la pantalla", "raspar (scraping) la
															base de datos", en recolectar direcciones de
															correo electrónico, direcciones inalámbricas u
															otra información personal o de contactos, o
															cualquier otro medio automático de obtener listas
															de usuarios u otra información de o a través del
															sitio Web o de los servicios ofrecidos en o a
															través del Sitio Web, incluyendo, sin limitación,
															cualquier información que se encuentre en algún
															servidor o base de datos relacionada con el Sitio
															Web o los servicios ofrecidos en o a través del
															Sitio Web;
														</p>
													</li>
													<li>
														<p className="texto-sm fc-grey-light mt-3">
															obtendrá o intentará obtener acceso no autorizado
															a los sistemas de cómputo, materiales o
															información por cualquier medio;
														</p>
													</li>
													<li>
														<p className="texto-sm fc-grey-light mt-3">
															usará el Sitio Web o los servicios puestos a su
															disposición en o a través del Sitio Web de alguna
															manera con la intención de interrumpir, dañar,
															deshabilitar, sobrecargar o deteriorar el Sitio
															Web o dichos servicios, incluyendo, sin
															limitación, mandar mensajes masivos no solicitados
															o "inundar" servidores con solicitudes;
														</p>
													</li>
													<li>
														<p className="texto-sm fc-grey-light mt-3">
															usará el Sitio Web o los servicios o artículos del
															Sitio Web en violación de la propiedad intelectual
															o de otros derechos legales o patrimoniales de La
															Empresa o de algún tercero; ni (v) usará el Sitio
															Web o los servicios del Sitio Web en violación de
															cualquier ley aplicable.
														</p>
													</li>
													<li>
														<p className="texto-sm fc-grey-light mt-3">
															usará el Sitio Web o los servicios del Sitio Web
															en violación de cualquier ley aplicable.
														</p>
													</li>
												</ul>
											</li>
										</ul>
										<ul>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Usted se obliga además, a no intentar (o alentar o
													apoyar el intento de otro) a embaucar, destruir,
													decodificar, o de otro modo alterar o interferir con
													el Sitio Web o con los servicios del Sitio Web, o con
													cualquier contenido del mismo, o hacer cualquier uso
													no autorizado del mismo.
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Usted se obliga a no usar el Sitio Web de alguna
													manera que pudiera dañar, deshabilitar, sobrecargar o
													deteriorar el Sitio Web o interferir con que cualquier
													otra persona pueda usar o disfrutar del Sitio Web o de
													cualquiera de sus servicios. Usted no obtendrá ni
													intentará obtener algún material o información a
													través de cualquier medio que no haya sido estipulado
													o puesto a la disposición del público intencionalmente
													a través del Sitio Web.
												</p>
											</li>
										</ul>
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

export default TerminosCodigoConducta;
