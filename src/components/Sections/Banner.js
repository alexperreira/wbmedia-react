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
				<button>
					<Link to='faq'>Questions?</Link>
				</button>
			</div>
		</section>
	);
}

export default Banner;
