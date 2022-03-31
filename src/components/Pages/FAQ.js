import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
import styles from './FAQ.module.css';

const FAQ = () => {
	return (
		<div className={styles.container}>
			<h1>frequently asked questions</h1>
			<div className={styles.group}>
				<h2>Q: I want to book, now what?</h2>
				<p>A: Well then, let's get this party STARTED!</p>
				<p>
					But in all seriousness, please head on over to my 'inquiry' button!
				</p>

				<p>
					There, you'll fill out all of your contact information and it will
					send me all of your info and best way to contact you. I will email you
					my prices + guide, and we can chat about dates!
				</p>

				<p>
					Unless it's posted on my instagram that I am on vacation - I will
					reply to your inquiry within 48 hours!
				</p>
				<p>
					If by chance that doesn't work or I haven't replied, always feel free
					to email whitneybilbaophoto@gmail.com! :)
				</p>
			</div>
			<div className={styles.group}>
				<h2>Q: How the heck do I plan this?!</h2>

				<p>
					A: No need to fear, I will help you as much or as little as you need
					me! For weddings, I love to be as involved as I can, especially if a
					wedding planner is not in the mix. I come up with your wedding day
					timeline for you, what venders you might need to still book, or ideas
					on how the day should flow a little more.
				</p>
				<p>
					As for family, senior, or couples photos - I will helpy ou with
					location scouting and outfit picking!
				</p>
				<p>Anything else you need, feel free to ask!</p>
			</div>

			<div className={styles.group}>
				<h2>
					Q: Will we get the print release to our photos after our session? Or
					do you do prints?
				</h2>

				<p>
					A: In your contract you will get a full print release that will allow
					you to take your images to your preferred print store. (Costco,
					Walmart, Shutterfly, etc.) You can also order them from the gallery
					that I deliver on, but I do not get any compensation from that!
				</p>
			</div>

			<div className={styles.group}>
				<h2>Q: Will you pose us?</h2>

				<p>
					A: Of course!! I love candid photos, but I will do whatever it takes
					to make sure that you / you + the fam or your honey will be as
					comfortable in front of the camera as they can be.
				</p>
			</div>

			<div className={styles.group}>
				<h2>Q: How do I pay?</h2>

				<p>
					A: All deposits and payments are to be paid through an online portal
					called Honeybook. The link will be in your email.
				</p>
				<p>
					It's possible to set up auto-payments after the deposit is made, or
					pay with cash or check.
				</p>
				<p>
					<b>I do not accept Venmo.</b>
				</p>
				<p>All final payments are due the day of the photoshoot.</p>
			</div>

			<div className={styles.group}>
				<h2>
					Q: Will you Photoshop my images to hide any unwanted spots, wrinkles,
					etc?
				</h2>

				<p>
					A: Minor edits will be made to all of your images, such as blemish
					removal and smoothing of skin. My editing will take away shadows and
					brighten colors, but I do not do any body altering.
				</p>
			</div>

			<div className={styles.group}>
				<h2>Q: What is your turn-around time?</h2>

				<p>
					A: 2-3 weeks to perfect your shoot and 4-6 weeks to perfect your
					wedding. The day after (if I am not traveling) you will always get a
					sneak peek of your photos!
				</p>
			</div>

			<div className={styles.group}>
				<h2>Q: Do you give out only edited images?</h2>

				<p>
					A: I never EVER give out RAW images! Those bad boys don't always look
					the best without some professional help!
				</p>
				<p>
					BUT I do hope that you've hired me based off of our connection + my
					photo style. You will get all of the images that are the most
					flattering, in focus, & the best representation of you!
				</p>
			</div>

			<div className={styles.group}>
				<h2>Q: What's the cancellation policy?</h2>

				<p>
					A: Cancellations and reschedules must be made via email or phone at
					least 48 hours prior to your session. I understand that life happens!
					But I do get booked up and will try my best to fit you in my schedule.
				</p>
				<p>I do not work with people that reschedule more than twice.</p>
				<p>All deposits are non-refundable.</p>
			</div>
		</div>
	);
};

export default FAQ;
