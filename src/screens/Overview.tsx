import React from 'react';
import { useSelector } from 'react-redux';
import { TechStack } from '../components/TechStack';
import { Bio } from '../components/Bio';
import { Paper } from '@material-ui/core';
import { Work } from '../components/Work';
import { Edu } from '../components/Edu';
import { RootState } from '../model/rootReducer';
import TechStackIcons from '../components/TechStackIcons';
export const Overview = () => {
	const { isBigScreen } = useSelector(
		(state: RootState) => state.globalUserInterface
	);
	return (
		<Paper style={{ padding: '10px', minHeight: '80vh' }}>
			<div style={{ display: 'flex' }}>
				{/* <div style={{ flexBasis: '20%' }}> */}
				<div style={{ width: isBigScreen ? '20%' : '100%' }}>
					{isBigScreen ? <TechStack /> : null}
				</div>
				<div style={{ width: isBigScreen ? '80%' : '100%' }}>
					{isBigScreen ? null : <TechStackIcons />}
					<Bio />
					<Work />
					<Edu />
				</div>
			</div>
		</Paper>
	);
};
