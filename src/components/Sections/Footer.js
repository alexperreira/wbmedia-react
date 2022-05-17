import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import styled from 'styled-components';

import logo from '../../assets/WB-Logo-White.png';
import instagram from '../../assets/graphics/instagram-icon.png';
import facebook from '../../assets/graphics/facebook-icon.png';

const Container = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100vw;
	align-items: center;
	justify-content: space-between;
	background-color: #ded5cc;
	z-index: 100;
`;

const Nav = styled.nav``;

const NavItems = styled.ul`
	display: flex;
	justify-content: space-around;
	padding-inline-start: 0;
	margin-left: 10px;
`;

const ListItem = styled.li`
	padding: 0 1.2rem;
	margin: 2rem;

	@media screen and (max-width: 480px) {
		margin: 0;

		& > a {
			font-size: 1rem;
		}
	}
`;

const NavLink = styled(Link)`
	color: #993c20;

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

const SocialIcon = styled.img`
	width: 3.5rem;
	margin: 0 2rem 2rem 2rem;

	@media screen and (max-width: 480px) {
		width: 2.8rem;
	}
`;

const Logo = styled.img`
	width: 40rem;
	height: auto;
	margin-bottom: 2rem;

	@media screen and (max-width: 1200px) {
		width: 30rem;
	}

	@media screen and (max-width: 480px) {
		width: 20rem;
	}
`;

const Copyright = styled.div`
	font-size: 1rem;

	@media screen and (max-width: 1200px) {
		font-size: 0.8rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 0.7rem;
		text-align: center;
	}
`;

const MyLink = styled.a`
	padding-left: 0.1rem;
	font-size: 1rem;

	@media screen and (max-width: 1200px) {
		font-size: 0.8rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

const Footer = () => {
	return (
		<>
			<Container>
				<Nav>
					<NavItems>
						<ListItem>
							<NavLink to='/'>Home</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to='/packages'>Packages</NavLink>
						</ListItem>
						<ListItem>
							<NavLink to='/faq'>FAQ</NavLink>
						</ListItem>
						<ListItem>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c'
							>
								Get in touch!
							</a>
						</ListItem>
					</NavItems>
				</Nav>
				<div>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.instagram.com/bilbaowhitneyphoto/'
					>
						<SocialIcon src={instagram} alt='Instagram' />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.facebook.com/bilbaowhitneyphoto'
					>
						<SocialIcon src={facebook} alt='Facebook' />
					</a>
				</div>
				<Logo src={logo} alt='' className={styles.logo} />
				<Copyright>
					Copyright &copy; 2022 W. Bilbao Media, LLC. All Rights Reserved. Site
					Design and Build by
					<MyLink
						target='_blank'
						rel='noreferrer'
						href='https://thealexperr.com/'
					>
						Alex Perreira
					</MyLink>
				</Copyright>
			</Container>
		</>
	);
};

export default Footer;
