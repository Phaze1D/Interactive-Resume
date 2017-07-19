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
	I have always been inspired by people who create art because I have never
	been able to do it, until I found out how to code. I feel like coding
	satisfies my logical side, and at the same time, it gives me a way to create
	amazing and beautiful art in the form of code.
	`,

	images: ['https://avatars0.githubusercontent.com/u/8495952?v=3'],
}


export default function (command) {

	return bio
}
