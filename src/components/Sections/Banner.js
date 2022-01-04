import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
	return (
		<section className='banner'>
			<div className='image-divider'>
				<h4>Let's go an adventure!</h4>
			</div>

			<div className='color-divider'>
				<h3>A photographer who cares</h3>
				<button>
					<Link to='faq'>Questions?</Link>
				</button>
			</div>
		</section>
	);
}

export default Banner;
