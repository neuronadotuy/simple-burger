/** @format */

import React, { Fragment } from 'react';
import Title from './Title';
import styled from '@emotion/styled';
import Card from './Cards';
import burger1 from '../assets/burger1.png';
import burger2 from '../assets/burger2.png';
import burger3 from '../assets/burger3.png';
import burger4 from '../assets/burger4.png';
import fries from '../assets/fries.png';
import soda from '../assets/soda.png';
import bgImg from '../assets/bg_image_icons.png';

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
	return (
		<MainContainer>
			<div className='burgers__section'>
				<Title subtitle='delicious' title='burgers' />
				<div className='card__container'>
					<Card
						cardimg={burger1}
						cardtitle='Combo Burger'
						carddesc='Simple but jucy burger. Choose your toppings.'
						isPrice
						priceBtn='9.99'
					/>
					<Card
						cardimg={burger2}
						cardtitle='Combo Double Burger'
						carddesc='Double jucy delicious burger. Choose your toppings.'
						isPrice
						priceBtn='10.99'
					/>
					<Card
						cardimg={burger3}
						cardtitle='Combo Burger + Cheese'
						carddesc='What’s a burger without cheese? Choose your toppings.'
						isPrice
						priceBtn='11.99'
					/>
					<Card
						cardimg={burger4}
						cardtitle='Combo Double Burger + Cheese'
						carddesc='What’s a burger without melted delicious DOUBLE cheese?'
						isPrice
						priceBtn='15.49'
					/>
				</div>
			</div>
			<div className='other__section'>
				<Title subtitle='more?' title='other' />
				<div className='card__container'>
					<Card
						cardimg={fries}
						cardtitle='Fries'
						carddesc='Crunchy unique fries.'
						isPrice
						priceBtn='3.49'
					/>
					<Card
						cardimg={soda}
						cardtitle='Soda'
						carddesc='Accompany your burger with a soda.'
						isPrice
						priceBtn='1.00'
					/>
				</div>
			</div>
			<div className='bg__image bg__image--left'></div>
			<div className='bg__image bg__image--right'></div>
		</MainContainer>
	);
};

export default Main;
