import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// import MenuIcon from './MenuIcon';
import { menuData } from '../../../data/menuData';
// import { menuItems } from '../../../data/menuData';

const DropdownContainer = styled.div`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #e2a42c;
	display: grid;
	align-items: center;
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

// const Icon = styled.div`
// 	position: absolute;
// 	top: 1.2rem;
// 	right: 1.5rem;
// 	background: transparent;
// 	font-size: 2rem;
// 	cursor: pointer;
// 	outline: none;
// `;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80px repeat(4, 40px) 80px;
	text-align: center;
	margin-bottom: 4rem;

	@media screen and (max-width: 480px) {
		grid-template-rows: 80px repeat(4, 40px) 80px;
	}
`;

const NavLink = css`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	text-decoration: none;
	list-style: none;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #000d1a;
	}
`;

const DropdownLink = styled(Link)`
	${NavLink}
	font-size: 1.5rem;
`;

// const SubDropdownLink = styled(Link)`
// 	${DropdownLink}
// 	margin-left: 1rem;
// 	font-size: 1.2rem;
// `;

const MobileDropdown = ({ isOpen, toggle }) => {
	return (
		<DropdownContainer isOpen={isOpen} onClick={toggle}>
			{/* <Icon onClick={toggle} isOpen={isOpen}>
				<MenuIcon toggle={toggle} />
			</Icon> */}
			<DropdownWrapper>
				<DropdownMenu>
					{/* <DropdownLink to='/'>Home</DropdownLink> */}
					{/* <DropdownLink to='#'>Packages</DropdownLink> */}
					{menuData.map((item, index) => (
						<DropdownLink to={item.path} key={index}>
							{item.title}
						</DropdownLink>
					))}
					{/* {menuItems.map((item, index) => (
						<SubDropdownLink to={item.link} key={index}>
							{item.title}
						</SubDropdownLink>
					))} */}
				</DropdownMenu>
			</DropdownWrapper>
		</DropdownContainer>
	);
};

export default MobileDropdown;
