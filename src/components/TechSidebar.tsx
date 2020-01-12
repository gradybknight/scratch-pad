import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PhaseOfUnderstanding, technologies } from '../constants/bioItems';

import { ReactComponent as JS } from '../images/JS.svg';
import { ReactComponent as ReactSvg } from '../images/react.svg';
import { ReactComponent as Redux } from '../images/redux.svg';
import { ReactComponent as Mui } from '../images/mui.svg';
import { ReactComponent as Node } from '../images/node.svg';
import { ReactComponent as EC2 } from '../images/ec2.svg';
import { ReactComponent as RDB } from '../images/rdb.svg';
import { ReactComponent as MySql } from '../images/mysql.svg';
import { ReactComponent as DynamoDb } from '../images/dynamo.svg';
import { ReactComponent as Phidget } from '../images/phidget.svg';

const useStyles = makeStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	phase: {
		color: 'rgba(0,0,0,0.54)',
		fontSize: '0.875rem',
		fontWeight: 500,
		margin: '0px 5px 5px 5px',
		padding: '0px 5px',
	},
});

const TechSidebar = () => {
	const classes = useStyles();
	const categories: PhaseOfUnderstanding[] = [
		'Core Tech Stack',
		'Competent',
		'Actively Experimenting',
		'On My List',
	];
	const showTechsFor = (phase: PhaseOfUnderstanding) => {
		const specificTechs = technologies.filter(
			tech => tech.phaseOfUnderstanding === phase
		);
	};
	return <div className={classes.wrapper}></div>;
};
