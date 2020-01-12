import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { IWorkHistoryItem } from '../constants/bioItems';
// company logos
import sb from '../images/sb.png';
import shv from '../images/shv.png';
import pt from '../images/pt.png';
import novo from '../images/novo.jpg';
import diosynth from '../images/diosynth.jpg';
import celerant from '../images/celerant.png';
// tech logos
// todo

const useStyles = makeStyles({
	wrapper: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		flexBasis: '100%',
		marginBottom: '10px',
		marginTop: '10px',
	},
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
	logo: {
		width: '50px',
		height: '50px',
		marginRight: '10px',
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
	headline: {},
	workItem: {},
});

export const WorkItem = (item: any) => {
	const workItem = item.item as IWorkHistoryItem;
	const classes = useStyles();
	const getLogo = () => {
		switch (workItem.company) {
			case 'Smashing Boxes':
				return sb;
			case 'Social House Vodka':
				return shv;
			case 'X/Celerant Consulting':
				return celerant;
			case 'FUJIFILM Diosynth Biotechnologies':
				return diosynth;
			case 'Pinetop Distillery':
				return pt;
			case 'Novo Nordisk':
				return novo;
		}
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.leftColumn}>
				<Avatar
					alt={workItem.company}
					src={getLogo()}
					variant="square"
					className={classes.logo}
				/>
			</div>
			<div className={classes.centerColumn}>
				<div className={classes.majorFont}>
					{workItem.company} - {workItem.title}
				</div>
				<div>
					<ul style={{ margin: '0px' }}>
						{workItem.paragraphs.map((p: string) => (
							<li style={{ marginBottom: '3px' }}>{p}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={classes.rightColumn}>
				<div className={classes.minorFont}>
					{workItem.start} - {workItem.end}
				</div>
				<div className={classes.minorFont}>{workItem.location}</div>
			</div>
		</div>
	);
};

// return (
// 	<div style={{ display: 'flex', flexBasis: '100%', marginBottom: '3px' }}>
// 		<div
// 			style={{
// 				display: 'flex',
// 				flexDirection: 'column',
// 				flexBasis: '20%',
// 			}}
// 		>
// 			<div>
// 				{start} - {end}
// 			</div>
// 			<div>{location}</div>
// 		</div>
// 		<div
// 			style={{
// 				display: 'flex',
// 				flexDirection: 'column',
// 				flexBasis: '80%',
// 			}}
// 		>
// 			<div
// 				style={{
// 					fontSize: '1.15rem',
// 					fontWeight: 'bold',
// 					marginBottom: '5px',
// 				}}
// 			>
// {company} - {title}
// 			</div>
// <div
// 	style={{
// 		marginTop: '5px',
// 	}}
// >
// 	<span
// 		style={{
// 			fontWeight: 'bold',
// 			marginTop: '5px',
// 		}}
// 	>
// 		Technology Stack:{' '}
// 	</span>
// 	{technologyStack.map((tech: string, idx: number) => {
// 		return (
// 			<span>
// 				{' '}
// 				{tech}
// 				{idx !== technologyStack.length - 1 ? ' ||' : null}
// 			</span>
// 		);
// 	})}
// </div>
// 		</div>
// 	</div>
// );
