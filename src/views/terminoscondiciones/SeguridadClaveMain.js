// paginas
import Headings from '../home/Headings';
import { SeguridadClaveNav, VinculosNav } from '../../components/layout';

const SeguridadClaseMain = () => {
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
							<article className="flex-auto mx-24">
								<div className="container-row-nowrap jc-center">
									<article className="flex-auto wd-60">
										<p className="titulo-xxl fc-grey my-4">
											Seguridad de Clave de Internet
										</p>

										<p className="titulo-lg fc-grey mb-4">Introduccion</p>
										<p className="texto-sm fc-grey-light mt-3">
											La clave de internet te permitirá acceder a tu sesión
											privada de nuestro Portal, donde podrás ver en línea las
											funcionalidades que te ofrecemos.
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

export default SeguridadClaseMain;
