/** @format */
/* eslint-disable import/no-anonymous-default-export */

import { MODAL } from '../../types/index';

export default (state, action) => {
	switch (action.type) {
		case MODAL:
			return { ...state, handlemodal: !state.handlemodal };

		default:
			return state;
	}
};
