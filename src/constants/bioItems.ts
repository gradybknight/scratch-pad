export interface IBioItem {
	title: string;
	paragraphs: string[];
}
export const bioItems: IBioItem[] = [
	{
		title: 'Bio',
		paragraphs: [
			`Here's a little bit about me.`,
			`I'm currently intested in the following tech's`,
			`Previously I built a distillery, founded a business, and helped launch a couple Blockbuster pharmaceutial products`,
		],
	},
	{
		title: 'Work Experience',
		paragraphs: [
			`Smashing Boxes`,
			`Pinetop Distillery`,
			`Novo Nordisk`,
			`Diosynth Biotechnology`,
			`Celerant Consulting`,
		],
	},
	{
		title: 'Education',
		paragraphs: [
			`Tufts University College of Engineering`,
			`Indiana University Graduate College (Chemistry)`,
		],
	},
];
