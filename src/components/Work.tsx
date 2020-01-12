import React from 'react';
import { workHistoryItems } from '../constants/bioItems';
import { WorkItem } from './WorkItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../model/rootReducer';
import { setSectionVisibility } from '../model/overviewInterfaceSlice';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Divider } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import sb from '../images/sb.png';
import shv from '../images/shv.png';
import pt from '../images/pt.png';
import novo from '../images/novo.png';
import diosynth from '../images/diosynth.jpg';
import celerant from '../images/celerant.png';

const renderTiles = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<Avatar
				alt="Smashing Boxes"
				src={sb}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="Social House Vodka"
				src={shv}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="Pinetop Distillery"
				src={pt}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="Novo Nordisk"
				src={novo}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="Diosynth Biotechnology"
				src={diosynth}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="Celerant Consulting"
				src={celerant}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
		</div>
	);
};

export const Work = () => {
	const dispatch = useDispatch();
	const { workVisible } = useSelector(
		(state: RootState) => state.overviewInterface
	);
	const toggleVisibility = (futureVis: boolean) => {
		dispatch(
			setSectionVisibility({ section: 'workVisible', value: futureVis })
		);
	};
	return (
		<div
			style={{
				display: 'flex',
				flexBasis: '100%',
				boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
				transition: '0.3s',
				flexDirection: 'column',
				padding: '5px',
				margin: '0px 5px',
			}}
		>
			<div
				onClick={() => toggleVisibility(!workVisible)}
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%',
					padding: '5px',
					cursor: 'pointer',
				}}
			>
				<h3 style={{ margin: '0px', padding: '0px' }}>Work History</h3>
				{workVisible ? null : renderTiles()}
				{workVisible ? (
					<KeyboardArrowDownIcon
						style={{ marginRight: '5px', color: 'blue' }}
					/>
				) : (
					<KeyboardArrowUpIcon style={{ marginRight: '5px', color: 'blue' }} />
				)}{' '}
			</div>

			{workVisible ? (
				<div
					style={{ display: 'flex', padding: '5px', flexDirection: 'column' }}
				>
					{workHistoryItems.map((workItem, index) => (
						<div style={{ marginTop: '5px' }}>
							<WorkItem item={workItem} />
							{index === workHistoryItems.length - 1 ? null : (
								<Divider variant="fullWidth" />
							)}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};
