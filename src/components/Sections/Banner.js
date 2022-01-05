import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
	return (
		<section className={styles.banner}>
			<div className={styles.imageDivider}>
				<h4>Let's go an adventure!</h4>
			</div>

			<div className={styles.colorDivider}>
				<h3>A photographer who cares</h3>
				<p>
					When you book your photoshoot with me, you are working with someone
					who truly cares about making you happy and creating something
					beautiful with you. Whether you book me for a wedding, family shoot,
					seniors, couples, or bourdoir, you'll get the support of a friend, the
					expertise of a professional, and images that accurately represent YOU!
				</p>
				<button>
					<Link to='faq'>Questions?</Link>
				</button>
			</div>
		</section>
	);
}

export default Banner;
