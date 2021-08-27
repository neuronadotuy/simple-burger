/** @format */

import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';
import burger4 from '../../assets/burger4.png';
import fries from '../../assets/fries.png';
import soda from '../../assets/soda.png';
import { MODAL } from '../../types/index';

const State = (props) => {
	const initialState = {
		menu: [
			{
				id: 1,
				title: 'Combo Burger',
				desc: 'Simple but juicy burger. Choose your toppings.',
				price: 9.99,
				image: burger1,
				onMenu: 'combo',
			},
			{
				id: 2,
				title: 'Combo Double Burger',
				desc: 'Double jucy delicious burger. Choose your toppings.',
				price: 10.99,
				image: burger2,
				onMenu: 'combo',
			},
			{
				id: 3,
				title: 'Combo Burger + Cheese',
				desc: 'What’s a burger without cheese? Choose your toppings.',
				price: 11.99,
				image: burger3,
				onMenu: 'combo',
			},
			{
				id: 4,
				title: 'Combo Double Burger + Cheese',
				desc: 'What’s a burger without melted delicious DOUBLE cheese?',
				price: 15.49,
				image: burger4,
				onMenu: 'combo',
			},
			{
				id: 5,
				title: 'Burger',
				desc: 'Simple but jucy burger. Choose your toppings.',
				price: 6.25,
				image: burger1,
				onMenu: 'burger',
			},
			{
				id: 6,
				title: 'Doble Burger',
				desc: 'Double jucy delicious burger. Choose your toppings.',
				price: 8.49,
				image: burger2,
				onMenu: 'burger',
			},
			{
				id: 7,
				title: 'Burger + Cheese',
				desc: 'What’s a burger without cheese? Choose your toppings.',
				price: 9.0,
				image: burger3,
				onMenu: 'burger',
			},
			{
				id: 8,
				title: 'Doble Burger + Cheese',
				desc: 'What’s a burger without melted delicious DOUBLE cheese?',
				price: 13.0,
				image: burger4,
				onMenu: 'burger',
			},
			{
				id: 9,
				title: 'Fries',
				desc: 'Crunchy unique fries.',
				price: 3.49,
				image: fries,
				onMenu: 'other',
			},

			{
				id: 10,
				title: 'Soda',
				desc: 'Accompany your burger with a soda.',
				price: 1.0,
				image: soda,
				onMenu: 'other',
			},
		],

		handlemodal: false,
	};

	const [state, dispatch] = useReducer(Reducer, initialState);

	const showModal = () => {
		dispatch({ type: MODAL });
	};

	return (
		<Context.Provider
			value={{ handlemodal: state.handlemodal, menu: state.menu, showModal }}>
			{props.children}
		</Context.Provider>
	);
};

export default State;
