import React from 'react';
import Button from '../../UI/Button';
import Footer from '../Footer';
import styles from './Weddings.module.css';
import classes from './AllPackages.module.css';

const Weddings = () => {
	return (
		<div className={`${classes.page} ${styles.pageBG}`}>
			<div className={`${styles.weddings} ${classes.packagesHero}`} />

			<div className={classes.container}>
				<div className={classes.package}>
					<h3 className={classes.title}>Package 1</h3>
					<h2 className={classes.price}>$1,700.00</h2>
					<ul>
						<li>6 hours of coverage</li>
						<li>350+ edited photos</li>
						<li>Wedding Day Timeline</li>
						<li>Day-Of Coordination</li>
						<li>
							Complimentary 1 hour engagement shoot, bridals, or first look
						</li>
						<li>Print release and online gallery</li>
					</ul>
				</div>
				<div className={classes.package}>
					<h3 className={classes.title}>Package 2</h3>
					<h2 className={classes.price}>$2,200.00</h2>
					<ul>
						<li>8 hours of coverage</li>
						<li>500+ edited photos</li>
						<li>Wedding Day Timeline</li>
						<li>Day-Of Coordination</li>
						<li>
							Complimentary 1 hour engagement shoot, bridals, or first look
						</li>
						<li>Print release and online gallery</li>
					</ul>
				</div>
				<div className={classes.package}>
					<h3 className={classes.title}>Package 3</h3>
					<h2 className={classes.price}>$3,500.00</h2>
					<ul>
						<li>10 hours of coverage</li>
						<li>Second shooter</li>
						<li>650+ edited photos</li>
						<li>Wedding Day Timeline</li>
						<li>Day-Of Coordination</li>
						<li>
							Complimentary 1 hour engagement shoot, bridals, or first look
						</li>
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
			<Footer />
		</div>
	);
};

export default Weddings;
