// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosPoliticaIdeas = () => {
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
											Politica de envio de ideas no solicitadas
										</p>
										<ul>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													A menos que se solicite específicamente, no pedimos ni
													deseamos recibir ninguna información confidencial,
													secreta o patrimonial, ni otro material de usted a
													través del Sitio Web, por correo electrónico o de
													cualquier otra manera
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Cualquier información, trabajos creativos,
													demostración, ideas, sugerencias, conceptos, métodos,
													sistemas, diseños, planes, técnicas u otros materiales
													que nos haya mandado o presentado (incluyendo, por
													ejemplo y sin limitación, aquello que usted presenta o
													envía a nuestros grupos de chateo, tablas de mensajes
													y/o a nuestros ‘blogs’, o que nos manda vía correo
													electrónico) ("Materiales Presentados") se considerará
													como no confidencial o secreto y que puede ser usado
													por nosotros de cualquier manera consistente con la
													Política de Privacidad del Sitio Web
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Al presentarnos o mandarnos Materiales Presentados,
													usted:
												</p>
											</li>
										</ul>
										<ul className="ul-roman-sm fc-grey ml-6">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													representa y garantiza que los Materiales Presentados
													son originales suyos, que ninguna otra persona tiene
													ningún derecho sobre ellos, y que cualquier "derecho
													moral" sobre los Materiales Presentados ha sido
													renunciado, y
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													usted nos concede, a nosotros y a nuestros afiliados,
													derecho y licencia libres de regalías, sin
													restricciones, mundiales, perpetuos, irrevocables, no
													exclusivos y totalmente transferibles, que pueden ser
													cedidos y sub-licenciados, para usar, copiar,
													reproducir, modificar, adaptar, publicar, traducir,
													crear trabajos derivados de, distribuir, ejecutar,
													exponer e incorporar en otros trabajos cualquiera de
													los Materiales Presentados (todos o en parte) en
													cualquier forma, medio o tecnología no conocida o por
													desarrollar, incluyendo propósitos promocionales y/o
													comerciales.
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													No podemos ser responsables de conservar ningún
													Material Presentado proporcionado por usted y podemos
													borrar o destruir dicho Material Presentado en
													cualquier momento.
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

export default TerminosPoliticaIdeas;
