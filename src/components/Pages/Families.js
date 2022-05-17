import React from 'react';
import Button from '../UI/Button';
import Hello from '../UI/Hello';
import styled from 'styled-components';
import { CouplesSliderData } from '../UI/Slider/SliderData';
import ImageSlider from '../UI/Slider/ImageSlider';
import bannerImage from '../../assets/family-banner.jpg';
import heroImage from '../../assets/images/family-main.jpg';
import {
	PackageHero,
	Container,
	Package,
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
`;

const style = {
	width: '100%',
	maxWidth: '100%',
	justifyContent: 'center',
};

const Families = () => {
	return (
		<div>
			<Hero />

			<Container>
				<Hello text={'Families'} />
				<Package style={style}>
					<Price style={{ textAlign: 'center' }}>
						Packages range from $200 to $400. Please inquire and let me know the
						number of family members and ages.
					</Price>
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

export default Families;
