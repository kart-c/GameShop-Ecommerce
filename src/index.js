import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, CartProvider, FilterProvider } from './Context';

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<CartProvider>
					<FilterProvider>
						<App />
					</FilterProvider>
				</CartProvider>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
