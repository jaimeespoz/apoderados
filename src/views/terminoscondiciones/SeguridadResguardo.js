// paginas
import Headings from '../home/Headings';
import { SeguridadClaveNav, VinculosNav } from '../../components/layout';

const SeguridadResguardo = () => {
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
											¿ Como resguardar mi Clave de Acceso ?
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Siempre ingresa escribiendo tú mismo la dirección
											www.xxxxxxx.cl en el navegador
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Evita conectarte desde cibercafés, locales públicos o
											equipos que desconozcas
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Fíjate que la URL de www.xxxxxxxxx.cl está bien escrita
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Nunca hagas click a link desde correos electrónicos, o
											páginas que te lleven a nuestros sitios, nunca te
											enviaremos un link en sus correos. A excepcion de
											creaciones y ciertas mantenciones de Usuarios.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Ocupa navegadores que acepten correctamente las directivas
											de seguridad de nuestro portal
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

export default SeguridadResguardo;
