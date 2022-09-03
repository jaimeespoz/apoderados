import Grid from '../../../components/layout/Grid';
import ladiestra from '../../../components/assets/icons/favicon.ico';
import teampatriota from '../../../components/assets/icons/LogoTeam.png';
import Img from './Img';

const style = {
	header: {
		margin: '10px auto 20px auto',
		width: 'auto',
	},

	img: {
		height: '35px',
	},
};

function Header() {
	return (
		<>
			<Grid style={style.header}>
				<div className="container">
					<div className="row">
						<div className="col-5">
							<div className="row">
								<div className="col-4">
									<Img style={style.img} src={ladiestra} alt="logo" />
								</div>
								<div className="col-8">
									<p className="titulo fc-black">La Diestra</p>
								</div>
							</div>
						</div>
						<div className="col-5 offset-2">
							<div className="row">
								<div className="col-4">
									<Img style={style.img} src={teampatriota} alt="logo" />
								</div>
								<div className="col-8">
									<p className="titulo fc-black">Team Patriota</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-12">
							<p className="titulo-xxl fc-blue fw-bold my-3">
								Apoderados x el Rechazo
							</p>
						</div>
					</div>
				</div>
			</Grid>
		</>
	);
}

export default Header;
