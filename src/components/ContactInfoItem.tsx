import React from 'react';

export interface ContactInfoProps {
	title: string;
	iconName: string;
	url: string;
}

export const ContactInfoItem = (props: ContactInfoProps) => {
	return (
		<div>
			{props.title}
			{props.url}
		</div>
	);
};
