// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosForosPublicos = () => {
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
										<p className="titulo-lg fc-grey mb-4">Foros Publicos</p>
										<ul>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													La Empresa puede, de vez en cuando y en caso de
													estimarlo adecuado, tener servicios de mensajería,
													servicios de chateo, tableros de noticias, blogs,
													otros foros y otros servicios disponibles en o a
													través del Sitio Web.
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Además de cualquier otra normatividad y regulación que
													podamos publicar con respecto a un servicio en
													particular, usted se obliga a no cargar, informar,
													transmitir, distribuir o de otra manera publicar a
													través del Sitio Web o de cualquier servicio o
													artículo puesto a la disposición en o a través del
													Sitio Web, cualquier material que:
												</p>
											</li>
										</ul>
										<ul className="ul-roman-sm fc-grey ml-6">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													restrinja o inhiba a cualquier otro usuario de usar y
													disfrutar del Sitio Web o de los servicios del Sitio
													Web,
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													sea fraudulento, ilegal, amenazante, abusivo,
													hostigante, calumnioso, difamatorio, obsceno, vulgar,
													ofensivo, pornográfico, profano, sexualmente explícito
													o indecente,
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													constituya o aliente conductas que pudieran constituir
													una ofensa criminal, dar lugar a responsabilidad civil
													o de otro modo violar cualquier ley local, estatal,
													nacional o internacional,
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													viole, plagie o infrinja los derechos de terceros
													incluyendo, sin limitación, derechos de autor, marcas
													comerciales, secretos comerciales, confidencialidad,
													contratos, patentes, derechos de privacidad o
													publicidad o cualquier otro derecho de propiedad,
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													contenga un virus, elemento de espionaje u otro
													componente dañino,
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													contenga enlaces fijos, publicidad, cartas de cadenas
													o esquemas de pirámides de cualquier tipo, o
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													constituya o contenga indicaciones de origen, endosos
													o declaraciones de hechos falsos o engañosos. Usted
													además se obliga a no personificar a cualquier otra
													persona o entidad, ya sea real o ficticia, incluyendo
													cualquier persona de La Empresa
												</p>
											</li>
										</ul>
										<ul>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Usted tampoco puede ofrecer comprar o vender algún
													producto o servicio en o a través de sus comentarios
													presentados en nuestros foros.
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Solamente usted es responsable del contenido y de las
													consecuencias de cualquiera de sus actividades.
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

export default TerminosForosPublicos;
