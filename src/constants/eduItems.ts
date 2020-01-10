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
		schoolLogo: 'tufts',
		yearEnd: 2001,
		yearStart: 1997,
		majors: ['Chemical Engineering', 'Biochemistry'],
	},
	{
		certificate: false,
		degree: 'Ph.D. Candidate',
		location: 'Bloomington, IN',
		school: 'Indiana University College of Arts and Sciences',
		schoolLogo: 'iu',
		yearEnd: 2002,
		yearStart: 2001,
		majors: ['Organic Chemistry - Total Synthesis'],
	},
	{
		certificate: true,
		degree: '',
		location: 'Raleigh, NC',
		school: 'UNC Coding Bootcamp',
		schoolLogo: 'unc',
		yearEnd: 2018,
		yearStart: 2018,
		majors: [],
	},
];
