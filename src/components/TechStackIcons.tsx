import React from 'react';
import {
	PhaseOfUnderstanding,
	technologies,
	Technology,
} from '../constants/bioItems';

import { ReactComponent as TS } from '../images/TS.svg';
import { ReactComponent as JS } from '../images/JS.svg';
import { ReactComponent as ReactSvg } from '../images/react.svg';
import { ReactComponent as Redux } from '../images/redux.svg';
import { ReactComponent as Elm } from '../images/elm.svg';
import { ReactComponent as Node } from '../images/node.svg';
import { ReactComponent as Angular } from '../images/ng.svg';
import { ReactComponent as Flutter } from '../images/flutter.svg';
import { ReactComponent as RN } from '../images/RN.svg';
import { ReactComponent as Reason } from '../images/reason.svg';
import elixir from '../images/elixir.png';
import { makeStyles } from '@material-ui/core';

const renderLogo = (tech: string) => {
	switch (tech) {
		case 'JavaScript':
			return <JS style={{ width: '30', height: '30' }} />;
		case 'TypeScript':
			return <TS style={{ width: '30', height: '30' }} />;
		case 'React':
			return <ReactSvg style={{ width: '30', height: '30' }} />;
		case 'Redux':
			return <Redux style={{ width: '30', height: '30' }} />;
		case 'React Native':
			return <RN style={{ width: '30', height: '30' }} />;
		case 'Node':
			return <Node style={{ width: '30', height: '30' }} />;
		case 'Angular':
			return <Angular style={{ width: '30', height: '30' }} />;
		case 'Flutter / Dart':
			return <Flutter style={{ width: '30', height: '30' }} />;
		case 'Elm':
			return <Elm style={{ width: '30', height: '30' }} />;
		case 'Elixir':
			return (
				<img
					alt="Elixir"
					style={{ width: '20px', height: '20px' }}
					src={elixir}
					// variant="square"
				/>
			);
		case 'Reason':
			return <Reason style={{ width: '30', height: '30' }} />;
	}
};

const categories: PhaseOfUnderstanding[] = [
	'Core Tech Stack',
	'Competent',
	// 'Actively Experimenting',
];

const useStyles = makeStyles({
	flexRow: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-center',
	},
	flexContainer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-center',
		margin: '10px 0px 10px 5px',
	},
	smallIcon: {
		width: '15px',
		height: '15px',
	},
});
const filterForActive = (tech: Technology) =>
	categories.includes(tech.phaseOfUnderstanding);
const whichTechs = technologies.filter(filterForActive);

const TechStackIcons = () => {
	const classes = useStyles();
	return (
		<div className={classes.flexContainer}>
			<div className={classes.flexRow}>
				{whichTechs.map(tech => renderLogo(tech.name))}
			</div>
		</div>
	);
};

export default TechStackIcons;
