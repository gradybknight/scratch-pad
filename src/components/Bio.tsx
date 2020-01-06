import React from 'react';
import { bioItems } from '../constants/bioItems';
import { BioItem } from './BioItem';
import { workHistoryItems } from '../constants/bioItems';
import { WorkItem } from './WorkItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../model/rootReducer';
import { setSectionVisibility } from '../model/overviewInterfaceSlice';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const Bio = () => {
	const dispatch = useDispatch();
	const { bioVisible } = useSelector(
		(state: RootState) => state.overviewInterface
	);
	const toggleVisibility = (futureVis: boolean) => {
		dispatch(setSectionVisibility({ section: 'bioVisible', value: futureVis }));
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
				onClick={() => toggleVisibility(!bioVisible)}
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%',
					padding: '5px',
					cursor: 'pointer',
				}}
			>
				<h3 style={{ margin: '0px', padding: '0px' }}>A Bit About Me:</h3>
				{bioVisible ? (
					<KeyboardArrowDownIcon
						style={{ marginRight: '5px', color: 'blue' }}
					/>
				) : (
					<KeyboardArrowUpIcon style={{ marginRight: '5px', color: 'blue' }} />
				)}{' '}
			</div>

			{bioVisible ? (
				<div
					style={{ display: 'flex', padding: '5px', flexDirection: 'column' }}
				>
					{bioItems.map(item => (
						<BioItem paragraphs={item.paragraphs} />
					))}
				</div>
			) : null}
		</div>
	);
};
