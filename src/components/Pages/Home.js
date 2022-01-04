import React from 'react';
import HeaderMenu from '../Sections/HeaderMenu';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Banner from '../Sections/Banner';

function Home() {
	return (
		<div>
			<HeaderMenu />
			<Hero />
			<About />
			<Banner />
		</div>
	);
}

export default Home;
