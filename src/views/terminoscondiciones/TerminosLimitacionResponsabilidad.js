// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosLimitacionResponsabilidad = () => {
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
											Limitacion de Responsabilidad
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											En ningún caso, incluyendo pero no limitado a negligencia,
											sera responsable La Empresa, o cualquiera de sus
											directores, funcionarios, empleados, agentes o
											proveedores, del contenido o de los servicios
											(conjuntamente, las "entidades protegidas") de cualquier
											daño directo, indirecto, especial, incidental,
											consecuente, ejemplar o punitivo como resultado de, o
											directa o indirectamente relacionado con, el uso de, o la
											incapacidad de usar el sitio web o los contenidos,
											materiales y funciones relacionados con el mismo, su
											provisión de información vía el sitio web, negocios
											perdidos o ventas perdidas, aún cuando dicha entidad
											protegida haya sido asesorada sobre la posibilidad de
											dichos daños. Algunas jurisdicciones no permiten la
											limitación o exclusión de responsabilidad por daños
											incidentales o indirectos así que algunos de las
											limitaciones arriba mencionadas no aplican a algunos
											usuarios. En ningún caso serén responsables las entidades
											protegidas por o en relación con cualquier contenido
											publicado, transmitido, intercambiado o recibido por o en
											nombre de cualquier usuario o de otra persona en o a
											través del sitio web. En ningún caso la suma total de las
											responsabilidades de las entidades protegidas hacia usted,
											por todos los daños, pérdidas y causas de acción penal (ya
											sea por contrato o por agravio, incluyendo pero no
											limitado a, negligencia o de alguna otra manera) que
											resulten de los términos y condiciones o del uso que usted
											haga del sitio web, debera exceder en la suma total, la
											cantidad, si la hubiera, pagada por usted a La Empresa por
											el uso del sitio web o por la compra de productos vía el
											sitio web.
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

export default TerminosLimitacionResponsabilidad;
