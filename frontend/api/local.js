/* global require */
const resumeData = {
	bio: {
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

		biopic: 'https://avatars0.githubusercontent.com/u/8495952?v=3',
	},

	skills: {
		technologies: [
			{ name: 'Java', mastery: 80 },
			{ name: 'Javascript', mastery: 95 },
			{ name: 'HTML', mastery: 90 },
			{ name: 'CSS', mastery: 90 },
			{ name: 'Bash Scripting', mastery: 50 },
			{ name: 'Ruby On Rails', mastery: 75 },
			{ name: 'Python', mastery: 65 },
			{ name: 'ReactJS', mastery: 95 },
			{ name: 'PHP', mastery: 68 },
			{ name: 'Laravel', mastery: 65 },
			{ name: 'Web Development', mastery: 90 },
			{ name: 'Mobile Development', mastery: 67 },
			{ name: 'Objective C', mastery: 70 },
			{ name: 'C++', mastery: 64 },
			{ name: 'C', mastery: 60 },
			{ name: 'SQL', mastery: 78 },
			{ name: 'NoSQL', mastery: 78 },
			{ name: 'Security Fundamentals', mastery: 65 },
			{ name: 'Data Structures', mastery: 80 },
			{ name: 'Algorithms', mastery: 80 },
			{ name: 'Machine Learning', mastery: 60 },
			{ name: 'ExpressJS', mastery: 85}
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
			},{
				name: 'Tecnologico de Monterrey Campus Guadalajara',
				location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},
				degree: 'High School Diploma',
				dates: {from: 'August 29, 2005', to: 'May 02, 2009'},
				url: 'http://www.itesm.mx/wps/wcm/connect/Campus/GDA/Guadalajara/'
			}
		],

		onlineCourses: [
			{
				name: 'Introduction to Algorithms',
				school: 'MIT OpenCourseWare',
				dates: {from: 'July 28, 2013', to: 'August 25, 2013'},
				url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/',
			},
			{
				name: 'Mathematics for Computer Science',
				school: 'MIT OpenCourseWare',
				dates: {from: 'August 01, 2012', to: 'September 25, 2012'},
				url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/'
			},
			{
				name: 'Artificial Intelligence',
				school: 'MIT OpenCourseWare',
				dates: {from: 'November 01, 2016', to: 'Jan 15, 2017'},
				url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/'
			},
			{
				name: 'Introduction to Machine Learning',
				school: 'Udacity',
				dates: {from: 'Jan 15, 2017', to: 'Feb 01, 2017'},
				url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
			},
			{
				name: 'Full Stack Web Developer Nanodegree',
				school: 'Udacity',
				dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
				url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
				certificate: require('resources/images/fullstack.jpg')
			},
			{
				name: 'Front-End Web Developer Nanodegree',
				school: 'Udacity',
				dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
				url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
				certificate: require('resources/images/frontend.jpg')
			}
		],
	},
	work: {
		jobs: [
			{
				employer: 'Comercializadora Vida Flor SA de CV',
				role: 'Fullstack Engineer',
				location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},
				dates: {from: 'July 2014', to: 'June 2017'},
				url: 'https://bellezaorganica.com.mx/',
				description: `
				Vida Flor is an organic beauty company that first hire me to help them
				build an e-commerce website. After finishing the website, they ask me
				if I could stay full time. I managed their database and created a Point
				of Sales system to help them with organizing all there sells and
				inventory. I also used Microsoft Access to create reports about their
				clients and products.
				`,
				achievements: [
					'Optimized website for better SEO and loading speed, which increased sales by 20%',
					'Automated the creation of reports with Microsoft Access which lead to a workforce that was more focus on improving the company',
					'Created simple machine learning models with sklearn that lead to less waste products and around $10,000 USD in monthly savings '
				]
			}
		],
	},

	projects: [
		{
			name: 'Belleza Organica',
			giturl: 'https://github.com/Phaze1D/BellezaNodeJS',
			liveurl: 'https://bellezaorganica.com.mx',
			description: 'Production Grade e-commerce website built for a client.',
			topics: ['ReactJS', 'Redux', 'ExpressJS', 'Sequelize', 'AWS'],
			languages: ['Javascript','HTML','CSS'],
			imgs: [require('resources/images/bo1.jpg'), require('resources/images/bo2.jpg'), require('resources/images/bo3.jpg')]
		},
		{
			name: 'Google Zomato Maps',
			giturl: 'https://github.com/Phaze1D/Google_Zomato_Maps',
			liveurl: 'https://phaze1d.github.io/Google_Zomato_Maps/',
			description: 'Google Maps Replica that also uses Zomato\'s API to search for restaurants',
			topics: ['KnockoutJS', 'Google Maps API', 'Zomato API'],
			languages: ['Javascript', 'HTML', 'CSS'],
			imgs: [require('resources/images/gzm1.jpg'), require('resources/images/gzm2.jpg'), require('resources/images/gzm3.jpg')]
		},
		{
			name: 'Blug',
			giturl: 'https://github.com/Phaze1D/Blug',
			liveurl: 'https://blog-160318.appspot.com/',
			description: 'A simple user blog that allows users to post there stories. Kind of like Reddit',
			topics: ['ReactJS', 'Redux', 'Flask', 'Google Cloud Platform'],
			languages: ['Python', 'Javascript', 'CSS'],
			imgs: [require('resources/images/bl1.jpg'), require('resources/images/bl2.jpg'), require('resources/images/bl3.jpg')]
		},
		{
			name: 'Popdris',
			giturl: 'https://github.com/Phaze1D/Popdris',
			liveurl: 'https://phaze1d.github.io/Popdris/',
			description: 'A simple game that mixes Candy Crush and Tetris gameplay',
			topics: ['PixiJS', 'HTML Canvas', 'OOP'],
			languages: ['Javascript', 'HTML'],
			imgs: [require('resources/images/po1.jpg'), require('resources/images/po2.jpg')]
		},
		{
			name: 'Interactive Resume',
			giturl: 'https://github.com/Phaze1D/Interactive-Resume',
			liveurl: 'https://phaze1d.github.io/Interactive-Resume/',
			description: 'This is my Interactive Resume that you are currently viewing right now.',
			topics: ['ReactJS', 'Redux', 'Firebase'],
			languages: ['Javascript', 'CSS'],
			imgs: ['ir1.jpg']
		},
		{
			name: 'Farmage Frontend',
			giturl: 'https://github.com/Phaze1D/Farmage-Frontend',
			description: 'The is a farm management application that simplifies the process of maintaining and organizing economic data of any farm',
			topics: ['ReactJS', 'MeteorJS', 'MongoDB'],
			languages: ['Javascript', 'CSS', 'HTML'],
			imgs: [require('resources/images/ff1.jpg'), require('resources/images/ff2.jpg'), require('resources/images/ff3.jpg')]
		},
		{
			name: 'Farmage Concept',
			giturl: 'https://github.com/Phaze1D/Farmage-Concept',
			description: 'This is the concept version of my farm management app. This version of the app is mostly focused on the backend',
			topics: ['MeteorJS','MongoDB', 'Blaze Components'],
			languages: ['CoffeeScript', 'HTML', 'CSS'],
			imgs: [require('resources/images/fc1.jpg'), require('resources/images/fc2.jpg'), require('resources/images/fc3.jpg')]
		},
		{
			name: 'Rising Fall Android',
			giturl: 'https://github.com/Phaze1D/RisingFallAndroidV2',
			liveurl: 'https://play.google.com/store/apps/details?id=com.Phaze1D.RisingFallAndroidV2.android&hl=en',
			description: 'This is the first game that I built for Android. A game mix between Candy Crush and Tetris',
			topics: ['Libgdx', 'Android'],
			languages: ['Java'],
			imgs: [require('resources/images/rf1.jpg'), require('resources/images/rf2.jpg'), require('resources/images/rf3.jpg')]
		},
		{
			name: 'Rising Fall IOS',
			giturl: 'https://github.com/Phaze1D/RisingFallIOS',
			liveurl: 'https://itunes.apple.com/za/app/rising-fall/id904055570?mt=8',
			description: 'This is the first game that I built for IOS. A game mix between Candy Crush and Tetris',
			topics: ['Spritekit', 'IOS'],
			languages: ['Objective C'],
			imgs: [require('resources/images/rf1.jpg'), require('resources/images/rf2.jpg'), require('resources/images/rf3.jpg')]
		},
	],

	intro: {
		welcomeMessage: `
			Thanks for visiting my Interactive Resume. My name is David Villarreal and
			I'm a Software Engineer If you'll like to get to know more about me enter
			these commands in the terminal
		`,
		commands: [
			{name: 'bio', info: '- Displays my bio information e.g contact info'},
			{name: 'projects', info: '- Displays all my projects that I have created'},
			{name: 'projects --search <query>', info: '- Search projects by technical skill used'},
			{name: 'skills', info: '- Displays my technical skills with a mastery level'},
			{name: 'education', info: '- Displays all the education I have received'},
			{name: 'education --schools', info: '- Displays the schools that I have attend'},
			{name: 'education --online', info: '- Displays just the online courses I have taken'},
			{name: 'work', info: '- Displays my work experience'},
			{name: 'intro', info: '- Reset the terminal and display these instructions'},
			{name: 'print', info: '- Print out a PDF version of my resume'},
		],
		example: {
			instruction: 'To display all my Javascript projects just type',
			command: 'projects --search Javascript'
		},
		ps: `
		This is an exact replica of my terminal. You can also use some common
		terminal keystrokes like up and down arrows to navigate throught previously
		entered commands. If you are using Mac OS and you have the Chrome browser
		expanded you can press COMMAND SHIFT F to get a more immersive experience.
		`
	},

	print: {
	}
}

export default {
	get: (command) => {
		return new Promise(function(resolve, reject) {
			if(command.length > 0 && resumeData[command]){
				resolve({
					data: {
						command: command,
						value: resumeData[command]
					}
				})
			}else if(command.length == 0){
				resolve({
					data: {
						command: command,
						value: ''
					}
				})
			}else{
				reject({
					data: {
						error: true,
						command: command,
						value: `-bash: ${command}: command not found`
					}
				})
			}
		})
	}
}
