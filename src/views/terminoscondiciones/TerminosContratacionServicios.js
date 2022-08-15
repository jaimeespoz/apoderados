// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosContratacionServicios = () => {
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
											Contratacion de Servicios
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											La Empresa puede eventualmente, poner ciertos productos
											y/o servicios a la disposición de visitantes y de usuarios
											registrados del Sitio Web.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Si usted ordena cualquier producto, por el presente
											documento usted representa y garantiza que tiene 18 años
											de edad o más.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Se obliga a pagar la totalidad de los precios de cualquier
											compra que haga, ya sea con tarjeta de crédito/débito
											concurrente con su orden en línea o por otro medio de pago
											aceptable para La Empresa
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted se obliga a pagar todos los impuestos aplicables.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Si el pago no es recibido por nosotros de parte del emisor
											de su tarjeta de crédito o débito o de sus agentes, usted
											se obliga a pagar todas las cantidades debidas al momento
											de la reclamación por nuestra parte.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Algunos productos que usted compra y/o descarga en o a
											través del Sitio Web pueden estar sujetos a términos y
											condiciones adicionales que le serán presentados al
											momento de dicha compra o descarga.
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

export default TerminosContratacionServicios;
