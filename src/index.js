// modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// paginas
import { Rutas } from './components/routes';

// css
import './index.css';
import '../src/components/styles/Styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Rutas />
		</BrowserRouter>
	</React.StrictMode>
);
