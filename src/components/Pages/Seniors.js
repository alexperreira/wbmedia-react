import React from 'react';
import Button from '../UI/Button';
import Hello from '../UI/Hello';
import styles from './Seniors.module.css';
import classes from './AllPackages.module.css';
import ImageSlider from '../UI/Slider/ImageSlider';
import { SeniorsSliderData } from '../UI/Slider/SliderData';
import InstaFeed from '../UI/Instagram/InstaFeed';

const Seniors = () => {
	return (
		<div className={styles.pageBG}>
			<div className={`${styles.seniors} ${classes.packagesHero}`} />

			<div className={classes.container}>
				<Hello text={'Seniors'} />
				<div className={classes.package}>
					<h3 className={classes.title}>Package 1</h3>
					<h2 className={classes.price}>$250</h2>
					<ul>
						<li>1 hr session</li>
						<li>30-40 edited photos</li>
						<li>1 outfit</li>
						<li>1 location</li>
						<li>Print release and online gallery</li>
					</ul>
				</div>
				<div className={classes.package}>
					<h3 className={classes.title}>Package 2</h3>
					<h2 className={classes.price}>$350</h2>
					<ul>
						<li>1 1/2 hour session</li>
						<li>50-60 edited photos</li>
						<li>2 outfits</li>
						<li>2 locations</li>
						<li>Print release and online gallery</li>
					</ul>
				</div>
				<div className={classes.package}>
					<h3 className={classes.title}>Package 3</h3>
					<h2 className={classes.price}>$500</h2>
					<ul>
						<li>2 hour session</li>
						<li>100+ edited photos</li>
						<li>3 outfits</li>
						<li>As many locations as we can squeeze in!**</li>
						<li>Print release and online gallery</li>
					</ul>
				</div>
			</div>
			<div className={styles.banner}>
				<div className={classes.overlay}>
					<h4 className={classes.tagline}>Ready to book with me?</h4>
					<Button text='Inquire here' />
				</div>
			</div>
			<InstaFeed />
			<div>
				<ImageSlider slides={SeniorsSliderData} />
			</div>
		</div>
	);
};

export default Seniors;
