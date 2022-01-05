// Import Dependencies
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './components/Pages/Home';
import Packages from './components/Pages/Packages';
import FAQ from './components/Pages/FAQ';

// Import Components
import Header from './components/Sections/Header';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='packages' element={<Packages />} />
				<Route path='faq' element={<FAQ />} />
			</Routes>
			{/* <Button onClick={() => {
				useNavigate(-1)
			}} /> */}
		</React.Fragment>
	);
}

export default App;
