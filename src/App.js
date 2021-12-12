import './App.css';
import React from 'react';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';

function App() {
	return (
		<React.Fragment>
			<Header />;
			<Hero />
			<About />
		</React.Fragment>
	);
}

export default App;
