/** @format */

import React from 'react';
import styled from '@emotion/styled';

const ModalContainer = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	color: var(--white);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const Modal = () => {
	return (
		<ModalContainer>
			<div className='modal__wrapper'>
				<div className='modal__header'>
					<img src='' alt='' />
					<div className='modal__info'>
						<p className='modal__title'>Lorem, ipsum.</p>
						<p className='modal__desc'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Adipisci, quasi?
						</p>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Modal;
