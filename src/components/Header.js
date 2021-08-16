/** @format */

import React from 'react';
import headerImage from '../assets/header.png';
import logo from '../assets/logo.png';
import styled from '@emotion/styled';
import ViewOrder from './ViewOrder';

const HeaderContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-between;
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.76) 0%,
			rgba(0, 0, 0, 0) 73.31%
		),
		url(${headerImage});
	background-position: center center;
	background-size: cover;
	border-radius: 0 0 40px 40px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 383.7px;
	z-index: 10;
`;

const Logo = styled.img`
	margin: 17px 0 0 120px;
	width: 148px;
	justify-self: start;

	@media (max-width: 744px) {
		width: 148px;
		margin: 0 24px 0 0;
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Logo src={logo} alt='' />
			<ViewOrder />
		</HeaderContainer>
	);
};

export default Header;
