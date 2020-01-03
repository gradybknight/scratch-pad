import React from 'react';
import { baseStyle } from '../utils/baseStyling';

interface Props {
	theme: 'light' | 'dark';
}

export const Header = (props: Props) => {
	const styles = {
		...baseStyle[props.theme],
		...baseStyle.commonComponents,
		headline: {
			fontSize: '2rem',
		},
		paddingAll: {
			padding: '10px',
		},
	};
	return (
		<div
			style={{
				...styles.flexContainer,
				...styles.centered,
				...styles.paddingAll,
				flexDirection: 'column',
			}}
		>
			<div style={{ ...styles.headline, ...styles.primaryText }}>
				Grady Knight
			</div>
		</div>
	);
};
