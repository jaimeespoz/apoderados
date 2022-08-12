// imagenes
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import LogoTeam from '../../components/assets/images/LogoTeamPatriota.jpg';

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
			<Link to="/">
				{/* <img src={LogoTeam} alt="logo" className="header-img-logo" /> */}
			</Link>
			<section className="container-row-nowrap gap-2 ml-auto mr-32 mt-12">
				<article className="flex-auto">
					<p className="navlink-lg fc-blue" onClick={handleInicio}>
						Inicio
					</p>
				</article>
				<article className="flex-auto">
					<p className="navlink-lg fc-blue" onClick={handleContacto}>
						Contacto
					</p>
				</article>
			</section>
		</header>
	);
}

export default Headings;
