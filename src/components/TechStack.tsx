import React, { Fragment } from 'react';
import { PhaseOfUnderstanding, technologies } from '../constants/bioItems';

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
// import { Avatar } from '@material-ui/core';
import elixir from '../images/elixir.png';

const renderLogo = (tech: string) => {
	switch (tech) {
		case 'JavaScript':
			return <JS style={{ width: '20', height: '20' }} />;
		case 'TypeScript':
			return <TS style={{ width: '20', height: '20' }} />;
		case 'React':
			return <ReactSvg style={{ width: '20', height: '20' }} />;
		case 'Redux':
			return <Redux style={{ width: '20', height: '20' }} />;
		case 'React Native':
			return <RN style={{ width: '20', height: '20' }} />;
		case 'Node':
			return <Node style={{ width: '20', height: '20' }} />;
		case 'Angular':
			return <Angular style={{ width: '20', height: '20' }} />;
		case 'Flutter / Dart':
			return <Flutter style={{ width: '20', height: '20' }} />;
		case 'Elm':
			return <Elm style={{ width: '20', height: '20' }} />;
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
			return <Reason style={{ width: '20', height: '20' }} />;
	}
};

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
	return (
		<div style={{ marginBottom: '2px' }} key={phase}>
			<div
				style={{
					color: 'rgba(0,0,0,0.54)',
					fontSize: '0.875rem',
					fontWeight: 500,
					margin: '0px 5px 5px 5px',
					padding: '0px 5px',
				}}
			>
				{phase}
			</div>
			<div style={{ marginBottom: '10px' }}>
				{specificTechs.map((tech, index) => {
					return (
						<div
							key={index}
							style={{
								color: 'rgba(0,0,0,1)',
								fontSize: '0.875rem',
								fontWeight: 500,
								marginBottom: '5px',
								padding: '0px 10px',
								display: 'flex',
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							{renderLogo(tech.name)}
							<div
								style={{
									padding: '4px 0px 0px 5px',
								}}
							>
								{tech.name}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export const TechStack = () => {
	return (
		<Fragment>
			<div
				style={{
					display: 'flex',
					flexBasis: '100%',
					flexDirection: 'column',
					padding: '5px',
					margin: '0px 5px 10px 5px',
				}}
			>
				<h3 style={{ margin: '0px', padding: '0px' }}>Technologies</h3>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
				}}
			>
				{categories.map(cat => showTechsFor(cat))}
			</div>
		</Fragment>
	);
};
