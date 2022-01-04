// Import Dependencies
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './components/Pages/Home';
import Packages from './components/Pages/Packages';
import FAQ from './components/Pages/FAQ';

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='packages' element={<Packages />} />
				<Route path='faq' element={<FAQ />} />
				<Route
					path='/inquire'
					component={() => {
						window.location.href =
							'https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c';
						return null;
					}}
				/>
			</Routes>
			<Home />
		</React.Fragment>
	);
}

export default App;
