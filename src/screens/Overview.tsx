import React from 'react';
import { TechStack } from '../components/TechStack';
import { Bio } from '../components/Bio';
import { Paper } from '@material-ui/core';
import { Work } from '../components/Work';
import { Edu } from '../components/Edu';
export const Overview = () => {
	return (
		<Paper style={{ padding: '10px', minHeight: '80vh' }}>
			<div style={{ display: 'flex' }}>
				<div style={{ flexBasis: '20%' }}>
					<TechStack />
				</div>
				<div style={{ flexBasis: '80%' }}>
					<Bio />
					<Work />
					<Edu />
				</div>
			</div>
		</Paper>
	);
};
