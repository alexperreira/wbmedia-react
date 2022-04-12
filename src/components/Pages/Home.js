import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Banner from '../Sections/Banner';
import IgFeed from '../UI/Instagramz/IgFeed';

function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Banner />
			<IgFeed />
		</div>
	);
}

export default Home;
