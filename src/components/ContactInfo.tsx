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
	{
		url: 'tel:919.800.1473',
		title: '919.800.1473',
		icon: <PhoneIphoneIcon />,
	},
	{
		url: 'mailto:grady.knight@gmail.com',
		title: 'grady.knight@gmail.com',
		icon: <EmailIcon />,
	},
];

export const ContactInfo = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			{contactInfoItems.map((item, index) => {
				return <ContactInfoItem key={index} {...item} />;
			})}
		</div>
	);
};
