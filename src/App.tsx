import React from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Overview } from './screens/Overview';
import { Projects } from './screens/Projects';
import { ScratchPad } from './screens/ScratchPad';
import { Resume } from './screens/Resume';
import {
	ContactInfoProps,
	ContactInfoItem,
} from './components/ContactInfoItem';

const App: React.FC = () => {
	const style = {
		dark: { backgroundColor: 'black' },
		light: { backgroundColor: 'white' },
	};

	const contactInfoItems: ContactInfoProps[] = [
		{ url: 'https://www.google.com', title: 'website', iconName: 'website' },
		{ url: 'https://www.github.com', title: 'github', iconName: 'github' },
	];

	const isThemeDark = false;
	return (
		<div style={isThemeDark ? { ...style.dark } : { ...style.light }}>
			<Header theme={isThemeDark ? 'dark' : 'light'} />
			{contactInfoItems.map(item => {
				return <ContactInfoItem {...item} />;
			})}
			<NavBar theme={isThemeDark ? 'dark' : 'light'} />
			<Overview />
			<Projects />
			<ScratchPad />
			<Resume />
		</div>
	);
};

export default App;
