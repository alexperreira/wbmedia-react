import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import MenuIcon from '../UI/Nav/MenuIcon';
import logo from '../../assets/WB-Submark-CMYK.png';
import Dropdown from '../UI/Dropdown';

const NavContainer = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	width: 100vw;
	height: 100px;
	max-width: 2000px;
	flex-wrap: wrap;
	justify-content: space-between;
	background-color: rgba(255, 255, 255, 0.9);
	/* background: linear-gradient(to bottom, #fff 0%, #1c00ff00 100%); */
	z-index: 100;

	@media screen and (max-width: 1200px) {
		height: 90px;
	}
`;

const LogoDiv = styled(Link)`
	margin: auto 2.5rem;

	@media screen and (max-width: 480px) {
		margin: 1rem 1.5rem;
	}
`;

const Logo = styled.img`
	width: 4.5rem;
	height: 4.5rem;
	cursor: pointer;

	@media screen and (max-width: 481px) {
		width: 4rem;
		height: 4rem;
	}
`;

const Nav = styled.nav`
	display: flex;
	margin-right: 2.5rem;

	& > ul {
		display: flex;
		align-items: center;
	}
	@media screen and (max-width: 481px) {
		display: none;
	}
`;

const NavLink = styled(Link)`
	list-style: none;
	text-decoration: none;
	font-size: 1.1rem;
	cursor: pointer;
	padding: 1.2rem;
`;

const Navbar = ({ toggle }) => {
	const [dropdown, setDropdown] = useState(false);

	const onMouseEnter = () => {
		setDropdown(true);
	};

	const onMouseLeave = () => {
		setDropdown(false);
	};

	return (
		<React.Fragment>
			<NavContainer>
				<LogoDiv to='/'>
					<Logo src={logo} />
				</LogoDiv>
				{/* <MenuIcon onClick={toggle} /> */}
				<Nav>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
							<NavLink to='#'>Packages</NavLink>
							{dropdown && <Dropdown />}
						</li>
						<li>
							<NavLink to='/faq'>FAQ</NavLink>
						</li>
						<li>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://www.honeybook.com/widget/w_bilbao_media_llc_170936/cf_id/5fda3e235ff8e50a0f01364c'
							>
								Get in touch!
							</a>
						</li>
					</ul>
				</Nav>
			</NavContainer>
		</React.Fragment>
	);
};

export default Navbar;
