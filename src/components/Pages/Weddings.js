import React from 'react';
import Button from '../UI/Button';
import Hello from '../UI/Hello';
import styled from 'styled-components';
import ImageSlider from '../UI/Slider/ImageSlider';
import bannerImage from '../../assets/images/whit-web/weddings/weddings-flowers.jpg';
import heroImage from '../../assets/images/whit-web/weddings/weddings-main.jpg';
import { CouplesSliderData } from '../UI/Slider/SliderData';
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
	background-image: url(${bannerImage})
`;

const Hero = styled.div`
	${PackageHero}
	background-image: url(${heroImage});
`;

const Weddings = () => {
	const mediaQuery = window.matchMedia('(max-width: 480px)');
	return (
		<div>
			<Hero />
			<Container
				style={mediaQuery.matches ? { height: '85rem' } : { height: '40rem' }}
			>
				<Hello text={'Weddings'} />
				<Package>
					<Title>Package 1</Title>
					<Price>$1,700</Price>
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
				</Package>
				<Package>
					<Title>Package 2</Title>
					<Price>$2,200</Price>
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
				</Package>
				<Package>
					<Title>Package 3</Title>
					<Price>$3,500</Price>
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
				</Package>
			</Container>
			<Banner>
				<Overlay>
					<Tagline>Ready to book with me?</Tagline>
					<Button text='Inquire here' />
				</Overlay>
			</Banner>
			<div>
				<ImageSlider slides={CouplesSliderData} />
			</div>
		</div>
	);
};

export default Weddings;
