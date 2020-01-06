import React from 'react';
import { Divider } from '@material-ui/core';

export const WorkItem = (item: any) => {
	const {
		company,
		location,
		start,
		end,
		technologyStack,
		paragraphs,
	} = item.item;
	return (
		<div style={{ display: 'flex', flexBasis: '100%', marginBottom: '3px' }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '30%',
				}}
			>
				<div>
					{start} - {end}
				</div>
				<div>{location}</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '70%',
				}}
			>
				<div
					style={{
						fontSize: '1.15rem',
						fontWeight: 'bold',
					}}
				>
					{company}
				</div>
				{paragraphs.map((p: string) => (
					<div>{p}</div>
				))}
			</div>
		</div>
	);
};
