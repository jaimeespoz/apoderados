// paginas
import Headings from '../home/Headings';
import {
	TerminosUsoNav,
	VinculosNav,
	VinculosTerminosNav,
} from '../../components/layout';

const TerminosPropiedadIndustrial = () => {
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
										<p className="titulo-xxl fc-grey-light my-4">
											Terminos y Condiciones de Uso del Sitio
										</p>
										<p className="titulo-lg fc-grey-light mb-4">
											Propiedad Intelectual e Industrial
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Los contenidos, marcas, logos, dibujos, documentación,
											programas informáticos o cualquier otro elemento
											susceptible de protección por la legislación de propiedad
											intelectual o industrial, que sean accesibles en el portal
											corresponden exclusivamente a la empresa o a sus legítimos
											titulares y quedan expresamente reservados todos los
											derechos sobre los mismos.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Queda expresamente prohibida la creación de enlaces de
											hipertexto (links) a cualquier elemento integrante de las
											páginas web del Portal sin la autorización de la empresa,
											siempre que no sean a una página web del Portal que no
											requiera identificación o autenticación para su acceso, o
											el mismo esté restringido.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											En cualquier caso, el portal se reserva todos los derechos
											sobre los contenidos, información datos y servicios que
											ostente sobre los mismos. El portal no concede ninguna
											licencia o autorización de uso al usuario sobre sus
											contenidos, datos o servicios, distinta de la que
											expresamente se detalle en las presentes condiciones
											generales de uso del portal.
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

export default TerminosPropiedadIndustrial;
