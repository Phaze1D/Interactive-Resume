// TODO: Add a new section called personality talk about leading skills and ethics/values
const bio = {
	name: 'David Villarreal',
	role: 'Software Engineer',
	email: 'steadypathapp@gmail.com',
	location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},

	profiles: {
		github: 'https://github.com/Phaze1D',
		codefights: 'https://codefights.com/profile/phaze1d',
		stackoverflow: 'http://stackoverflow.com/story/davidstory',
		linkedin: 'https://www.linkedin.com/in/david-villarreal-720ab5134/',
	},

	about: `
	I have always loved to do 2 things, create and solve. I got into computers the moment my dad bought his first one and I immediately wanted to know how they worked in the hopes of building one myself. While researching computers I came across the software side of things, which was a perfect fit for me, a way I could create and solve.

	I would say that I have a very balanced work ethic. I never push myself to a point where I get burnt out. I keep my mind in the sweet spot always motivated to work and always interested in learning.
	`,

	codeEthic: `
	I know that in the world of software engineering there are many possible solutions to one answer so when I approach a solution I keep 3 things in mind, performance, organized code, and security. I am not the type of coder that writes a lot of code just to get it to work. I must always understand every single line of code that I write or it will keep me up at night and I really don't like looking at messy code so I tend to refactor as often as possible.

	When it comes to working in teams I keep the same 3 principles (performance, organized code, and security) in mind but am a lot more opened minded and understanding of other peoples code.
	`,

	images: ['https://avatars0.githubusercontent.com/u/8495952?v=3'],
}


export default function (command) {

	return bio
}
