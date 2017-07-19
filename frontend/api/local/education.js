/* global require */

const education = {
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

	online: [
		{
			name: 'Full Stack Web Developer Nanodegree',
			school: 'Udacity',
			dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
			url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
			images: [require('resources/images/fullstack.jpg')]
		},
		{
			name: 'Front-End Web Developer Nanodegree',
			school: 'Udacity',
			dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
			url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
			images: [require('resources/images/frontend.jpg')]
		},
		{
			name: 'Introduction to Machine Learning',
			school: 'Udacity',
			dates: {from: 'Jan 15, 2017', to: 'Feb 01, 2017'},
			url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
		},
		{
			name: 'Artificial Intelligence',
			school: 'MIT OpenCourseWare',
			dates: {from: 'November 01, 2016', to: 'Jan 15, 2017'},
			url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/'
		},
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
		}
	],
}


export default function (commands) {

	if(commands.length == 2){
		switch (commands[1]) {
		case '--online':
			return {online: education.online, schools: []}

		case '--schools':
			return {schools: education.schools, online: []}

		default:
			let err = new Error(`Unknown option: ${commands[1]}
usage: education [--online][--schools]`)
			err.name = 'UnknownOption'
			throw err
		}
	}


	return education
}
