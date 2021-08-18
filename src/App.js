/** @format */
// import styled from '@emotion/styled';
import 'normalize.css';
import { Fragment, useState } from 'react';
import Combos from './components/Combos';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	return (
		<Fragment>
			<Header />
			<Combos />
			<Main />
			<Footer />
		</Fragment>
	);
}

export default App;
