/** @format */

import React, { useContext } from 'react';
import Title from './Title';
import styled from '@emotion/styled';
import Card from './Cards';
import Context from '../context/modal/Context';
import bgImg from '../assets/bg_image_icons.png';

const ComboContainer = styled.div`
	width: 100%;
	background-color: #fff9ee;
	padding-top: 383.7px;
	padding-bottom: 130px;
	border-radius: 0px 0px 40px 40px;
	position: relative;
	top: -35px;
	z-index: 0;
	overflow: hidden;

	.bg__image {
		position: absolute;
		background: url(${bgImg});
		background-blend-mode: lighten;
		background-repeat: no-repeat;
		z-index: -1;
	}

	.bg__image--left {
		background-position: left;
		transform: rotate(180deg);
		height: 656.41px;
		width: 1200px;
		left: -439.39px;
		top: 200px;
	}

	.bg__image--right {
		background-position: right;
		height: 656.41px;
		width: 1200px;
		right: 0;
		top: 200px;
	}
`;

const Combos = () => {
	const context = useContext(Context);
	const { menu } = context;

	return (
		<ComboContainer>
			<Title subtitle='complete for you' title='combos' />
			<div className='card__container'>
				{menu.map((menuItem) => {
					const { image, title, desc, price, id, onMenu } = menuItem;
					return onMenu === 'combo' ? (
						<Card
							menu={menu}
							key={id}
							cardimg={image}
							cardtitle={title}
							carddesc={desc}
							isPrice
							priceBtn={price}
						/>
					) : null;
				})}
			</div>
			<div className='bg__image bg__image--left'></div>
			<div className='bg__image bg__image--right'></div>
		</ComboContainer>
	);
};

export default Combos;
