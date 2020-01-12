import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './model/rootReducer';
import { setScreenSize } from './model/globalUserInterfaceSlice';

import Paper from '@material-ui/core/Paper';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Overview } from './screens/Overview';
import { Projects } from './screens/Projects';
import { ScratchPad } from './screens/ScratchPad';
import { AboutSite } from './screens/AboutSite';
import { ContactInfo } from './components/ContactInfo';

const App: React.FC = () => {
	const { isModalVisible, screenName } = useSelector(
		(state: RootState) => state.globalUserInterface
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setScreenSize(window.innerWidth));
	});
	const updateSize = () => {
		dispatch(setScreenSize(window.innerWidth));
	};

	window.addEventListener('resize', updateSize);
	return (
		<div>
			<Paper elevation={0}>
				<Header />
				<ContactInfo />
				<NavBar />
			</Paper>
			{screenName === 'Overview' ? <Overview /> : null}
			{screenName === 'Projects' ? <Projects /> : null}
			{screenName === 'ScratchPad' ? <ScratchPad /> : null}
			{screenName === 'AboutSite' ? <AboutSite /> : null}
			{isModalVisible ? <h1>MODAL</h1> : null}
		</div>
	);
};

export default App;
