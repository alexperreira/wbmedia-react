// Import Dependencies
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Pages
import Home from './components/Pages/Home';
// import Packages from './components/Pages/Packages';
import FAQ from './components/Pages/FAQ';

// Import Components
import Navbar from './components/Sections/Navbar';
import Footer from './components/Sections/Footer';
import ScrollToTop from './components/UI/ScrollToTop';
import Seniors from './components/Pages/Seniors';
import Weddings from './components/Pages/Weddings';
import Couples from './components/Pages/Couples';
import Families from './components/Pages/Families';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/packages/seniors' element={<Seniors />} />
					<Route path='/packages/weddings' element={<Weddings />} />
					<Route path='/packages/couples' element={<Couples />} />
					<Route path='/packages/families' element={<Families />} />
					<Route path='faq' element={<FAQ />} />
				</Routes>
			</ScrollToTop>
			<Footer />
			{/* <Button onClick={() => {
				useNavigate(-1)
			}} /> */}
		</React.Fragment>
	);
}

export default App;
