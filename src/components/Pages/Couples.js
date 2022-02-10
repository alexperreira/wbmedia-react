import React from 'react';
import Button from '../UI/Button';
import Footer from '../Sections/Footer';
import styles from './Couples.module.css';
import classes from './AllPackages.module.css';

const Couples = () => {
	return (
		<div className={`${classes.page} ${styles.pageBG}`}>
			<div className={`${styles.couples} ${classes.packagesHero}`} />

			<div className={classes.container}>
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
			<div
				className={classes.addonsSectionContainer}
				style={{ backgroundColor: '#fff' }}
			>
				<h2 className={classes.addonsTitle}>I want to book!</h2>
				<h2
					className={classes.title}
					style={{ fontSize: '10rem', marginTop: '-10rem' }}
				>
					now what?
				</h2>
				<div className={classes.addonContainer}>
					<p className={classes.addonText}>
						Let me know what package you're wanting, a good email, and an ideal
						date!
						<br />
						<br />
						An invoice and contract will then be sent to your email.
						<br />
						<br />
						You have 48 hours to pay your deposit before that date is offered to
						other clients.
						<br />
						<br />
						As soon as the $75 non-refundable deposit is paid and contract is
						signed, we will set up a Facetime or phone call to chat and plan
						your session!
						<br />
						During this phone call, I'll ask about your interests, what styles
						you're into, ideal locations, etc.
						<br />
						If you have a Pinterest board made up of some of your favorite
						photos, feel free to send over the link!
					</p>
				</div>
			</div>
			<div className={classes.addonsSectionContainer}>
				<h2 className={classes.addonsTitle}>FAQs:</h2>
				<hr className={classes.thin} />
				<div className={classes.addonContainer}>
					<p className={classes.addonText}>
						Q: How to make a payment?
						<br />
						<br />
						A: All deposits are to be paid through an online portal called
						Honeybook. The link will be in your email. It's possible to set up
						auto-payments after the deposit is made, or pay with cash or check.
						<br />
						<b>I do not accept Venmo.</b>
						<br />
						All final payments are due the day of the photoshoot.
						<hr className={classes.thin} />
						<br />
						Q: What's the cancellation policy?
						<br />
						<br />
						A: Cancellations and reschedules must be made via email or phone{' '}
						<b>at least 48 hours</b> prior to your session.
						<br />
						I understand that life happens!
						<br />
						But I do get booked up and will try my best to fit you in my
						schedule.
						<br />
						I do not work with people htat reschedule more than twice.
						<br />
						<br />
						<b>All</b> deposits are non-refundable.
					</p>
				</div>
			</div>
			<div className={classes.addonsSectionContainer}>
				<div className={classes.addonContainer}>
					<h3 className={classes.addonsTitle}>FAQs:</h3>
					<hr className={classes.thin} />
					<p className={classes.addonText}>
						Q: What the heck do we wear?!
						<br />
						<br />
						A: Always, always wear something that makes you feel comfortable. We
						will be sitting, lifting, and frolicking! If you need any help, I
						can always help you put together a vision board with specific color
						pallets depending on location + time of year.
						<hr className={classes.thin} />
						Q: will you photoshop my images to hide any unwanted spots,
						wrinkles, etc?
						<br />
						<br />
						A: Minor edits will be made to all of your images, such as blemish
						removal and smoothing of skin. You're fabulous always though!
						<br />
						<br />
						Q: What is your turn-around time?
						<br />
						<br />
						A: 3 weeks to perfect your shoot! :)
						<br />
						No need to text and ask for updates, I will lwet you know when they
						are ready, email &amp; text them to you!
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

export default Couples;
