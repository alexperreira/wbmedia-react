import React from 'react';
import Button from '../UI/Button';
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
				<div
					className={classes.package}
					style={{ width: '100%', maxWidth: '600px' }}
				>
					<h2 className={classes.price} style={{ textAlign: 'center' }}>
						Packages range from $200 to $400. Please inquire and let me know the
						number of family members and ages.
					</h2>
				</div>
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
