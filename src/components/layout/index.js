// modulos
import { Link, useNavigate } from 'react-router-dom';

export function VinculosPpalNav() {
	return (
		<header>
			<Link to="/">
				{/* <img src={LogoTeam} alt="logo" className="header-img-logo" /> */}
			</Link>
			<section className="container-row-nowrap gap-2 ml-auto mr-32 mt-12">
				<article className="flex-auto mr-4">
					<Link to="/">
						<p className="navlink-lg fc-blue">Inicio</p>
					</Link>
				</article>
				{/* <article className="flex-auto mr-4">
					<Link to="/reclamos">
						<p className="navlink-lg fc-blue">Reclamos</p>
					</Link>
				</article>
				<article className="flex-auto mr-4">
					<Link to="/informacion">
						<p className="navlink-lg fc-blue">Informacion</p>
					</Link>
				</article>
				<article className="flex-auto mr-4">
					<Link to="/dudas">
						<p className="navlink-lg fc-blue">Dudas</p>
					</Link>
				</article> */}
				<article className="flex-auto">
					<Link to="/contacto">
						<p className="navlink-lg fc-blue">Contacto</p>
					</Link>
				</article>
			</section>
		</header>
	);
}

export function VinculosNav() {
	return (
		<section className="container-row-nowrap bg-gris-medio-oscuro py-1">
			<article className="flex-resto">
				<Link to="/">
					<p className="navlink-md fc-white mx-2 my-1">Inicio</p>
				</Link>
			</article>
			<article className="flex-resto">
				<span className="separador fc-white"></span>
			</article>
			<article className="flex-resto">
				<Link to="/contacto">
					<p className="navlink-md fc-white mx-2 my-1">Contacto</p>
				</Link>
			</article>
		</section>
	);
}

export function TerminosNav() {
	return (
		<div className="container-row-nowrap bg-gris-medio">
			<section>
				<label className="titulo-md fc-white">Terminos de Uso</label>
				<hr className="subrayado mt-4" />
				<article className="flex-auto mt-4">
					<Link to="/privacidad">
						<p className="navlink-md fc-white my-1">Privacidad</p>
					</Link>
					<Link to="/seguridad">
						<p className="navlink-md fc-white my-1">Seguridad</p>
					</Link>
					<Link to="/terminos">
						<p className="navlink-md fc-white my-1">Terminos y Condiciones</p>
					</Link>
				</article>
			</section>
		</div>
	);
}

export function VinculosTerminosNav() {
	let navigate = useNavigate();

	function handleTerminos(e) {
		navigate('/terminos');
	}

	function handlePrivacidad(e) {
		navigate('/privacidad');
	}

	function handleSeguridad(e) {
		navigate('/seguridad');
	}

	return (
		<section className="container-row-nowrap mt-1">
			<article className="flex-auto">
				<p className="navlink-sm fc-grey-light px-1" onClick={handleTerminos}>
					Terminos de Uso
				</p>
			</article>
			<article className="flex-auto">
				<p className="navlink-sm fc-grey-light px-1" onClick={handlePrivacidad}>
					Privacidad
				</p>
			</article>
			<article className="flex-auto">
				<p className="navlink-sm fc-grey-light px-1" onClick={handleSeguridad}>
					Seguridad Clave
				</p>
			</article>
		</section>
	);
}

export function PrivacidadNav() {
	return (
		<section className="container-row-nowrap ml-auto mr-12 mt-6">
			<article className="flex-auto">
				<p className="titulo-lg fc-white my-6">Privacidad y Confidencialidad</p>
				<hr className="my-4" />
				<Link to="/privacidad">
					<p className="navlink-md fc-white my-2">Introduccion</p>
				</Link>
				<Link to="/confidencionalidad">
					<p className="navlink-md fc-white my-2">Confidencialidad</p>
				</Link>
				<Link to="/privacidad2">
					<p className="navlink-md fc-white my-2">Privacidad</p>
				</Link>
			</article>
		</section>
	);
}

export function SeguridadClaveNav() {
	return (
		<section className="container-row-nowrap ml-auto mr-12 mt-6">
			<article className="flex-auto">
				<p className="titulo-lg fc-white my-6">
					Seguridad de Clave de Internet
				</p>
				<hr className="my-4" />
				<Link to="/privacidad">
					<p className="navlink-md fc-white my-2">Introduccion</p>
				</Link>
				<Link to="/compromiso">
					<p className="navlink-md fc-white my-2">Compromiso</p>
				</Link>
				<Link to="/resguardo">
					<p className="navlink-md fc-white my-2">Resguardo</p>
				</Link>
			</article>
		</section>
	);
}

export function TerminosUsoNav() {
	return (
		<section className="container-row-nowrap ml-auto mr-12 my-6">
			<article className="flex-auto">
				<p className="titulo-lg fc-white my-6">
					Terminos y Condiciones de uso del Sitio
				</p>
				<hr className="my-4" />
				<Link to="/terminosuso">
					<p className="navlink-md fc-white my-1">Introduccion</p>
				</Link>
				<Link to="/terminosaceptaciones">
					<p className="navlink-md fc-white my-1">
						Aceptacion de nuestros terminos
					</p>
				</Link>
				<Link to="/terminosconducta">
					<p className="navlink-md fc-white my-1">Codigo de Conducta</p>
				</Link>
				<Link to="/terminoscontratacion">
					<p className="navlink-md fc-white my-1">Contratacion de Servicios</p>
				</Link>
				<Link to="/terminosmonitoreo">
					<p className="navlink-md fc-white my-1">Derecho a Monitoreo</p>
				</Link>
				<Link to="/terminosderechos">
					<p className="navlink-md fc-white my-1">Derechos de Propiedad</p>
				</Link>
				<Link to="/terminosforos">
					<p className="navlink-md fc-white my-1">Foros Publicos</p>
				</Link>
				<Link to="/terminosinformacion">
					<p className="navlink-md fc-white my-1">
						Informacion Privada o Delicada
					</p>
				</Link>
				<Link to="/terminoslegislacion">
					<p className="navlink-md fc-white my-1">Legislacion Aplicable</p>
				</Link>
				<Link to="/terminoslicencia">
					<p className="navlink-md fc-white my-1">Licencia Limitada</p>
				</Link>
				<Link to="/terminoslimitacion">
					<p className="navlink-md fc-white my-1">
						Limitacion de Responsabilidad
					</p>
				</Link>
				<Link to="/terminoslicencia">
					<p className="navlink-md fc-white my-1">Licencia Limitada</p>
				</Link>
				<Link to="/terminosmarcas">
					<p className="navlink-md fc-white my-1">Marcas Comerciales</p>
				</Link>
				<Link to="/terminosmodificaciones">
					<p className="navlink-md fc-white my-1">Modificaciones del Sitio</p>
				</Link>
				<Link to="/terminosobligaciones">
					<p className="navlink-md fc-white my-1">Obligaciones del Usuario</p>
				</Link>
				<Link to="/terminosideas">
					<p className="navlink-md fc-white my-1">
						Politica de Ideas no Solicitadas
					</p>
				</Link>
				<Link to="/terminosprohibiciones">
					<p className="navlink-md fc-white my-1">Prohibiciones de Uso</p>
				</Link>
				<Link to="/terminospropiedad">
					<p className="navlink-md fc-white my-1">
						Propiedad Intelectual e Industrial
					</p>
				</Link>
				<Link to="/terminosgarantias">
					<p className="navlink-md fc-white my-1">Renuncia de Garantias</p>
				</Link>
				<Link to="/terminosresponsabilidad">
					<p className="navlink-md fc-white my-1">Responsabilidad del Portal</p>
				</Link>
				<Link to="/terminosterminos">
					<p className="navlink-md fc-white my-1">
						Termino del Servicio del Portal
					</p>
				</Link>
				<Link to="/terminosvinculos">
					<p className="navlink-md fc-white my-1">Vinculos a otros Sitios</p>
				</Link>
			</article>
		</section>
	);
}

export function RegistroApoderadosNav() {
	return (
		<section className="container-col-wrap ml-auto mr-12 my-6">
			<article className="flex-auto">
				<p className="titulo-lg fc-grey my-6">Registro de Apoderados de Mesa</p>
				<hr className="my-4" />
				<p className="py-3">
					<a class="navlink-md fc-grey" href="#introduccion">
						Introducción
					</a>
				</p>
				<p className="py-3">
					<a class="navlink-md fc-grey" href="#registro">
						Registro
					</a>
				</p>
				<p className="py-3 pl-4">
					<a class="navlink-sm fc-grey" href="#personales">
						Datos Personales
					</a>
				</p>
				<p className="py-3 pl-4">
					<a class="navlink-sm fc-grey" href="#contacto">
						Datos de Contacto
					</a>
				</p>
				<p className="py-3 pl-4">
					<a class="navlink-sm fc-grey" href="#local">
						Local de Votacion
					</a>
				</p>
				<p className="py-3">
					<a class="navlink-md fc-grey" href="#forma">
						Forma de Apoyar
					</a>
				</p>
				<p className="py-3 pl-4">
					<a class="navlink-sm fc-grey" href="#seleccion">
						Detalle de su Seleccion
					</a>
				</p>
			</article>
		</section>
	);
}
