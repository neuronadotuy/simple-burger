/** @format */

import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';
import { MODAL } from '../../types/index';

const State = (props) => {
	const initialState = {
		handlemodal: false,
	};

	const [state, dispatch] = useReducer(Reducer, initialState);

	const showModal = () => {
		dispatch({ type: MODAL });
	};

	return (
		<Context.Provider value={{ handlemodal: state.handlemodal, showModal }}>
			{props.children}
		</Context.Provider>
	);
};

export default State;
