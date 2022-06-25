import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';

import GlobalStyles from './Styles/Global';
import { theme } from './App/theme';
import ProductsList from './pages/ProductsList';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router>
				<Navbar />
				<Routes>
					<Route path='/home' element={<ProductsList />} />
					<Route path='/bestSellers' element={<ProductsList />} />
					<Route path='/clothing' element={<ProductsList />} />
					<Route path='/office' element={<ProductsList />} />
					<Route path='/sports' element={<ProductsList />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
