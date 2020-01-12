import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../model/rootReducer';
import { setSectionVisibility } from '../model/overviewInterfaceSlice';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Divider } from '@material-ui/core';

import { Avatar } from '@material-ui/core';
import iu from '../images/iu.jpeg';
import tufts from '../images/tufts.jpeg';
import unc from '../images/unc.jpg';

import EduTile from './EduTile';
import { eductionHistory } from '../constants/eduItems';

const renderTiles = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<Avatar
				alt="Tufts University"
				src={tufts}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="Indiana University"
				src={iu}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
			<Avatar
				alt="UNC Coding Bootcamp"
				src={unc}
				variant="square"
				style={{ marginRight: '10px', width: '30px', height: '30px' }}
			/>
		</div>
	);
};

export const Edu = () => {
	const dispatch = useDispatch();
	const { educationVisible } = useSelector(
		(state: RootState) => state.overviewInterface
	);
	const toggleVisibility = (futureVis: boolean) => {
		dispatch(
			setSectionVisibility({ section: 'educationVisible', value: futureVis })
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
				onClick={() => toggleVisibility(!educationVisible)}
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%',
					padding: '5px',
					cursor: 'pointer',
				}}
			>
				<h3 style={{ margin: '0px', padding: '0px' }}>Education</h3>
				{educationVisible ? null : renderTiles()}
				{educationVisible ? (
					<KeyboardArrowDownIcon
						style={{ marginRight: '5px', color: 'blue' }}
					/>
				) : (
					<KeyboardArrowUpIcon style={{ marginRight: '5px', color: 'blue' }} />
				)}
			</div>
			{educationVisible ? (
				<div
					style={{ display: 'flex', padding: '5px', flexDirection: 'column' }}
				>
					{eductionHistory.map((eduItem, index) => (
						<div style={{ marginTop: '5px' }}>
							<EduTile
								certificate={eduItem.certificate}
								degree={eduItem.degree}
								location={eduItem.location}
								school={eduItem.school}
								schoolLogo={eduItem.schoolLogo}
								yearStart={eduItem.yearStart}
								yearEnd={eduItem.yearEnd}
								majors={eduItem.majors}
								key={index}
							/>
							{index === eductionHistory.length - 1 ? null : (
								<Divider variant="fullWidth" />
							)}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};
