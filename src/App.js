/** @format */
// import styled from '@emotion/styled';
import 'normalize.css';
import { Fragment, useState, useContext } from 'react';
import Combos from './components/Combos';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';
import Context from './context/modal/Context';

const App = () => {
	const context = useContext(Context);
	const { handlemodal } = context;

	return (
		<Fragment>
			{handlemodal ? <Modal /> : null}
			<Header />
			<Combos />
			<Main />
			<Footer />
		</Fragment>
	);
};

export default App;
