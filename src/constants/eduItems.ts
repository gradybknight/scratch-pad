export interface EduInformation {
	school: string;
	location: string;
	degree: string;
	majors?: string[];
	yearStart: number;
	yearEnd: number;
	certificate: boolean;
	schoolLogo: string;
}

export const eductionHistory: EduInformation[] = [
	{
		certificate: false,
		degree: 'Bachelors of Science in Engineering',
		location: 'Medford, MA',
		school: 'Tufts University College of Engineering',
		schoolLogo: 'TuftsLogo.png',
		yearEnd: 2001,
		yearStart: 1997,
		majors: ['BS Chemical Engineering', 'Biochemistry'],
	},
	{
		certificate: false,
		degree: 'Ph.D. Candidate',
		location: 'Bloomington, IN',
		school: 'Indiana University Department of Chemistry',
		schoolLogo: 'Indiana.png',
		yearEnd: 2001,
		yearStart: 2002,
		majors: [],
	},
	{
		certificate: true,
		degree: '',
		location: 'Raleigh, NC',
		school: 'UNC Coding Bootcamp',
		schoolLogo: 'UNC.png',
		yearEnd: 2018,
		yearStart: 2018,
		majors: ['BS Chemical Engineering', 'Biochemistry'],
	},
];
