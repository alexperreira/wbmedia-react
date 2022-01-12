import React from 'react';
import Button from '../../UI/Button';
import styles from './Families.module.css';
import classes from './AllPackages.module.css';

const Families = () => {
	return (
		<div className={`${classes.page} ${styles.pageBG}`}>
			<div className={`${styles.families} ${classes.packagesHero}`} />

			<div className={classes.container}>
				<div className={classes.package}>
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
				<div className={classes.package}>
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
				<div className={classes.package}>
					<h3 className={classes.title}>Package 3</h3>
					<h2 className={classes.price}>$500.00</h2>
					<ul>
						<li>2 hour session</li>
						<li>100+ edited photos</li>
						<li>3 outfits</li>
						<li>As many locations as we can squeeze in!**</li>
						<li>Print release and online gallery</li>
					</ul>
				</div>
			</div>
			<div className={classes.banner}>
				<div className={classes.overlay}>
					<h4 className={classes.tagline}>Ready to book with me?</h4>
					<Button text='Inquire here' />
				</div>
			</div>
		</div>
	);
};

export default Families;
