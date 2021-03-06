import React from 'react';
import { IBioItem } from '../constants/bioItems';

export const BioItem = (item: IBioItem) => {
	return (
		<div
			style={{
				display: 'flex',
				flexBasis: '100%',
			}}
		>
			<div>
				{item.paragraphs.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
		</div>
	);
};
