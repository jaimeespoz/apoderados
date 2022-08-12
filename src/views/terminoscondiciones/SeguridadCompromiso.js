// paginas
import Headings from '../home/Headings';
import { SeguridadClaveNav, VinculosNav } from '../../components/layout';

const SeguridadCompromiso = () => {
	return (
		<>
			<Headings />
			<main>
				<div className="container-row mh">
					<section className="flex-auto bg-azul px-10 wd-30">
						<SeguridadClaveNav />
					</section>
					<section className="flex-auto my-8 wd-70">
						<div className="container-row jc-center">
							<article className="flex-auto">
								<div className="container-row-nowrap jc-center">
									<article className="flex-auto wd-60">
										<p className="titulo-xxl fc-grey my-4">
											Seguridad de Clave de Internet
										</p>
										<p className="titulo-lg fc-grey mb-4">
											Comprometidos con su Seguridad
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Nos comprometemos con su seguridad, como tambien contamos
											en que usted siga nuestros consejos:
										</p>
										<ul className="ul-circle fc-grey ml-6">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Bloquear las claves una vez que se ingresan
													erróneamente <b>tres veces</b>
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Contamos con un proceso de identificación y
													autenticación confiable, a través de mecanismos de
													seguridad que permitan verificar que quien ingresa al
													sitio es realmente el cliente
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													Custodiamos tú información, resguardándola de terceros
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

export default SeguridadCompromiso;
