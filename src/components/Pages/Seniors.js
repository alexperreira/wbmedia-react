import React from 'react';
import Button from '../UI/Button';
import Footer from '../Sections/Footer';
import styles from './Seniors.module.css';
import classes from './AllPackages.module.css';

const Seniors = () => {
	return (
		<div className={styles.pageBG}>
			<div className={`${styles.seniors} ${classes.packagesHero}`} />

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
				<div className={classes.addonsSectionContainer}>
					<h2 className={classes.addonTitle}>FAQs:</h2>
					<hr className={classes.thin} />
					<div className={classes.addonContainer}>
						<p className={classes.addonText}>
							Q: How many senior photos have you done?
							<br />
							<br />
							A: Seniors are my FAVORITE! I have been taking senior photos for
							about 3 years and have had 75+ seniors in front of my camera. Feel
							free to ask for previous work or check out my instagram!
							<hr className={classes.thin} />
							Q: Will we get the print release to our photos after your session?
							or do you do prints?
							<br />
							<br />
							A: I do not handle prints. :)
							<br />
							In your contract you will get a full print release that will allow
							you to take your images to your preferred print store.
							<br />
							(Or Costco, Walmart, Shutterfly, etc.)
							<br />
							You can also order them from the gallery that I deliver on, but I
							do not get any compensation from that!
							<hr className={classes.thin} />
							Q: How many people can I bring to this session?
							<br />
							<br />
							A: I do kindly ask that we keep groups smaller. It's already
							embarrassing getting in front of a camera, especially with someone
							you don't know! Parent or guardian is always welcome, I am
							comfortable taking the seniors myself, and if you need a
							bestfriend there to help hype you up, I'm all for it!
							<br />
							<b>NO</b> significant others!
						</p>
					</div>
				</div>
				<div className={classes.addonsSectionContainer}>
					<h2 className={classes.addonsTitle}>FAQs:</h2>
					<hr className={classes.thin} />
					<div className={classes.addonContainer}>
						<p className={classes.addonText}>
							Q: will you photoshop my images to hide any unwanted spots,
							wrinkles, etc?
							<br />
							<br />
							A: Minor edits will be made to all of your images, such as blemish
							removal and smoothing of skin.
							<br />
							You're fabulous always though!
							<hr className={classes.thin} />
							Q: What is your turn-around time?
							<br />
							<br />
							A: 3 weeks to perfect your shoot! :)
							<br />
							No need to text and ask for updates, I will let you know when they
							are ready, email &amp; text them to you!
							<hr className={classes.thin} />
							Q: Do you give out only edited images?
							<br />
							<br />
							A: I never EVER give out RAW images. I hope that you've hired me
							based off of our connection + my style, but you will get all of
							the images that are the most flattering, in focus, &amp; the best
							representation of you!
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Seniors;
