// TODO: Add a new section called personality talk about leading skills and ethics/values
const bio = {
	name: 'David Villarreal',
	role: 'Software Engineer',
	email: 'steadypathapp@gmail.com',
	location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},

	profiles: {
		github: 'https://github.com/Phaze1D',
		codefights: 'https://codefights.com/profile/playssss',
		stackoverflow: 'http://stackoverflow.com/story/davidstory',
		linkedin: 'https://www.linkedin.com/in/david-villarreal-720ab5134/',
	},

	about: `
	Since I was a kid I have always loved to do 2 things, create and solve. I got into computers the moment my dad bought one for his work and I immediately wanted to know how they worked in the hopes of building one myself. While researching computers I came across the software side of things, which was a perfect fit for me, a way I could create and solve.
	`,

	images: ['https://avatars0.githubusercontent.com/u/8495952?v=3'],
}


export default function (command) {

	return bio
}
