/** @format */

import React from 'react';
import styled from '@emotion/styled';

const ModalContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const Modal = ({ modal }) => {
	return <ModalContainer>{modal ? <hi>From Modal</hi> : null}</ModalContainer>;
};

export default Modal;
