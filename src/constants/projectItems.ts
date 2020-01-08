export interface ProjectInformation {
	projectId: number;
	projectName: string;
	projectSubTitle: string[];
	githubLink: string;
}
export const projectInformations: ProjectInformation[] = [
	{
		projectId: 0,
		projectName: 'Portfolio Site',
		projectSubTitle: [
			`This site is as much an excuse to play with state patterns as much as it is a portfolio site`,
			`Redux Toolkit is used to maintain all state while each component is left functional and stateless.`,
		],
		githubLink: 'https://github.com/gradybknight/scratch-pad',
	},
];
