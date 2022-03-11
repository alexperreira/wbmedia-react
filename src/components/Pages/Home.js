import React from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Banner from '../Sections/Banner';
// import Gramz from '../UI/Instagram/Gramz';
import InstaFeed from '../UI/Instagram/InstaFeed';

function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Banner />
			<InstaFeed />
			{/* <Gramz /> */}
		</div>
	);
}

export default Home;
