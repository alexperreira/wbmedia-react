import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../assets/images/hand-of-god-cropped.jpg';

const BannerSection = styled.section`
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

const Image = styled.div`
	background-image: url(${bg});
	height: 400px;
	width: 100%;
	background-position: 100%;
	background-size: cover;
	width: 100%;
	background-attachment: local;
	background-repeat: no-repeat;
	object-fit: fill;
	justify-content: center;

	@media screen and (max-width: 1200px) {
		height: 320px;
	}

	@media screen and (max-width: 768px) {
		height: 280px;
	}

	@media screen and (max-width: 480px) {
		background-size: contain;
	}
`;

const TextSection = styled.div`
	font-family: 'Raleway';
	height: 400px;
	width: 100%;
	background-color: #fff;
	text-align: center;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	color: #aa380b;

	& > h3 {
		text-transform: uppercase;
		font-size: 5rem;
		letter-spacing: 0.5rem;
		margin-bottom: 0.5rem;
	}

	& > p {
		font-size: 1.4rem;
		line-height: 2rem;
		width: 60%;
	}

	@media screen and (max-width: 1200px) {
		height: 320px;

		& > h3 {
			font-size: 4rem;
			margin-top: 0rem;
		}

		& > p {
			font-size: 1rem;
			line-height: 1.5rem;
		}
	}

	@media screen and (max-width: 768px) {
		height: 280px;

		& > h3 {
			font-size: 3rem;
		}

		& > p {
			font-size: ;
		}
	}

	@media screen and (max-width: 480px) {
		height: 50vh;
	}
`;

const Button = styled.button`
	border: none;
	border-radius: 0.3rem;
	font-size: 1.2rem;
	text-align: center;
	display: flex;
	padding: 1rem 2rem;
	margin-top: 2rem;
`;

function Banner() {
	return (
		<BannerSection>
			{/* <div className={styles.imageDivider} /> */}
			<Image />

			<TextSection>
				<h3>Let's party!</h3>
				<p>
					It doesn't matter what you're here for, but you're guaranteed a fun
					time! And don't worry brides, I'll pack the snacks.
				</p>
				<Button>
					<Link to='faq'>Questions?</Link>
				</Button>
			</TextSection>
		</BannerSection>
	);
}

export default Banner;
