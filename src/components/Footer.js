/** @format */

import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo.png';

const FooterContainer = styled.div`
	width: 100%;
	height: 153px;
	background-color: #000000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<img src={logo} alt='' />
		</FooterContainer>
	);
};

export default Footer;
