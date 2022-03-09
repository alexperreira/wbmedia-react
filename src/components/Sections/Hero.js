import React from 'react';
import { Link } from 'react-scroll';
import scrollButton from '../../assets/graphics/camera-icon-2.png';
// import About from './About';
import styles from './Hero.module.css';

const Hero = () => {
	// const aboutEl = document.getElementById('about');
	// const scrollTo = aboutEl.scrollIntoView({ behavior: 'smooth' });
	// const viewPortHeight = window.innerHeight;
	// const scrollDist = (200 * viewPortHeight) / 100;
	// const scrollTo = window.scrollY(scrollDist);

	return (
		<React.Fragment>
			<section className={styles.hero}>
				<div className={`${styles.container} ${styles.containerSolid}`}>
					<div className={styles.titleWrapper}>
						<h5>whitney bilbao</h5>
						<h1>photography</h1>
					</div>
					<Link
						style={{ cursor: 'pointer' }}
						to='#about'
						spy={true}
						smooth={true}
						offset={-200}
						duration={5000}
					>
						<img
							// onClick={scrollTo}
							src={scrollButton}
							className={styles.scrollButton}
							alt=''
						/>
					</Link>
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
