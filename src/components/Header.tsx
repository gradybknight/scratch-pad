import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Header = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			<Typography variant="h2" component="h1">
				Grady Knight
			</Typography>
		</div>
	);
};
