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
	const theLogo = schoolLogo === 'iu' ? iu : schoolLogo === 'unc' ? unc : tufts;

	return (
		<div className={classes.flexRow}>
			<div className={classes.centerColumn}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					<Avatar alt={school} src={theLogo} variant="square" />
					{/* <img alt={school} src={iu} /> */}
					<div className={(classes.centerColumn, classes.pushRight)}>
						<div className={classes.majorFont}>{school}</div>
						<div className={classes.pushRight}>{!certificate && degree}</div>
						<div className={classes.pushRight}>
							{majors &&
								majors.map(major => (
									<div className={classes.minorFont}>{major}</div>
								))}
						</div>
					</div>
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
