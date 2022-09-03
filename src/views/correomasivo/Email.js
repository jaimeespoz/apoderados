import Grid from '../../components/layout/Grid';
import Header from './elementos/Header';
import Title from './elementos/Title';
import Body from './elementos/Body';
import Weather from './elementos/Weather';
import Footer from './elementos/Footer';

import './inlined.css';

const style = {
	container: {
		backgroundColor: '#efefef',
		padding: '20px 0',
		fontFamily: 'sans-serif',
	},

	main: {
		maxWidth: '500px',
		width: '100%',
	},
};

function Email({ data }) {
	// alert('EMail ' + JSON.stringify(data));
	return (
		<>
			<center style={style.container}>
				<Grid style={style.main}>
					<Header />
					<Body>
						<Weather data={data} />
					</Body>
					{/* <Footer /> */}
				</Grid>
			</center>
		</>
	);
}

export default Email;
