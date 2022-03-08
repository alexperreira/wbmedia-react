import React from 'react';
import Button from '../../UI/Button';
import Hello from '../UI/Hello';
import styles from './Families.module.css';
import classes from './AllPackages.module.css';
import { CouplesSliderData } from '../UI/Slider/SliderData';
import ImageSlider from '../UI/Slider/ImageSlider';

const Families = () => {
	return (
		<div className={`${styles.pageBG} ${classes.page}`}>
			<div className={`${styles.families} ${classes.packagesHero}`} />

			<div className={classes.container}>
				<Hello text={'Families'} />
				<div className={classes.package}>
					{/* <h3 className={classes.title}>Package 1</h3> */}
					<h2 className={classes.price}>$200</h2>
				</div>
				{/* <div className={classes.package}>
					<h3 className={classes.title}>Package 3</h3>
					<h2 className={classes.price}>$500.00</h2>
					<ul>
						<li>2 hour session</li>
						<li>100+ edited photos</li>
						<li>3 outfits</li>
						<li>As many locations as we can squeeze in!**</li>
						<li>Print release and online gallery</li>
					</ul>
				</div> */}
			</div>
			<div className={styles.banner}>
				<div className={classes.overlay}>
					<h4 className={classes.tagline}>Ready to book with me?</h4>
					<Button text='Inquire here' />
				</div>
			</div>
			<div>
				<ImageSlider slides={CouplesSliderData} />
			</div>
		</div>
	);
};

export default Families;
