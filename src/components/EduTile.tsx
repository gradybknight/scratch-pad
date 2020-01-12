import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { EduInformation } from '../constants/eduItems';
import { Avatar } from '@material-ui/core';
import iu from '../images/iu.jpeg';
import tufts from '../images/tufts.jpeg';
import unc from '../images/unc.jpg';

const useStyles = makeStyles({
	flexRow: {
		display: 'flex',
		width: '100%',
		alignContent: 'center',
		justifyContent: 'space-between',
		marginBottom: '5px',
	},
	wrapper: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		flexBasis: '100%',
		marginBottom: '3px',
	},
	//
	leftColumn: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		paddingLeft: '10px',
	},
	centerColumn: {
		display: 'flex',
		flex: 7,
		flexDirection: 'column',
	},
	rightColumn: {
		display: 'flex',
		flex: 2,
		paddingLeft: '10px',
		flexDirection: 'column',
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
		width: '50px',
		height: '50px',
		marginRight: '10px',
	},
	pushRight: {
		paddingLeft: '5px',
	},
	alignEnd: {
		alignSelf: 'flex-end',
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
	const theLogo = schoolLogo === 'iu' ? iu : schoolLogo === 'unc' ? unc : tufts;

	return (
		<div className={classes.wrapper}>
			<div className={classes.leftColumn}>
				<Avatar
					alt={school}
					src={theLogo}
					variant="square"
					style={{ marginRight: '10px', width: '50px', height: '50px' }}
				/>
			</div>
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
			<div className={classes.rightColumn}>
				<div className={classes.minorFont}>
					<div className={classes.alignEnd}>{location}</div>
					<div className={classes.alignEnd}>
						{yearStart}-{yearEnd}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EduTile;
