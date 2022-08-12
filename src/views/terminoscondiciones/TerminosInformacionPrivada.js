// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosInformacionPrivada = () => {
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
											Informacion privada o delicada en Foros Publicos
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Es importante recordar que los comentarios presentados en
											un foro pueden ser registrados y almacenados en múltiples
											lugares, tanto en nuestro Sitio Web como en otra parte en
											Internet, los cuales pueden ser accesibles durante mucho
											tiempo y no se tiene control sobre quién los leerá
											eventualmente
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Es por lo tanto importante que tenga usted cuidado y sea
											selectivo acerca de la información personal que divulgue
											acerca de usted y de otros, y en especial, no debe
											divulgar información delicada, patrimonial o confidencial
											en sus comentarios en nuestros foros públicos.
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

export default TerminosInformacionPrivada;
