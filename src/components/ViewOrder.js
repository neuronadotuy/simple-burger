/** @format */

import React from 'react';
import bagIcon from '../assets/bag.svg';
import styled from '@emotion/styled';

const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 368.66px;
	height: 72px;
	background-color: white;
	box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.06),
		0px 0px 0px 1px rgba(0, 0, 0, 0.25);
	border-radius: 0px 0px 10px 10px;
	justify-self: end;
	margin: 0 120px 0 0;

	@media (max-width: 744px) {
		width: 216px;
		margin: 0 24px 0 0;
	}
`;

const ViewOrderBtn = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--orderBtn);
	border: none;
	width: 100%;
	height: 40px;
	margin: 8px;
	padding: 8px 16px;
	border-radius: 8px;
	font-size: 12px;
	font-weight: 500;
	color: white;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #db0d3d;
	}

	p span {
		opacity: 0.7;
	}
`;

const ViewOrder = () => {
	return (
		<BtnWrapper>
			<ViewOrderBtn>
				<img src={bagIcon} alt='' />
				<p>View order</p>
				<p>
					<span>$</span>
					11.99
				</p>
			</ViewOrderBtn>
		</BtnWrapper>
	);
};

export default ViewOrder;
