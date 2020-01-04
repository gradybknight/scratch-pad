import React from 'react';

import Paper from '@material-ui/core/Paper';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Overview } from './screens/Overview';
import { Projects } from './screens/Projects';
import { ScratchPad } from './screens/ScratchPad';
import { Resume } from './screens/Resume';
// import {
// 	ContactInfoProps,
// 	ContactInfoItem,
// } from './components/ContactInfoItem';
import { ContactInfo } from './components/ContactInfo';

const App: React.FC = () => {
	return (
		<div>
			<Paper elevation={0} variant="outlined">
				<Header />
				<ContactInfo />
				<NavBar selectedTab={1} />
			</Paper>
			<Overview />
			<Projects />
			<ScratchPad />
			<Resume />
		</div>
	);
};

export default App;
