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
import ScrollToTop from './components/UI/ScrollToTop';

function App() {
	return (
		<React.Fragment>
			<Header />
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='packages' element={<Packages />}></Route>
					<Route path='faq' element={<FAQ />} />
				</Routes>
			</ScrollToTop>
			{/* <Button onClick={() => {
				useNavigate(-1)
			}} /> */}
		</React.Fragment>
	);
}

export default App;
