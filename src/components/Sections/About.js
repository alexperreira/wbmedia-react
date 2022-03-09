import React from 'react';
import Button from '../UI/Button';
import Hello from '../UI/Hello';
import eucalyptus from '../../assets/graphics/eucalyptus.png';
import whitney from '../../assets/whit-profile-new.jpg';
import whitney2 from '../../assets/whit-headshot.jpg';
import branch from '../../assets/graphics/branch.svg';
import styles from './About.module.css';

const About = () => {
	// Testing code for button scroller
	return (
		<section className={styles.about} id='#about'>
			<Hello text={"Hi I'm whitney!"} />
			<div className={styles.container}>
				{/* Adding CSS Scroll Animation Tutorial from https://alvarotrigo.com/blog/css-animations-scroll/ */}
				<div className={styles.profile}>
					<div className={styles.decorDiv1}>
						<img className={styles.decorImg1} src={eucalyptus} alt='' />
					</div>
					<img src={whitney} className={styles.whitneyProfile1} alt='' />
					<img src={whitney2} className={styles.whitneyProfile2} alt='' />
					<div className={styles.decorDiv2}>
						<img src={branch} className={styles.decorImg2} alt='' />
					</div>
				</div>
				<div className={styles.aboutText}>
					<p>
						Hello there, and thank you for inquiring! I cannot wait to work with
						you! A little about myself before you get to scrolling. I am 26
						years old and live in Boise. I have 3 years of photography under my
						belt and hope to have mamy more. I love the outdoors, wine, cooking,
						and lifting heavy stuff. I enjoy reading Reese Witherspoon's book
						club finds and watching terrible Reality TV. If I'm not on my
						computer editing I am searching for a cheap flight on Google or
						spitting off puns to my family or boyfriend. I'm also very short, so
						please let me know if I need to bring a step-ladder.
						<br />
						<br />
						A little about myself before you get to scrolling. I am 26 years old
						and live in Boise. I have 5 years of photography under my belt and
						hope to have many more. I love the outdoors, wine, cooking, and
						lifting heavy stuff. I enjoy reading Reese Witherspoon's book club
						finds and watching terrible Reality TV. If I'm not on my computer
						editing I am searching for a cheap flight on Google or spitting off
						puns to my family or boyfriend. I'm also very short, so please let
						me know if I need to bring a step-ladder.
						<br />
						<br />
						To be quite frank with you, I am not a gushy lovey photographer, I
						am a let's have a drink together and laugh until we cry type of
						photographer. So if that interests you, you're in the right spot!
					</p>
					<div className={styles.inquire}>
						<Button text='Inquire here' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
