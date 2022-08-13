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

	// function handleReclamos(e) {
	// 	e.preventDefault();
	// 	navigate('/reclamos');
	// }

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
				<span className="titulo-marca"></span>
				<span className="titulo-texto">Registro</span>
			</section>
			{/* <VinculosPpalNav /> */}

			<section className="opciones">
				<article className="flex-auto">
					<p className="navlink fc-white" onClick={handleInicio}>
						Inicio
					</p>
				</article>
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
