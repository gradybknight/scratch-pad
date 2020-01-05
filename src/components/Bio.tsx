import React from 'react';
import { bioItems } from '../constants/bioItems';
import { BioItem } from './BioItem';

export const Bio = () => {
	return (
		<>
			{bioItems.map(item => (
				<BioItem title={item.title} paragraphs={item.paragraphs} />
			))}
		</>
	);
};
