/** @format */

import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import cartImg from '../assets/cart.svg';
import Modal from './Modal';

const Card = styled.div`
	width: 264px;
	background: #ffffff;
	box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04),
		0px 4px 25px rgba(0, 0, 0, 0.05), 0px 3px 6px rgba(0, 0, 0, 0.04);
	border-radius: 8px;
	transition: 0.2s ease-in-out;

	&:hover {
		box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.06),
			0px 4px 25px rgba(0, 0, 0, 0.07), 0px 3px 6px rgba(0, 0, 0, 0.06);
	}

	.card__img {
		width: 264px;
		height: 128px;
		overflow: hidden;

		img {
			width: 100%;
			border-radius: 8px 8px 0 0;
		}
	}

	.card__info {
		padding: 16px;
		color: var(--black);

		h3 {
			font-weight: normal;
			font-size: 15px;
			line-height: 24px;
		}

		p {
			color: var(--grey);
			font-size: 12px;
			line-height: 14px;
		}
	}

	.card__btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		gap: 16px;
		font-weight: 500;
		font-size: 12px;

		.btn {
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.2s ease-in-out;
		}
	}
`;

const PriceBtn = styled.button`
	border: none;
	width: 108px;
	height: 32px;
	background-color: #eff0f2;
	border-radius: 4px;

	&:hover {
		background-color: #e3e4e6;
	}

	span {
		opacity: 0.4;
	}
`;

const SelectBtn = styled.button`
	border: none;
	width: 108px;
	height: 32px;
	background-color: #5ad88c;
	color: white;
	border-radius: 4px;
	cursor: pointer;
	gap: 10px;

	&:hover {
		background-color: #4ed383;
	}
`;

const Cards = ({
	cardtitle,
	carddesc,
	cardimg,
	priceBtn,
	isPrice,
	btninfo,
}) => {
	const [modal, setModal] = useState(false);
	const handleClick = () => setModal(!modal);

	return (
		<Fragment>
			<Card>
				<div className='card__img'>
					<img src={cardimg} alt='' />
				</div>
				<div className='card__info'>
					<h3>{cardtitle}</h3>
					<p>{carddesc}</p>
				</div>
				<div className='card__btns'>
					<PriceBtn className='btn'>
						<span>{isPrice ? `$` : null}</span>
						{priceBtn}
					</PriceBtn>
					<SelectBtn
						className='btn'
						onClick={() => {
							handleClick();
						}}>
						<img src={cartImg} alt='' /> {btninfo ? btninfo : 'Select'}
					</SelectBtn>
				</div>
			</Card>
			{modal ? <Modal modal={modal} /> : null}
		</Fragment>
	);
};

export default Cards;
