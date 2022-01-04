import React from 'react';
// import scrollButton from '../../assets/graphics/camera-icon-2.png';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<React.Fragment>
			<section className={styles.hero}>
				<div className={`${styles.container} ${styles.containerSolid}`}>
					<div className={styles.titleWrapper}>
						<h5>whitney bilbao</h5>
						<h1>photography</h1>
					</div>
				</div>

				<div className={`${styles.container} ${styles.containerImage}`}>
					<div className={styles.titleWrapper}>
						<h5>whitney bilbao</h5>
						<h1>Photography</h1>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Hero;
