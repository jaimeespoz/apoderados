import format from 'date-fns/format';
import Grid from '../../../components/layout/Grid';
//import Body from './Body';
import Img from './Img';

const style = {
	container: {
		color: '#333',
	},

	todayContainer: {
		width: 'auto',
		margin: '0 auto',
	},

	todayBody: {
		marginLeft: '20px',
	},

	todayName: {
		fontSize: '0.80rem',
		// fontWeight: 'bold',
		margin: 0,
		padding: '0px 18px 0px 12px',
	},

	todayTemp: {
		fontSize: '14px',
		margin: 0,
		color: '#8a8a8a',
		lineHeight: '1.5',
	},

	title: {
		fontSize: '0.90rem',
		margin: '20px 0 10px 0',
		textAlign: 'center',
	},

	forecastContainer: {
		margin: '0 auto',
		width: 'auto',
	},

	weatherContainer: {
		marginBottom: '10px',
		width: 'auto',
	},

	weatherIcon: {
		width: '32px',
		height: '32px',
		marginRight: '20px',
	},

	weatherBody: {
		maxWidth: '280px',
	},

	weatherDate: {
		fontSize: '14px',
		fontWeight: 'bold',
		margin: 0,
	},

	weatherName: {
		fontSize: '18px',
		margin: '3px 0 2px 0',
	},

	weatherTemp: {
		fontSize: '12px',
		color: '#8a8a8a',
		lineHeight: '1.5',
		margin: 0,
	},
};

function Weather({ data }) {
	// The first element is today's date
	const [today, ...forecast] = data;
	// alert('weather ' + JSON.stringify(data));

	return (
		<>
			<Grid style={style.container}>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p style={style.todayName}>Estimado(a)</p>
					</Grid.Cell>
				</Grid.Row>
			</Grid>
			<Grid style={style.container}>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<span style={style.todayName}>{today.NOMBRES.trim()}</span>
						<span style={style.todayName}>{today.APELLIDO_PATERNO.trim()}</span>
						<span style={style.todayName}>{today.APELLIDO_MATERNO.trim()}</span>
					</Grid.Cell>
				</Grid.Row>
			</Grid>
			<Grid style={style.container}>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<span style={style.todayName}>Presente</span>
					</Grid.Cell>
				</Grid.Row>
			</Grid>
			<Grid style={style.container}>
				<h2 style={style.title}></h2>
				<h2 style={style.title}></h2>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<span style={style.todayName}>De nuestra consideracion:</span>
					</Grid.Cell>
				</Grid.Row>
			</Grid>
			<Grid style={style.container}>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p className="texto-sm" style={style.todayName}>
							A traves del presente queremos informarle que estamos abocados a
							la tarea de reunir APODERADOS DE MESA, para resguardar los votos
							de nuestra opcion RECHAZO en el proximo Plebicito Constitucional,
							que se efectuara este domingo 4 de Septiembre del presente.
						</p>
					</Grid.Cell>
				</Grid.Row>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<h2 style={style.title}></h2>
						<p className="texto-sm" style={style.todayName}>
							Contamos con la siguiente informacion de su Local de Votacion:
						</p>
						<h2 style={style.title}></h2>
						<div className="row mx-6">
							<div className="col-12">
								<div className="row">
									<div className="col-3">
										<span className="style.title texto-sm fc-blue">Region</span>
									</div>
									<div className="col-9">
										<span className="style.title texto-sm fw-bold fc-blue">
											{today.DESC_REGION_VOTA}
										</span>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-3">
										<span className="style.title texto-sm fc-blue">Comuna</span>
									</div>
									<div className="col-9">
										<span className="style.title texto-sm fw-bold fc-blue">
											{today.DESC_COMUNA_VOTA}
										</span>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-3">
										<span className="style.title texto-sm fc-blue">Local</span>
									</div>
									<div className="col-9">
										<span className="style.title texto-sm fw-bold fc-blue">
											{today.DESC_LOCAL_VOTA}
										</span>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="row">
									<div className="col-3">
										<span className="style.title texto-sm fc-blue">Mesa</span>
									</div>
									<div className="col-9">
										<span className="style.title texto-sm fw-bold fc-blue">
											{today.MESA_VOTA}
										</span>
									</div>
								</div>
							</div>
						</div>
						<h2 style={style.title}></h2>
					</Grid.Cell>
				</Grid.Row>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p className="texto-sm" style={style.todayName}>
							Disponemos de esta informacion, que es de caracter publica, en
							atencion a que (1) Usted se registro recientemente a traves de
							nuestro portal, o (2) Se ofrecio como Apoderado de Mesa para la
							1era Vuelta Presidencial pasada, o (3)Se ofrecio como Apoderado de
							Mesa para la 2da Vuelta Presidencial pasada la tarea de reunir
							APODERADOS.
						</p>
					</Grid.Cell>
				</Grid.Row>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p className="texto-sm" style={style.todayName}>
							Mucho le agracederemos a usted seleccione una de las siguientes
							alternativas, a efectos de registrar su decision para este tan
							importante evento para nuestra querida Patria.
						</p>
						<h2 style={style.title}></h2>
						<p className="texto-sm fc-blue pl-8">
							(a) Confirma su participacion como Apoderado de Mesa
						</p>
						<h2 style={style.title}></h2>
						<p className="texto-sm fc-blue pl-8">
							(b) Ya esta registrado como Apoderado de Mesa
						</p>
						<h2 style={style.title}></h2>
						<p className="texto-sm fc-blue pl-8">
							(c) Esta vez no podre participar como Apoderado de Mesa
						</p>
						<h2 style={style.title}></h2>
						<p className="texto-sm fc-blue pl-8">
							(d) Solicito dar de baja de este Registro de Apoderados
						</p>
					</Grid.Cell>
				</Grid.Row>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p className="texto-sm" style={style.todayName}>
							En caso que esta comunicacion le haya generado alguna molestia o
							inconveniente, rogamos disculparnos.
						</p>
					</Grid.Cell>
				</Grid.Row>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p className="texto-sm" style={style.todayName}>
							Atentamente,
						</p>
					</Grid.Cell>
				</Grid.Row>
				<h2 style={style.title}></h2>
				<h2 style={style.title}></h2>
				<h2 style={style.title}></h2>
				<Grid.Row>
					<Grid.Cell>
						<p className="texto-sm" style={style.todayName}>
							Francisco De La Diestra
						</p>
						<p className="texto-sm" style={style.todayName}>
							Equipo Team Patriota
						</p>
					</Grid.Cell>
				</Grid.Row>
			</Grid>
		</>
	);
}

export default Weather;
