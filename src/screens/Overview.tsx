import React from 'react';
import { TechStack } from '../components/TechStack';
import { Bio } from '../components/Bio';
import { Paper } from '@material-ui/core';
export const Overview = () => {
	return (
		<Paper style={{ padding: '10px' }}>
			<div style={{ display: 'flex' }}>
				<div
					style={{
						flexGrow: 1,
						flexShrink: 1,
					}}
				>
					<TechStack />
				</div>
				<div
					style={{
						flexGrow: 8,
						flexShrink: 8,
					}}
				>
					<Bio />
				</div>
			</div>
		</Paper>
	);
};
