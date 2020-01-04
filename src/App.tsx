import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './model/rootReducer';

import Paper from '@material-ui/core/Paper';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Overview } from './screens/Overview';
import { Projects } from './screens/Projects';
import { ScratchPad } from './screens/ScratchPad';
import { Resume } from './screens/Resume';
import { ContactInfo } from './components/ContactInfo';

const App: React.FC = () => {
	const { isModalVisible } = useSelector(
		(state: RootState) => state.globalUserInterface
	);

	return (
		<div>
			<Paper elevation={0} variant="outlined">
				<Header />
				<ContactInfo />
				<NavBar />
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
