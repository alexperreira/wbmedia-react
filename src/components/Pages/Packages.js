import styled, { css } from 'styled-components';

export const PackageHero = css`
	height: 50rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	z-index: 0;
	padding-top: 100px;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40rem;
	max-width: 95%;

	@media screen and (max-width: 769px) {
		padding-left: 10px;
	}

	@media screen and (max-width: 480px) {
		flex-direction: column;
		height: auto;
	}
`;

export const Package = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 25rem;
	padding: 0 2rem;
	margin: 2rem;
	width: 20rem;
	z-index: 20;
	color: #000;
	background: #fff;

	& > ul {
		list-style: disc;
		// line-height: 1rem;
		padding: 0.5rem;
		padding-left: 1rem;
		color: #000;
	}

	& > ul > li {
		line-height: 1rem;
		padding: 0.5rem;
	}

	@media screen and (max-width: 769px) {
		height: 20rem;
		width: auto;
		padding: 0;
		justify-content: start;
	}
`;

export const Title = styled.h3`
	font-family: 'Brian-Strait';
	font-weight: 400;
	font-size: 4rem;
	text-align: center;
	margin: 0.5rem 1rem;
`;

export const Price = styled.h2`
	margin: 0 auto;
	align-self: center;
`;

export const BannerStyle = css`
	width: 100%;
	height: 25rem;
	position: relative;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
`;

export const Overlay = styled.div`
	color: #fff;
	background: rgba(0, 0, 0, 0.2);
	height: 25rem;
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Tagline = styled.h4`
	font-family: 'Hello January';
	font-weight: 400;
	font-size: 5rem;
	letter-spacing: 0.5rem;
	text-shadow: 1px 1px #fff;
	margin: 4rem;
	text-align: center;

	@media screen and (max-width: 769px) {
		font-size: 4rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 3rem;
	}
`;
