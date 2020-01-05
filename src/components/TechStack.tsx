import React, { Fragment } from 'react';
import { List, ListItemText, ListSubheader } from '@material-ui/core';

type PhaseOfUnderstanding =
	| 'Core Tech Stack'
	| 'Competent'
	| 'Actively Experimenting'
	| 'Sooner, closer to later';
interface Technology {
	icon?: JSX.Element;
	name: string;
	url: string;
	phaseOfUnderstanding: PhaseOfUnderstanding;
}
const technologies: Technology[] = [
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'React',
		url: 'https://reactjs.org/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'React Native',
		url: 'https://facebook.github.io/react-native/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	// {
	// 	name: 'Redux',
	// 	url: 'https://redux.js.org/',
	// 	phaseOfUnderstanding: 'Core Tech Stack',
	// },
	{
		name: 'Node',
		url: 'https://nodejs.org/en/',
		phaseOfUnderstanding: 'Competent',
	},
	{
		name: 'Angular',
		url: 'https://angular.io/',
		phaseOfUnderstanding: 'Competent',
	},
	{
		name: 'Reason',
		url: 'https://reasonml.github.io/',
		phaseOfUnderstanding: 'Actively Experimenting',
	},
	{
		name: 'Flutter / Dart',
		url: 'https://flutter.dev/',
		phaseOfUnderstanding: 'Actively Experimenting',
	},
	{
		name: 'Elm',
		url: 'https://elm-lang.org/',
		phaseOfUnderstanding: 'Actively Experimenting',
	},
	{
		name: 'Elixir',
		url: 'https://elixir-lang.org/',
		phaseOfUnderstanding: 'Sooner, closer to later',
	},
];

const categories: PhaseOfUnderstanding[] = [
	'Core Tech Stack',
	'Competent',
	'Actively Experimenting',
	'Sooner, closer to later',
];
const showTechsFor = (phase: PhaseOfUnderstanding) => {
	const specificTechs = technologies.filter(
		tech => tech.phaseOfUnderstanding === phase
	);
	return (
		<Fragment key={phase}>
			{/* <p>{phase}</p> */}
			<List
				subheader={
					<ListSubheader style={{ marginBottom: '3px' }} component="div">
						{phase}
					</ListSubheader>
				}
			>
				{specificTechs.map((tech, index) => {
					return <ListItemText primary={tech.name} key={index} />;
				})}
			</List>
		</Fragment>
	);
};
export const TechStack = () => {
	return (
		<Fragment>
			<h3 style={{ marginBottom: '3px' }}>Technologies</h3>
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
