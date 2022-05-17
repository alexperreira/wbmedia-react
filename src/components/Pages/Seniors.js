import React from 'react';
import Button from '../UI/Button';
import Hello from '../UI/Hello';
import styled from 'styled-components';
import bannerImage from '../../assets/images/aurora-road.jpg';
import heroImage from '../../assets/images/senior-paddle-shore.jpg';
import ImageSlider from '../UI/Slider/ImageSlider';
import { SeniorsSliderData } from '../UI/Slider/SliderData';
import {
	PackageHero,
	Container,
	Package,
	Title,
	Price,
	Overlay,
	BannerStyle,
	Tagline,
} from './Packages';

const Banner = styled.div`
	${BannerStyle}
	background-image: url(${bannerImage});
`;

const Hero = styled.div`
	${PackageHero}
	background-image: url(${heroImage});

	@media screen and (max-width: 480px) {
		background-position: 35% center;
	}
`;

const Seniors = () => {
	return (
		<div>
			<Hero />

			<Container>
				<Hello text={'Seniors'} />
				<Package>
					<Title>Package 1</Title>
					<Price>$250</Price>
					<ul>
						<li>1 hr session</li>
						<li>30-40 edited photos</li>
						<li>1 outfit</li>
						<li>1 location</li>
						<li>Print release and online gallery</li>
					</ul>
				</Package>
				<Package>
					<Title>Package 2</Title>
					<Price>$350</Price>
					<ul>
						<li>1 1/2 hour session</li>
						<li>50-60 edited photos</li>
						<li>2 outfits</li>
						<li>2 locations</li>
						<li>Print release and online gallery</li>
					</ul>
				</Package>
				<Package>
					<Title>Package 3</Title>
					<Price>$500</Price>
					<ul>
						<li>2 hour session</li>
						<li>100+ edited photos</li>
						<li>3 outfits</li>
						<li>As many locations as we can squeeze in!**</li>
						<li>Print release and online gallery</li>
					</ul>
				</Package>
			</Container>
			<Banner>
				<Overlay>
					<Tagline>Ready to book with me?</Tagline>
					<Button text='Inquire here' />
				</Overlay>
			</Banner>
			<div>
				<ImageSlider slides={SeniorsSliderData} />
			</div>
		</div>
	);
};

export default Seniors;
