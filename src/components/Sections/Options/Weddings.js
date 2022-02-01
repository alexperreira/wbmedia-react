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
			<div className={styles.addonsContainer}>
				<h3 className={styles.addonsTitle}>Add-Ons</h3>
				<hr className={styles.thin} />
				<h4 className={styles.addon}>Second Shooter</h4>
				<div className={styles.addonContainer}>
					<h5 className={styles.addonPrice}>$350</h5>
					<p className={styles.addonText}>
						I do require a second shooter for weddings that are bigger than 125
						people. I primarily focus my time on the Bride + Groom + wedding
						party and with more people than that, I don't get as many photos of
						guests. You want to remember every one who celebrated your love,
						&amp; my second shooter will help with that!
					</p>
				</div>
				<hr className={styles.thin} />
				<h4 className={styles.addon}>Polaroids</h4>
				<div className={styles.addonContainer}>
					<h5 className={styles.addonPrice}>$150</h5>
					<p className={styles.addonText}>
						Polaroids images that are JUST FOR YOU! of every part of the day.
						<br />
						<br />
						Some people have them for guests, but these are just for my Bride +
						Groom.
					</p>
				</div>
				<hr className={styles.thin} />
				<h4 className={styles.addon}>Boudoir</h4>
				<div className={styles.addonContainer}>
					<h5 className={styles.addonPrice}>$250</h5>
					<ul>
						<li className={styles.disclaimer}>
							*Airbnb/hotel fee not included*
						</li>
						<li className={styles.addonText}>Discounted rate for my brides!</li>
						<li className={styles.addonText}>
							I do not have a space. But I can offer the best Airnbs or hotels
							that I have worked at.{' '}
						</li>
						<li className={styles.disclaimer}>
							(It can be added to a secret invoice.)
						</li>
					</ul>
				</div>
				<hr className={styles.thin} />
				<div className={styles.addonContainer}>
					<p className={styles.addonText}>
						EVERY wedding is insanely different. These packages can be
						customized to meet your needs. So please feel free to ask if you're
						curious about changing something.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Weddings;
