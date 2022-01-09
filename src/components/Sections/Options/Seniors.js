import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './Seniors.module.css';
import classes from './AllPackages.module.css';

const Seniors = () => {
	const alignCenter = {
		display: 'flex',
		alignItems: 'center',
		overflow: 'hidden',
	};

	const offsetDiv = { top: '100vh', left: '0' };

	return (
		<div className={classes.page}>
			<div className={`${styles.seniors} ${classes.packagesHero}`} />
			<Parallax pages={1} style={offsetDiv}>
				<ParallaxLayer
					offset={0}
					sticky={{ start: 0, end: 2 }}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: 'flex-end' }}
				>
					<img
						className={`${classes.image} ${classes.right}`}
						src='https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
						alt=''
					/>
				</ParallaxLayer>
				<ParallaxLayer
					sticky={{ start: 1, end: 2 }}
					style={{ ...alignCenter, justifyContent: 'flex-start' }}
				>
					<div className={classes.container}>
						<div className={`${classes.left} ${classes.package}`}>
							<h3 className={classes.title}>Package 1</h3>
							<h2 className={classes.price}>$250.00</h2>
							<ul>
								<li>1 hr session</li>
								<li>30-40 edited photos</li>
								<li>1 outfit</li>
								<li>1 location</li>
								<li>Print release and online gallery</li>
							</ul>
						</div>
						<div className={`${classes.package} ${classes.right}`}>
							<h3 className={classes.title}>Package 2</h3>
							<h2 className={classes.price}>$350.00</h2>
							<ul>
								<li>1 1/2 hour session</li>
								<li>50-60 edited photos</li>
								<li>2 outfits</li>
								<li>2 locations</li>
								<li>Print release and online gallery</li>
							</ul>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer
					sticky={{ start: 2, end: 3 }}
					style={{ ...alignCenter, justifyContent: 'flex-start' }}
				>
					<img
						src='https://images.unsplash.com/photo-1626478113249-f1d044037a67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
						alt=''
					/>
				</ParallaxLayer>
				<ParallaxLayer
					sticky={{ start: 3, end: 4 }}
					style={{ ...alignCenter, justifyContent: 'flex-end' }}
				></ParallaxLayer>
				<ParallaxLayer sticky={{}}></ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default Seniors;
