// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosLegislacionAplicable = () => {
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
											Legislacion aplicable, jurisdicción competente y
											notificaciones
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Las presentes condiciones se rigen y se interpretan de
											acuerdo con las Leyes de Chile. Para cualquier reclamación
											serán competentes los juzgados y tribunales de la ciudad
											de Santiago.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Todas las notificaciones, requerimientos, peticiones y
											otras comunicaciones que el Usuario desee efectuar a la
											Empresa titular del Portal deberán realizarse por escrito
											y se entenderá que han sido correctamente realizadas
											cuando hayan sido recibidas en la siguiente dirección
											(indicar dirección de correo en la que se desean recibir
											las notificaciones).
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

export default TerminosLegislacionAplicable;
