import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { EduInformation } from '../constants/eduItems';

const useStyles = makeStyles({
	flexRow: {
		display: 'flex',
		width: '100%',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	leftColumn: {
		flexBasis: '1',
		display: 'flex',
		flexDirection: 'column',
	},
	centerColumn: {
		flexBasis: '5',
		display: 'flex',
		flexDirection: 'column',
	},
	rightColumn: {
		flexBasis: '1',
		display: 'flex',
		flexDirection: 'column',
	},
});

const EduTile = ({
	school,
	location,
	degree,
	majors,
	yearStart,
	yearEnd,
	schoolLogo,
	certificate,
}: EduInformation) => {
	const classes = useStyles();

	return (
		<div className={classes.flexRow}>
			<div className={classes.leftColumn}>{school}</div>
			<div className={classes.centerColumn}>{majors}</div>
			<div className={classes.rightColumn}>
				{yearStart}-{yearEnd}
			</div>
		</div>
	);
};

export default EduTile;
