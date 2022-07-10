import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

import App from './App';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { apiSlice } from './features/api/apiSlice';

store.dispatch(apiSlice.endpoints.getProducts.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
