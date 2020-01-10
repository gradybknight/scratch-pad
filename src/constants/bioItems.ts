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
			`I started writing code in HS in Pascal (I'll let you do the math on how long ago that was). In college I couldn't believe anyone would ever pay me to write code for a living, so I chose a dual major in Chemical Engineering and Biochemistry because it was a guaranteed job upon graduation.`,
			`After spending far too long coding on the side in jobs I didn't love, I've changed careers, becoming a software engineer.`,
			`I still can't believe I get paid to do this. However, as long as that lasts, I'm having the most fun I've had in decades getting to build or improve products for a wide variety of clients.`,
			`Throughout my career I've worked as a management consultant in dozens of companies across a wide variety of sectors. In this work I used data-based systematic analyses to drive long lasting improvements.`,
			`I've driven complex improvements in a contract biologics manufacuter reducing cycle times for critical processes.`,
			`At one of the world's largest insulin manufacturers I led product transfers for multiple blockbuster drugs.`,
			`I've built a distillery from the ground up, designing and leading the fabrication of the equipment as well as writing a novel automation and control system using modern web technologies.`,
			`The common thread in my career is my love of applying an engineer's mindset to solving real world problems.`,
			`When I'm not writing code, you'll probably find me enjoying time with my two girls, wife, and dog. There's also a good chance you might find me sport climbing at a local crag, experimenting with a craft cocktail, or buried in documentation trying to pick up a new programming language.`,
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
			'Built the data management layer of a clientapplication including adding redux and datapersistence to the application.',
			`Participated in the de novo creation and delivery ofa React Native application to streamline corebusiness processes for our client. This includedadding authentication and redux to the application.Additional work creating UI components screenswhich interact with the device's camera.`,
			`Developed dashboards and visualizations as part ofthe Cisco UX team. This work largely centered onAngular and RxJS. Additionally, this involvedmodifying the core component library for Cisco's UXangular apps.`,
			`Worked with a financial technology company torefactor a complex React/Redux applicationincluding migration to modern React practices.`,
		],
	},
	{
		company: 'Social House Vodka',
		title: 'Principal Engineering Advisor',
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
			`Responsible for constructing and maintainingprediction models to assess total capacity as well asunit operation performance.`,
			`Responsible for setting direction for operations andsupply chain.`,
			`Designing and implementing a full stack solution tomonitor and control critical operations in thedistillery. The tech stack includes React/Redux/Typescript as a single page app, Node/Expresshosted in Amazon Web Services (AWS) as thebackend, and Raspberry Pis as connected devicesto either collect process data or control set points.`,
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
			`Designed and developed a novel approach to automating critical distillation equipment. Physically, this included designing and sourcing fabrication of the equipment. On the software side, this included designing, writing and deploying the full stack application to control and monitor production.`,
		],
	},
	{
		company: 'Novo Nordisk',
		title: 'Senior Black Belt (Senior Project Manager)',
		location: 'Raleigh, NC',
		start: 'Jul-2010',
		end: 'Feb-2019',
		technologyStack: [
			'JavaScript',
			'React',
			'Redux',
			'Node',
			'MySQL',
			'RaspberryPi (IoT devices)',
			'Phidget (Pi connected controllers)',
		],
		paragraphs: [
			`Designed novel Discrete Event Process Simulations tomodel factory operations.`,
			`Designed webapp to track of critical manufacturingactivities. Designed reporting tools to allow forcross-site visualization of data.`,
			`Designed connected (IoT) data collection systems.`,
		],
	},
	{
		company: 'FUJIFILM Diosynth Biotechnologies',
		title: 'QA Technical Specialist',
		location: 'Morrisville, NC',
		start: 'Jun-2006',
		end: 'Jun-2010',
		technologyStack: ['VBA', 'Access', 'Excel'],
		paragraphs: [
			`Designed reporting tools to allow for cross-site visualization of data.`,
		],
	},
	{
		company: 'X/Celerant Consulting',
		title: 'Associate Project Manager',
		location: 'Lexington, MA',
		start: 'Jun-2002',
		end: 'Jun-2006',
		technologyStack: ['VBA', 'Access', 'Excel'],
		paragraphs: [
			`Designed monte carlo models and other statistical analyses to predict and assess process capability.`,
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
	| 'On My List';
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
		phaseOfUnderstanding: 'On My List',
	},
];
