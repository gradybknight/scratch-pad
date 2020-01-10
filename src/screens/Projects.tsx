import React from 'react';
import { Paper } from '@material-ui/core';
import PortfolioCard from '../components/PortfolioCard';
import PinetopCard from '../components/PinetopCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	rowDiv: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap',
	},
});

export const Projects = () => {
	const classes = useStyles();

	return (
		<Paper style={{ padding: '10px', minHeight: '80vh' }}>
			<div className={classes.rowDiv}>
				<PortfolioCard />
				<PinetopCard />
			</div>
		</Paper>
	);
};
