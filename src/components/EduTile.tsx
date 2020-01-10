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
		alignContent: 'flex-end',
	},
	majorFont: {
		fontSize: '1.07em',
		fontWeight: 'bold',
		marginBottom: '4px',
	},
	minorFont: {
		color: 'rgba(0, 0, 0, 0.54)',
		fontSize: '0.875rem',
		fontWeight: 500,
	},
	logo: {
		width: '30px',
		height: '30px',
	},
	pushRight: {
		paddingLeft: '5px',
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
			{/* <div className={classes.leftColumn}>{schoolLogo}</div> */}
			<div className={classes.centerColumn}>
				<div className={classes.majorFont}>{school}</div>
				<div className={classes.pushRight}>{!certificate && degree}</div>
				<div className={classes.pushRight}>
					{majors &&
						majors.map(major => (
							<div className={classes.minorFont}>{major}</div>
						))}
				</div>
			</div>
			<div className={(classes.rightColumn, classes.minorFont)}>
				<div>{location}</div>
				<div>
					{yearStart}-{yearEnd}
				</div>
			</div>
		</div>
	);
};

export default EduTile;
