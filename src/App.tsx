import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/rootReducer';
import {
	setCurrentTab,
	setModalVisibility,
} from './redux/globalUserInterfaceSlice';

import Paper from '@material-ui/core/Paper';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Overview } from './screens/Overview';
import { Projects } from './screens/Projects';
import { ScratchPad } from './screens/ScratchPad';
import { Resume } from './screens/Resume';
import { ContactInfo } from './components/ContactInfo';

const App: React.FC = () => {
	const dispatch = useDispatch;
	const { isModalVisible, tabIndex } = useSelector(
		(state: RootState) => state.globalUserInterface
	);

	return (
		<div>
			<Paper elevation={0} variant="outlined">
				<Header />
				<ContactInfo />
				<NavBar selectedTab={tabIndex} />
			</Paper>
			<Overview />
			<Projects />
			<ScratchPad />
			<Resume />
			{isModalVisible ? <h1>MODAL</h1> : null}
		</div>
	);
};

export default App;
