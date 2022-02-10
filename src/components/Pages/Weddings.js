import React from 'react';
import Button from '../UI/Button';
import Footer from '../Sections/Footer';
import styles from './Weddings.module.css';
import classes from './AllPackages.module.css';

const Weddings = () => {
	return (
		<div className={`${classes.page} ${styles.pageBG}`}>
			<div className={`${styles.weddings} ${classes.packagesHero}`} />

			<div className={classes.container}>
				<div className={classes.package}>
					<h3 className={classes.title}>Package 1</h3>
					<h2 className={classes.price}>$1,700</h2>
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
					<h2 className={classes.price}>$2,200</h2>
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
					<h2 className={classes.price}>$3,500</h2>
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
			<div className={classes.addonsSectionContainer}>
				<h3 className={classes.addonsTitle}>Add-Ons</h3>
				<hr className={classes.thin} />
				<h4 className={classes.addon}>Second Shooter</h4>
				<div className={classes.addonContainer}>
					<h5 className={classes.addonPrice}>$350</h5>
					<p className={classes.addonText}>
						I do require a second shooter for weddings that are bigger than 125
						people. I primarily focus my time on the Bride + Groom + wedding
						party and with more people than that, I don't get as many photos of
						guests. You want to remember every one who celebrated your love,
						&amp; my second shooter will help with that!
					</p>
				</div>
				<hr className={classes.thin} />
				<h4 className={classes.addon}>Polaroids</h4>
				<div className={classes.addonContainer}>
					<h5 className={classes.addonPrice}>$150</h5>
					<p className={classes.addonText}>
						Polaroids images that are JUST FOR YOU! of every part of the day.
						<br />
						<br />
						Some people have them for guests, but these are just for my Bride +
						Groom.
					</p>
				</div>
				<hr className={classes.thin} />
				<h4 className={classes.addon}>Boudoir</h4>
				<div className={classes.addonContainer}>
					<h5 className={classes.addonPrice}>$250</h5>
					<p className={classes.addonText}>
						<span className={classes.disclaimer}>
							{' '}
							*Airbnb/hotel fee not included*
						</span>{' '}
						<br /> <br />
						Discounted rate for my brides! <br /> <br />
						I do not have a space, but I can offer the best Airbnbs or hotels
						that I have worked at. <br />
						<span className={classes.disclaimer}>
							(It can be added to a secret invoice.)
						</span>
					</p>
				</div>
				<hr className={classes.thin} />
				<div className={classes.addonContainer}>
					<p className={classes.addonText}>
						EVERY wedding is insanely different. These packages can be
						customized to meet your needs. So please feel free to ask if you're
						curious about changing something.
					</p>
				</div>
				<div className={classes.addonContainer}>
					<h2 className={classes.addonsTitle}>What's next?</h2>
					<hr className={classes.thin} />
					<h4 className={classes.addon}>How to Book</h4>
					<p className={classes.addonText}>
						Let me know what package you're wanting, date, and venue! <br /> We
						will finalize travel fee costs and other details before any sort of
						payment is made. After that, an invoice and contrawct will be sent
						to your email. As soon as that is paid and signed, a date will be
						set for engagements!
					</p>
					<hr className={classes.thin} />
					<h4 className={classes.addon}>Payment</h4>
					<p className={classes.addonText}>
						A $500 non-refundable deposit is required in order to secure your
						date. The remaining balance is due two weeks prior to your wedding
						date.
					</p>
					<hr className={classes.thin} />
					<h4 className={classes.addon}>Planning</h4>
					<p className={classes.addonText}>
						Some brides have wedding planners, and some brides use me to run the
						weddings! I am comfortable with either and will be as involved as
						you would like me to be. I always make a wedding day timeline so
						that family + bridal party knows what time to be where to keep
						everying running smoothly for the bride and groom. <br /> <br />
						Let me know if you would like an example!
					</p>
				</div>
			</div>
			<div className={classes.addonsSectionContainer}>
				<div className={classes.addonContainer}>
					<h3 className={classes.addonsTitle}>FAQs:</h3>
					<hr className={classes.thin} />

					<p className={classes.addonText}>
						{' '}
						Q: How do we reserve our wedding date?
						<br />
						<br />
						A: A $500 deposit &amp; signed contract is required in order to get
						your wedding on the calendar. The remainder of your balance is due
						two weeks prior to your wedding.
						<br />
						<br />
						Q: How many weddings have you done?
						<br />
						<br />
						A: I've been taking photos for over 4 years, and have about 15
						weddings that I have photographed by myself, or second shot at.
						<br />
						<br />
						Q: Will we get the print release to our photos after our wedding? Or
						do you do prints?
						<br />
						<br />
						A: In your contract you will get a full print release that will
						allow you to take your images to your preferred print store.
						<br />
						(Or Costco, Walmart, Shutterfly, etc.)
						<br />
						<br />
						Q: How many photographers will be there at our wedding?
						<br />
						<br />
						A: All of my wedding packages come with a single photographer, but a
						second shooter is required for a guest list of 125+.
					</p>
				</div>
			</div>
			<div className={classes.addonsSectionContainer}>
				<div className={classes.addonContainer}>
					<h3 className={classes.addonsTitle}>FAQs:</h3>
					<hr className={classes.thin} />
					<p className={classes.addonText}>
						Q: will you photoshop my images to hide any unwanted spots,
						wrinkles, etc?
						<br />
						<br />
						A: Minor edits will be made to all of your images, such as blemish
						removal and smoothing of skin. You're fabulous always though!
						<br />
						<br />
						Q: How many photos do you give back?
						<br />
						<br />
						A: Depends on the package! About 65-100 photos per hour. Ranging
						from 350-800 for final delivery.
						<br />
						<br />
						Q: What is your turn-around time?
						<br />
						<br />
						A: Weddings take 4-6 weeks for me to perfect!
						<br />
						<br />
						Q: Do you give out only edited images?
						<br />
						<br />
						A: Yes, yes, yes. I never give out RAW images. I hope that you've
						hired me based off of our connection + my style, but you will get
						all of the images that mean the most!
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Weddings;
