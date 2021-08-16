/** @format */

import React from 'react';
import styled from '@emotion/styled';

const Btn = styled.button`
	border: none;
	width: 108px;
	height: 32px;
	background-color: #eff0f2;

	span {
		opacity: 0.7;
	}
`;

const Button = ({ isPrice, btninfo }) => {
	return (
		<Btn>
			<span>{isPrice ? `$` : null}</span>
			{btninfo}
		</Btn>
	);
};

export default Button;
