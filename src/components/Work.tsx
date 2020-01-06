import React from 'react';
import { workHistoryItems } from '../constants/bioItems';
import { WorkItem } from './WorkItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../model/rootReducer';
import { setSectionVisibility } from '../model/overviewInterfaceSlice';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Divider } from '@material-ui/core';

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
