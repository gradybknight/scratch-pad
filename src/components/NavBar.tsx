import React from 'react';
import { baseStyle } from '../utils/baseStyling';

interface Props {
	theme: 'light' | 'dark';
}

export const NavBar = () => {
	const styles = {
		...baseStyle.commonComponents,
		headline: {
			fontSize: '2rem',
		},
		paddingAll: {
			padding: '10px',
		},
	};

	interface NavItem {
		index: number;
		displayName: string;
		isSelected: boolean;
	}
	const navItems: NavItem[] = [
		{
			index: 0,
			displayName: 'Overview',
			isSelected: true,
		},
		{
			index: 1,
			displayName: 'Projects',
			isSelected: false,
		},
		{
			index: 2,
			displayName: 'Scratch Pad',
			isSelected: false,
		},
		{
			index: 3,
			displayName: 'Resume',
			isSelected: false,
		},
	];
	return (
		<div
			style={{
				...styles.flexContainer,
				...styles.centered,
				...styles.paddingAll,
				justifyContent: 'space-around',
			}}
		>
			<ul>
				{navItems.map(navItem => (
					<li>{navItem.displayName}</li>
				))}
			</ul>
		</div>
	);
};
