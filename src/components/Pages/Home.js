import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Banner from '../Sections/Banner';
import InstaFeed from '../UI/Instagram/InstaFeed';

function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Banner />
			<InstaFeed />
		</div>
	);
}

export default Home;
