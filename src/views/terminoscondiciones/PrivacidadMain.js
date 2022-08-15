// paginas
import Headings from '../home/Headings';
import { PrivacidadNav, VinculosNav } from '../../components/layout';

const PrivacidadMain = () => {
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
										<p className="titulo-lg fc-grey mb-4">Introduccion</p>
										<p className="texto-sm fc-grey-light mt-3">
											Protejemos la Privacidad y Confiabilidad de informacion
											<b> no publica</b> de nuestros Usuarios
										</p>
										<ul className="ul-circle fc-grey ml-6">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													No revelamos informacion <b> no publica</b> a terceros
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Resguardamos su acceso
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Aseguramos su custodia
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

export default PrivacidadMain;
