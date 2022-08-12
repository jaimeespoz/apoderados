// modulos
import { useNavigate } from 'react-router-dom';

// paginas
import Footer from './Footer';

//
import mountainImage from '../../components/assets/images/Fondo.jpg';
// import LogoTeam from '../../components/assets/images/LogoTransparente.png';

// css
import '../../components/styles/Styles.css';

function Home() {
	let navigate = useNavigate();

	const backgroundImageStyle = {
		backgroundImage: `url("${mountainImage}")`,
		backgroundSize: 'cover',
	};

	function handleClick() {
		navigate('/registroapoderados');
	}

	return (
		<>
			<main>
				<div className=" text-white " style={backgroundImageStyle}>
					<div className="bg-gradient-to-r from-black px-8 py-16">
						<div className=" max-w-xl grid grid-cols-1 gap-8">
							<div className="w-12">
								{/* <img src={LogoTeam} alt="" className="logo" /> */}
							</div>
							<h2 className="text-xl uppercase font-bold">
								Plebiscito 4 de Septiembre del 2022
							</h2>
							<h1 className="text-6xl font-bold">
								Auditoria al Proceso de Votacion
							</h1>
							<p className="text-lg">Ayudanos -solo- el dia de la votacion</p>
							<p className="text-lg">
								Queremos tener el registro e imagenes de la totalidad de los
								locales de votacion de nuestro pais
							</p>
							<p className="text-lg">
								10 minutos de tu tiempo, que cambiaran la historia de Chile
							</p>
							<button
								className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48"
								onClick={handleClick}
							>
								Ingresar
							</button>
						</div>
					</div>
				</div>
				<div className="container-row my-6">
					<section className="container-row jc-center">
						<article className="flex-auto">
							<p className="titulo-xxl fc-grey my-8">
								Juntos evitemos un Fraude Electoral
							</p>
						</article>
					</section>
					<section className="container-row jc-center gap-12">
						<div className="flex-auto wd-40">
							<article className="flex-auto bg-amber-100 py-10 px-10 bd-1">
								<p className="titulo-lg fc-grey my-3">
									Quienes pueden participar
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Cualquier persona que sea Patriota y sienta que Chile es de
									todos los chilenos
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Solo necesitas un telefono inteligente (SmartPhone) y sepas
									sacar una fotografia con el
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Puedes ser chileno o extranjero, menor o mayor de edad,
									votante o no, puedes ser o no ser Apoderado de Mesa. Solo
									necesitamos de su buena voluntad y disposicion
								</p>
								<p className="text-sm fc-secondaryColor mt-6">
									<b>RECUERDE:</b>
								</p>
								<p className="text-sm fc-secondaryColor mt-3">
									Es <b>PUBLICO</b> el acceso a los lugares de votacion de todo
									el pais
								</p>
							</article>
						</div>
						<div className="flex-auto wd-40">
							<article className="flex-auto bg-sky-200 py-10 px-10 bd-1">
								<p className="titulo-lg fc-grey my-3">
									Que necesitamos que usted realice
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									El dia de la votacion ( proximo 4 de Septiembre) basta que
									usted:
								</p>
								<ul className="ul-circle pl-3 fc-grey-light ml-4 mt-2">
									<li>
										<p className="texto-sm fc-grey-light mt-3">
											Se acerque al Acta de Votacion de una Mesa cualquiera
										</p>
									</li>
									<li>
										<p className="texto-sm fc-grey-light mt-3">
											Le solicitaremos ingresar en nuestra Aplicacion, lo
											siguiente
										</p>
										<ul className="ul-circle pl-3 fc-grey-light ml-4">
											<li>
												<p className="texto-sm fc-grey-light mt-2">
													Numero de Votos del Apruebo
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-1">
													Numero de Votos del Rechazo
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-1">
													Numero de Votos en Blanco
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-1">
													Numero de Votos Nulos
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-1">
													Total de Votos de la Mesa
												</p>
											</li>
											<li>
												<p className="texto-sm fc-grey-light mt-1">
													Total de Votos de la Mesa
												</p>
											</li>
										</ul>
									</li>
									<li>
										<p className="texto-md fc-grey-light mt-4">
											Finalmente, necesitamos tambien envie una fotografia de
											dicha Acta
										</p>
									</li>
								</ul>
								<p className="text-sm fc-secondaryColor mt-6">
									<b>RECUERDE:</b>
								</p>
								<p className="text-sm fc-secondaryColor mt-3">
									Esta Acta es <b>PUBLICA</b> y <b>DEBE</b> quedar disponible
									para ser exhibida a cualquier persona
								</p>
							</article>
						</div>

						<div className="flex-auto wd-40">
							<article className="flex-auto bg-rose-200 py-10 px-10 bd-1">
								<p className="titulo-lg fc-grey my-3">
									Cuente con nuestro Respaldo
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Las pruebas que hemos realizado nos confirman que somos
									capaces de procesar{' '}
									<b>
										mas de 1.000.000 de imagenes e ingresos de informacion
										(simultaneos)
									</b>{' '}
									en apenas <b>20 minutos</b>
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Nuestros servidores de respaldo, cuentan con una capacidad de
									procesamiento algo inferior a la anterior
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Hemos tomado todas las medidas ante posibles hacker's,
									mediante el uso de servidores a lo largo y ancho de todo el
									planeta y con resguardos de ultima generacion
								</p>
							</article>
						</div>

						<div className="flex-auto wd-40">
							<article className="flex-auto bg-lime-200 py-10 px-10 bd-1">
								<p className="titulo-lg fc-grey my-3">Que pretendemos</p>
								<p className="texto-sm fc-grey-light mt-3">
									Si usted <b>nos ayuda</b> y logramos{' '}
									<b>cubrir todo el pais</b>, estaremos en condiciones de:
								</p>
								<ul className="ul-circle pl-3 fc-grey-light ml-4">
									<li>
										<p className="texto-sm fc-grey-light mt-3">
											Entregar Resultados Parciales y Finales ANTES que el
											SERVEL
										</p>
									</li>
									<li>
										<p className="texto-sm fc-grey-light mt-3">
											Los Resultados estaran en linea (on-line) en todo momento,
											a traves de la pagina Web que les informaremos
											oportunamente
										</p>
									</li>
									<li>
										<p className="texto-sm fc-grey-light mt-3">
											Disponer de informacion de las Mesas -hasta ahora vedada-
											en caso que se requieran realizar acciones posteriores,
											sean estas de cualquier indole
										</p>
									</li>
								</ul>
							</article>
						</div>

						<div className="flex-auto wd-40">
							<article className="flex-auto bg-teal-200 py-10 px-10 bd-1">
								<p className="titulo-lg fc-grey my-3">
									Que pasa si somos muchos
								</p>
								<p className="texto-md fc-grey-light">Ojala sea asi.</p>
								<p className="texto-sm fc-grey-light mt-3">
									Mas que un Problema, para nosotros es una Ventaja
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Tenemos la capacidad de recibir varias veces la informacion de
									una MISMA MESA
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Lo anterior nos permite lograr una mayor seguridad en nuestros
									registros
								</p>
								<p className="texto-sm fc-grey-light mt-3">
									Ojala ese dia existan dos, tres, cinco, diez Patriotas
									enviandonos informacion de CADA MESA
								</p>
							</article>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Home;
