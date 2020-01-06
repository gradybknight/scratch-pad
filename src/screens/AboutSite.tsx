import React from 'react';
import { Paper } from '@material-ui/core';

export const AboutSite = () => {
	return (
		<Paper style={{ padding: '10px', minHeight: '80vh' }}>
			About this site
			<p>React / Typescript frontend</p>
			<p>
				Experimenting with managing all state through redux (leaving all
				components as stateless functional components)
			</p>
			<p>Built using Redux Toolkit</p>
			<p>
				Purposely minimal, non responsive UI. I wanted to use this to play with
				some interesting tools. Not build css.
			</p>
		</Paper>
	);
};
