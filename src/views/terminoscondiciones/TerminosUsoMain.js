// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosUsoMain = () => {
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
										<p className="titulo-xxl fc-grey-light my-4">
											Terminos y Condiciones de Uso del Sitio
										</p>
										<p className="titulo-lg fc-grey-light mb-4">Introduccion</p>
										<p className="texto-sm fc-grey-light mt-3">
											Las presentes Condiciones Generales de Uso de la Página
											Web, o del Sitio Web o del Portal Web, regulan los
											términos y condiciones de acceso y uso de{' '}
											<strong>www.xxxxxxxx.cl</strong>, propiedad de{' '}
											<strong>La Empresa</strong>, con domicilio en xxx Oficina
											xxx, Comuna de xxx - Chile, en adelante, «la Empresa», que
											el usuario del Portal deberá de leer y aceptar para usar
											todos los servicios e información que se facilitan desde
											el portal.
										</p>{' '}
										<p className="texto-sm fc-grey-light mt-3">
											El mero acceso y/o utilización del Portal, de todo o de
											parte de sus contenidos y/o servicios significa la plena
											aceptación de las presentes Condiciones Generales de Uso.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											En caso que usted sea un Usuario Registrado por nosotros,
											cada vez que se conecte al Portal, ademas de su Usuario y
											Clave de Acceso, se le solicitara seleccione
											afirmativamente que ha leido las Condiciones Generales de
											Uso, descritas en esta pagina y que las acepta en su
											totalidad. De esta forma, es su responsabilidad cumplir
											con ellas, observarlas como tambien conocer las
											limitaciones y restricciones descritas al respecto del uso
											de este Portal
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

export default TerminosUsoMain;
