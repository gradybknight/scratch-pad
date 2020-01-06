export interface IBioItem {
	paragraphs: string[];
}

export interface IWorkHistoryItem {
	company: string;
	location: string;
	start: string;
	end: string;
	technologyStack: string[];
	paragraphs: string[];
}

interface IEducationHistoryItem {
	school: string;
	start: string;
	end: string;
	department: string;
	major?: string[];
}

interface ISpeakingEngagements {
	title: string;
	date: string;
	group: string;
	url: string;
}

export const bioItems: IBioItem[] = [
	{
		paragraphs: [
			`In my career I've worked as a management consultant in dozens of companies across a wide variety of sectors. I've driven complex process improvements in a contract biologics manufacuter and at one of the world's largest insulin manufacturers. I've built a distillery from the ground up, designing and leading the fabrication of the equipment as well as writing a novel automation and control system using modern web technologies.`,
			`Currently, I'm having the most fun I've ever had in a job. My current work is as a software engineer where I get to build or improve existing products for a wide variety of clients`,
			`The common thread in my career is my love of applying an engineer's mindset to real world problems.`,
		],
	},
];

export const workHistoryItems: IWorkHistoryItem[] = [
	{
		company: 'Smashing Boxes',
		location: 'Durham, NC',
		start: 'Feb-2019',
		end: 'Current',
		technologyStack: [
			'JavaScript',
			'TypeScript',
			'React',
			'React-Native',
			'Angular',
		],
		paragraphs: [
			'Staff Aug - work in distributed multinational teams',
			'Staff Aug - SDLC lifecycle',
			'Client work - Greenfield app design',
			'Client work - Responsible for modernization of existing apps - comfortable refactoring to modern standards',
			'Mobile work - Part of team that deployed RN app targeting both iOS and Android',
		],
	},
	{
		company: 'Social House Vodka',
		location: 'Raleigh, NC',
		start: 'Jul-2019',
		end: 'Current',
		technologyStack: [
			'TypeScript',
			'React',
			'React-Native',
			'Node',
			'AWS-EC2',
			'AWS-RDB',
			'RaspberryPi (IoT devices)',
			'Phidget (Pi connected controllers)',
		],
		paragraphs: [
			'Greenfield design of IoT connected facility',
			'React Native app',
			'React app',
			'Node/Express/MySQL backend deployed on AWS',
		],
	},
	{
		company: 'Pinetop Distillery',
		location: 'Raleigh, NC',
		start: 'Jan-2014',
		end: 'Jul-2019',
		technologyStack: [
			'JavaScript',
			'React',
			'Node',
			'AWS-EC2',
			'AWS-RDB',
			'RaspberryPi (IoT devices)',
			'Phidget (Pi connected controllers)',
		],
		paragraphs: [
			'Greenfield design of IoT connected facility',
			'React app',
			'Node/Express/MySQL backend deployed on AWS',
		],
	},
];
