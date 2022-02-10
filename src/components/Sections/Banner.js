import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
	return (
		<section className={styles.banner}>
			<div className={styles.imageDivider} />

			<div className={styles.colorDivider}>
				<h3>Let's party!</h3>
				<p>
					It doesn't matter what you're here for, but you're guaranteed a fun
					time! And don't worry brides, I'll pack the snacks.
				</p>
				<button>
					<Link to='faq'>Questions?</Link>
				</button>
			</div>
		</section>
	);
}

export default Banner;
