import Grid from '../../../components/layout/Grid';

const style = {
	content: {
		backgroundColor: 'white',
		padding: '20px',
	},
};

function Body({ children }) {
	// alert('body ' + JSON.stringify(data));
	return (
		<Grid style={style.container}>
			<Grid.Cell style={style.content}>{children}</Grid.Cell>
		</Grid>
	);
}

export default Body;
