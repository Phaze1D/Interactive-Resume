const resumeData = {
	bio: {
		name: 'David Villarreal',
		role: 'Software Engineer',

		contacts: {
			email: 'steadypathapp@gmail.com',
			github: 'https://github.com/Phaze1D',
			codefights: 'https://codefights.com/profile/playssss',
			stackoverflow: 'http://stackoverflow.com/story/davidstory',
			linkedin: 'https://www.linkedin.com/in/david-villarreal-720ab5134/',
			location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'}
		},

		welcomeMessage: `
		I have always been inspired by people who create art because I have never
		been able to do it, until I found out how to code. I feel like coding
		satisfies my logical side, and at the same time, it gives me a way to create
		amazing and beautiful art in the form of code.
		`,

		biopic: 'https://avatars0.githubusercontent.com/u/8495952?v=3',
	},

	skills: {
		technology: [
			{ name: 'Java', mastery: 80 },
			{ name: 'Javascript', mastery: 95 },
			{ name: 'HTML', mastery: 90 },
			{ name: 'CSS', mastery: 90 },
			{ name: 'Bash Scripting', mastery: 50 },
			{ name: 'Ruby On Rails', mastery: 85 },
			{ name: 'Python', mastery: 65 },
			{ name: 'ReactJS', mastery: 90 },
			{ name: 'PHP', mastery: 68 },
			{ name: 'Laravel', mastery: 65 },
			{ name: 'Web Development', mastery: 90 },
			{ name: 'Mobile Development', mastery: 67 },
			{ name: 'Objective C', mastery: 70 },
			{ name: 'C++', mastery: 64 },
			{ name: 'C', mastery: 60 },
			{ name: 'SQL', mastery: 72 },
			{ name: 'NoSQL', mastery: 76 },
			{ name: 'MySQL', mastery: 78 },
			{ name: 'MongoDB', mastery: 79 },
			{ name: 'Security Fundamentals', mastery: 65 },
			{ name: 'Data Structures', mastery: 80 },
			{ name: 'Algorithms', mastery: 80 },
			{ name: 'Machine Learning', mastery: 60 }
		],
	},

	education: {
		schools: [
			{
				name: 'Santa Monica College',
				location: {city: 'Santa Monica', state: 'CA', country: 'USA'},
				degree: 'Dropout',
				majors: 'Computer Science',
				dates: {from: 'Nov 29, 2011', to: 'July 02, 2014'},
				url: 'https://www.smc.edu'
			},
		],

		online: [
			{
				title: 'Introduction to Algorithms',
				school: 'MIT',
				dates: {from: 'July 28, 2013', to: 'August 25, 2013'},
				url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/'
			},
			{
				title: 'Mathematics for Computer Science',
				school: 'MIT',
				dates: {from: 'August 01, 2012', to: 'September 25, 2012'},
				url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/'
			},
			{
				title: 'Artificial Intelligence',
				school: 'MIT',
				dates: {from: 'November 01, 2016', to: 'Jan 15, 2017'},
				url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/'
			},
			{
				title: 'Introduction to Machine Learning',
				school: 'Udacity',
				dates: {from: 'Jan 15, 2017', to: 'Feb 01, 2017'},
				url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
			},
			{
				title: 'Full Stack Web Developer Nanodegree',
				school: 'Udacity',
				dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
				url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
			},
			{
				title: 'Front-End Web Developer Nanodegree',
				school: 'Udacity',
				dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
				url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
			}
		],
	},
	work: {
		jobs: [
			{
				employer: 'Vida Flor',
				title: 'Fullstack Engineer',
				location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},
				dates: {from: 'Nov 2014', to: 'Dec 2016'},
				url: 'https://bellezaorganica.com.mx/',
				description: `
				Vida Flor is an organic beauty company that first hire me to help them
				build an e-commerce website. After finishing the website, they ask me
				if I could stay full time. I managed their database and created a Point
				of Sales system to help them with organizing all there sells and
				inventory. I also used Microsoft Access to create reports about their
				clients and products.
				`
			}
		],
	},

	intro: {
	},

	print: {
	}
}

export default {
	get: (command) => {
		return new Promise(function(resolve, reject) {
			if(resumeData[command]){
				resolve({
					data: resumeData[command]
				})
			}else{
				reject({data: {error: `-bash: ${command}: command not found`}})
			}
		})
	}
}
