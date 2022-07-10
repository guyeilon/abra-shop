import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';

import GlobalStyles from './Styles/Global';
import { theme } from './App/theme';
import ProductsList from './pages/ProductsList';

const pathLinks = ['Best-Seller', 'Clothing', 'Home', 'Office', 'Sports'];

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<HashRouter>
				<Navbar pathLinks={pathLinks} />
				<Routes>
					{pathLinks.map((path, index) => {
						return <Route key={index} path={path} element={<ProductsList />} />;
					})}
				</Routes>
			</HashRouter>
		</ThemeProvider>
	);
}

export default App;
