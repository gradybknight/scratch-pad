import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ContactInfoItem, ContactInfoProps } from './ContactInfoItem';

const contactInfoItems: ContactInfoProps[] = [
	{
		url: 'https://github.com/gradybknight',
		title: 'github',
		icon: <GitHubIcon />,
	},
	{
		url: 'https://www.linkedin.com/in/gradyknight',
		title: 'LinkedIn',
		icon: <LinkedInIcon />,
	},
];

export const ContactInfo = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{contactInfoItems.map(item => {
				return <ContactInfoItem {...item} />;
			})}
		</div>
	);
};
