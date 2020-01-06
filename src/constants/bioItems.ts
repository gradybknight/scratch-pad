export interface IBioItem {
	paragraphs: string[];
}

export interface IWorkHistoryItem {
	company: string;
	title: string;
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
			`Currently, I'm having the most fun I've ever had in a job. I work as a software engineer where I get to build or improve existing products for a wide variety of clients.`,
			`Throughout my career I've worked as a management consultant in dozens of companies across a wide variety of sectors. In this work I used data-based systematic analyses to drive long lasting improvements.`,
			`I've driven complex improvements in a contract biologics manufacuter reducing cycle times for critical processes.`,
			`At one of the world's largest insulin manufacturers I led product transfers for multiple blockbuster drugs.`,
			`I've built a distillery from the ground up, designing and leading the fabrication of the equipment as well as writing a novel automation and control system using modern web technologies.`,
			`The common thread in my career is my love of applying an engineer's mindset to solving real world problems.`,
			`When I'm not writing code, you'll probably find me enjoying time with my two girls, wife, and dog. There's also a good chance you might find me sport climbing at a local crag.`,
		],
	},
];

export const workHistoryItems: IWorkHistoryItem[] = [
	{
		company: 'Smashing Boxes',
		title: 'Software Engineer',
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
		title: 'VP Operations',
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
		title: 'Principal Engineer, Founder',
		location: 'Raleigh, NC',
		start: 'Jan-2014',
		end: 'Jul-2019',
		technologyStack: [
			'JavaScript',
			'React',
			'Node',
			'AWS-EC2',
			'AWS-RDB',
			'MySQL',
			'RaspberryPi (IoT devices)',
			'Phidget (Pi connected controllers)',
		],
		paragraphs: [
			'Greenfield design of IoT connected facility',
			'React app',
			'Full Stack application deployed through Amazon Web Services (AWS)',
		],
	},
];

export const educationItems: IEducationHistoryItem[] = [
	{
		school: 'Tufts University',
		department: 'College of Engineering',
		major: ['BS Chemical Engineering', 'BS Biochemistry'],
		start: 'Aug-1997',
		end: 'May-2001',
	},
];

export type PhaseOfUnderstanding =
	| 'Core Tech Stack'
	| 'Competent'
	| 'Actively Experimenting'
	| 'Sooner, closer to later';
export interface Technology {
	icon?: JSX.Element;
	name: string;
	url: string;
	phaseOfUnderstanding: PhaseOfUnderstanding;
}
export const technologies: Technology[] = [
	{
		name: 'TypeScript',
		url: 'https://www.typescriptlang.org/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'React',
		url: 'https://reactjs.org/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'Redux',
		url: 'https://redux.js.org/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'React Native',
		url: 'https://facebook.github.io/react-native/',
		phaseOfUnderstanding: 'Core Tech Stack',
	},
	{
		name: 'Node',
		url: 'https://nodejs.org/en/',
		phaseOfUnderstanding: 'Competent',
	},
	{
		name: 'Angular',
		url: 'https://angular.io/',
		phaseOfUnderstanding: 'Competent',
	},
	{
		name: 'Reason',
		url: 'https://reasonml.github.io/',
		phaseOfUnderstanding: 'Actively Experimenting',
	},
	{
		name: 'Flutter / Dart',
		url: 'https://flutter.dev/',
		phaseOfUnderstanding: 'Actively Experimenting',
	},
	{
		name: 'Elm',
		url: 'https://elm-lang.org/',
		phaseOfUnderstanding: 'Actively Experimenting',
	},
	{
		name: 'Elixir',
		url: 'https://elixir-lang.org/',
		phaseOfUnderstanding: 'Sooner, closer to later',
	},
];
