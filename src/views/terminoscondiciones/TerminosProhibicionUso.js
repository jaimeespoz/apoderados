// paginas
import Headings from '../home/Headings';
import { TerminosUsoNav, VinculosNav } from '../../components/layout';

const TerminosProhibicionUso = () => {
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

										<p className="titulo-lg fc-grey-light mb-4">
											Prohibiciones de Uso
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Cualquier distribución, publicación o explotación
											comercial o promocional del Sitio Web, o de cualquiera de
											los contenidos, códigos, datos o materiales en el Sitio
											Web, está estrictamente prohibido, a menos de que usted
											haya recibido el previo permiso expreso por escrito del
											personal autorizado de La Empresa o de algún otro poseedor
											de derechos aplicable.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											A no ser que este expresamente permitido en el presente
											contrato, usted no puede descargar, informar, exponer,
											publicar, copiar, reproducir, distribuir, transmitir,
											modificar, ejecutar, difundir, transferir, crear trabajos
											derivados de, vender o de cualquier otra manera explotar
											cualquiera de los contenidos, códigos, datos o materiales
											en o disponibles a través del Sitio Web.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted se obliga además a no alterar, editar, borrar,
											quitar, o de otra manera cambiar el significado o la
											apariencia de, o cambiar el propósito de, cualquiera de
											los contenidos, códigos, datos o materiales en o
											disponibles a través del Sitio Web, incluyendo, sin
											limitación, la alteración o retiro de cualquier marca
											comercial, marca registrada, logo, marca de servicios o
											cualquier otro contenido de propiedad o notificación de
											derechos de propiedad.
										</p>
										<p className="texto-sm fc-grey-light mt-3">
											Usted reconoce que no adquiere ningún derecho de propiedad
											al descargar algún material con derechos de autor de o a
											través del Sitio Web. Si usted hace otro uso del Sitio
											Web, o de los contenidos, códigos, datos o materiales que
											ahí se encuentren o que estén disponibles a través del
											Sitio Web, a no ser como se ha estipulado anteriormente,
											usted puede violar las leyes de derechos de autor y otras
											leyes de Chile y de otros países, y puede ser sujeto a
											responsabilidad legal por dicho uso no autorizado
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

export default TerminosProhibicionUso;
