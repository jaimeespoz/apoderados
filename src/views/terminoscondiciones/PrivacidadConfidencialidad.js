// paginas
import Headings from '../home/Headings';
import { PrivacidadNav, VinculosNav } from '../../components/layout';

function PrivacidadConfidencialidad() {
	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto bg-azul px-10 wd-30">
						<PrivacidadNav />
					</section>
					<section className="flex-auto my-8 wd-70">
						<div className="container-row jc-center">
							<article className="flex-auto mx-24">
								<div className="container-row-nowrap jc-center">
									<article className="flex-auto">
										<p className="titulo-xxl fc-grey my-4">
											Privacidad y Confidencialidad
										</p>
										<p className="titulo-lg fc-grey mb-4">Confidencialidad</p>
										<p className="texto-sm fc-grey-light mt-3">
											Protejemos las privacidad de la informacion no publica, a
											traves :
										</p>
										<ul className="flex-auto ul-circle fc-grey ml-6">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													No revelamos a terceros información de los clientes
													sin su previo consentimiento
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Protegemos los datos personales de nuestros clientes
													conforme a la Ley de protección de datos personales en
													nuestro pais
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Somos responsables de la custodia de todo tipo de
													información personal del cliente
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Tomamos las medidas de seguridad y resguardo adecuadas
													para asegurar el correcto uso, almacenamiento,
													transportey envío de información confidencial y
													personal del cliente
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
}

export default PrivacidadConfidencialidad;
