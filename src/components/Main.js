/** @format */

import React, { Fragment, useContext } from 'react';
import Title from './Title';
import styled from '@emotion/styled';
import Card from './Cards';
import bgImg from '../assets/bg_image_icons.png';
import Context from '../context/modal/Context';

const MainContainer = styled.div`
	width: 100%;
	background-color: white;
	position: relative;
	top: -35px;
	z-index: 0;

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
		top: 0px;
	}

	.bg__image--right {
		background-position: right;
		height: 656.41px;
		width: 1200px;
		right: 0;
		top: 150px;
	}
`;

const Main = () => {
	const context = useContext(Context);
	const { menu } = context;
	return (
		<MainContainer>
			<div className='burgers__section'>
				<Title subtitle='delicious' title='burgers' />
				<div className='card__container'>
					{menu.map((menuItem) => {
						const { image, title, desc, price, id, onMenu } = menuItem;
						return onMenu === 'burger' ? (
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
			</div>
			<div className='other__section'>
				<Title subtitle='more?' title='other' />
				<div className='card__container'>
					{menu.map((menuItem) => {
						const { image, title, desc, price, id, onMenu } = menuItem;
						return onMenu === 'other' ? (
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
			</div>
			<div className='bg__image bg__image--left'></div>
			<div className='bg__image bg__image--right'></div>
		</MainContainer>
	);
};

export default Main;
