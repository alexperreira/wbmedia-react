import React, { Fragment } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './Portfolio.module.css';

function Portfolio() {
	const alignCenter = { display: 'flex', alignItems: 'center' };
	return (
		<section className={styles.portfolio}>
			<Parallax pages={3}>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={styles.portfolioItem1}
				></ParallaxLayer>
			</Parallax>
		</section>
	);
}

export default Portfolio;
