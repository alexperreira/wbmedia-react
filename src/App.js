// Import Dependencies
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './components/Pages/Home';
import Packages from './components/Pages/Packages';
import FAQ from './components/Pages/FAQ';
import PackageDetail from './components/Pages/PackageDetail';

// Import Components
import Header from './components/Sections/Header';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='packages' element={<Packages />}>
					<Route path='packages/:packageType' element={<PackageDetail />} />
				</Route>
				<Route path='faq' element={<FAQ />} />
			</Routes>
			{/* <Button onClick={() => {
				useNavigate(-1)
			}} /> */}
		</React.Fragment>
	);
}

export default App;
