/** @format */

import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const SubtitleWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	align-items: center;
	width: 184px;
	gap: 9px;
	padding-top: 74px;
	margin: 0 auto;

	hr {
		border: 1px solid var(--mainColor);
		color: var(--mainColor);
		width: 100%;
	}
`;

const SubtitleMsg = styled.p`
	font-family: 'Antonio', Arial, Helvetica, sans-serif;
	font-weight: normal;
	font-size: 16px;
	line-height: 23px;
	margin: 0;
	color: var(--mainColor);
	text-align: center;
	text-transform: uppercase;
`;

const TitleMsg = styled.h2`
	font-family: 'CocogooseBold';
	font-weight: normal;
	font-size: 40px;
	line-height: 58px;
	text-align: center;
	color: var(--mainColor);
	text-transform: uppercase;
	margin: 0;
	padding-bottom: 42px;
`;

const Title = ({ subtitle, title }) => {
	return (
		<Fragment>
			<SubtitleWrapper>
				<hr />
				<SubtitleMsg>
					{subtitle ? subtitle : 'Insert a cool message here!'}
				</SubtitleMsg>
				<hr />
			</SubtitleWrapper>
			<TitleMsg>{title ? title : 'Tasty'}</TitleMsg>
		</Fragment>
	);
};

export default Title;
