import React from 'react';
import { Link } from '@material-ui/core';

export interface ContactInfoProps {
	title: string;
	url: string;
	icon: JSX.Element;
}

export const ContactInfoItem = (props: ContactInfoProps) => {
	return (
		<div
			style={{ marginBottom: '3px', display: 'flex', alignContent: 'center' }}
		>
			{props.icon}
			<Link style={{ margin: '0px 13px 0px 3px' }} href={props.url}>
				{props.title}
			</Link>
		</div>
	);
};
