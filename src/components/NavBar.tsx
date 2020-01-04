import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../model/rootReducer';
import { setCurrentTab } from '../model/globalUserInterfaceSlice';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export interface NavItem {
	displayName: string;
	isSelected: boolean;
}
const navItems: NavItem[] = [
	{
		displayName: 'Overview',
		isSelected: true,
	},
	{
		displayName: 'Projects',
		isSelected: false,
	},
	{
		displayName: 'Scratch Pad',
		isSelected: false,
	},
	{
		displayName: 'Resume',
		isSelected: false,
	},
	{
		displayName: 'About this site',
		isSelected: false,
	},
];

export const NavBar = () => {
	const dispatch = useDispatch();
	const { tabIndex } = useSelector(
		(state: RootState) => state.globalUserInterface
	);
	const classes = useStyles();

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		dispatch(setCurrentTab(newValue));
	};

	return (
		<Paper elevation={0} className={classes.root}>
			<Tabs
				value={tabIndex}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				{navItems.map((navItem, index) => {
					return (
						<Tab disableRipple={true} label={navItem.displayName} key={index} />
					);
				})}
			</Tabs>
		</Paper>
	);
};
