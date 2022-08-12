// paginas
import Headings from '../home/Headings';
import { PrivacidadNav, VinculosNav } from '../../components/layout';

function PrivacidadPrivacidad() {
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
							<article className="flex-auto">
								<div className="container-row-nowrap jc-center">
									<article className="flex-auto wd-60">
										<p className="titulo-xxl fc-grey my-4">
											Privacidad y Confidencialidad
										</p>

										<ul className="ul-circle fc-grey ml-6">
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													No revelamos informacion no publica a nadie, a traves
													de ningun medio, fuera de la empresa
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													No nos refererimos a informacion confidencial en areas
													o lugares publicos
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													La informacion confidencial es mantenida dentro de los
													recintos de la empresa
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-3">
													No compartimos informacion confidencial con personas
													que no pertenezcan a la empresa
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

export default PrivacidadPrivacidad;
