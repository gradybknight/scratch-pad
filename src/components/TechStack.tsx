import React, { Fragment } from 'react';
import { PhaseOfUnderstanding, technologies } from '../constants/bioItems';

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
		<Fragment key={phase}>
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
								margin: '0px 5px',
								padding: '0px 10px',
							}}
						>
							{tech.name}
						</div>
					);
				})}
			</div>
		</Fragment>
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
