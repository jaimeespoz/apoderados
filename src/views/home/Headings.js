// imagenes
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { VinculosPpalNav } from '../../components/layout';
// import Logo from '../../components/assets/icons/bandera.png';

function Headings() {
	let navigate = useNavigate();

	function handleInicio(e) {
		e.preventDefault();
		navigate('/');
	}

	function handleNomina(e) {
		e.preventDefault();
		navigate('/nomina');
	}

	// function handleInformacion(e) {
	// 	e.preventDefault();
	// 	navigate('/informacion');
	// }

	// function handleDudas(e) {
	// 	e.preventDefault();
	// 	navigate('/dudas');
	// }

	function handleContacto(e) {
		e.preventDefault();
		navigate('/contacto');
	}

	return (
		<header>
			<section className="huincha"></section>
			<section className="titulo">
				<Link to="/">
					<img src="" alt="logo" />
				</Link>
			</section>
			<section className="titulo">
				<span className="titulo-marca"></span>
			</section>
			<section className="titulo">
				<span className="titulo-texto">Registro</span>
			</section>
			{/* <VinculosPpalNav /> */}

			<section className="opciones">
				<article className="flex-auto">
					<p className="navlink fc-white" onClick={handleInicio}>
						Inicio
					</p>
				</article>
				{/* <article className="flex-auto">
					<p className="navlink fc-white" onClick={handleNomina}>
						Nomina
					</p>
				</article> */}
				<article className="flex-auto">
					<p className="navlink fc-white" onClick={handleContacto}>
						Contacto
					</p>
				</article>
			</section>
		</header>
	);
}

export default Headings;
