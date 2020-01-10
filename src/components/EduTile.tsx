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
			<div className={classes.leftColumn}>{schoolLogo}</div>
			<div className={classes.centerColumn}>
				<div>{school}</div>
				<div>{!certificate && degree}</div>
				<div>{majors && majors.map(major => <div>major</div>)}</div>
			</div>
			<div className={classes.rightColumn}>
				<div>{location}</div>
				{yearStart}-{yearEnd}
			</div>
		</div>
	);
};

export default EduTile;
