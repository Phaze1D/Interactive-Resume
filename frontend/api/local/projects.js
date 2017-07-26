/* global require */

const projects = [
	{
		id: 0,
		name: 'Belleza Organica',
		giturl: 'https://github.com/Phaze1D/BellezaNodeJS',
		liveurl: 'https://bellezaorganica.com.mx',
		description: 'Production Grade e-commerce website built for a client.',
		topics: ['ReactJS', 'Redux', 'ExpressJS', 'Sequelize', 'AWS'],
		languages: ['Javascript','HTML','SASS'],
		images: [require('resources/images/bo1.jpg'), require('resources/images/bo2.jpg'), require('resources/images/bo3.jpg')]
	},
	{
		id: 1,
		name: 'Google Zomato Maps',
		giturl: 'https://github.com/Phaze1D/Google_Zomato_Maps',
		liveurl: 'https://phaze1d.github.io/Google_Zomato_Maps/',
		description: 'Google Maps Replica that also uses Zomato\'s API to search for restaurants',
		topics: ['KnockoutJS', 'Google Maps API', 'Zomato API'],
		languages: ['Javascript', 'HTML', 'CSS'],
		images: [require('resources/images/gzm1.jpg'), require('resources/images/gzm2.jpg'), require('resources/images/gzm3.jpg')]
	},
	{
		id: 2,
		name: 'Blug',
		giturl: 'https://github.com/Phaze1D/Blug',
		liveurl: 'https://blog-160318.appspot.com/',
		description: 'A simple user blog that allows users to post there stories. Kind of like Reddit but simplier',
		topics: ['ReactJS', 'Redux', 'Flask', 'Google Cloud Platform'],
		languages: ['Python', 'Javascript', 'SASS'],
		images: [require('resources/images/bl1.jpg'), require('resources/images/bl2.jpg'), require('resources/images/bl3.jpg')]
	},
	{
		id: 3,
		name: 'Popdris',
		giturl: 'https://github.com/Phaze1D/Popdris',
		liveurl: 'https://phaze1d.github.io/Popdris/',
		description: 'A simple game that mixes Candy Crush and Tetris gameplay',
		topics: ['PixiJS', 'HTML Canvas', 'OOP'],
		languages: ['Javascript', 'HTML'],
		images: [require('resources/images/po1.jpg'), require('resources/images/po2.jpg')]
	},
	{
		id: 4,
		name: 'Interactive Resume',
		giturl: 'https://github.com/Phaze1D/Interactive-Resume',
		liveurl: 'https://david-villarreal.com',
		description: 'This is my Interactive Resume that you are currently viewing right now.',
		topics: ['ReactJS', 'Redux', 'Firebase'],
		languages: ['Javascript', 'SASS'],
		images: [require('resources/images/ir1.jpg'), require('resources/images/ir2.jpg'), require('resources/images/ir3.jpg')]
	},
	{
		id: 5,
		name: 'Farmage Frontend',
		giturl: 'https://github.com/Phaze1D/Farmage-Frontend',
		description: 'The is a farm management application that simplifies the process of maintaining and organizing financial data of any farm. A project that I wish to finish some day.',
		topics: ['ReactJS', 'MeteorJS', 'MongoDB'],
		languages: ['Javascript', 'Less', 'HTML'],
		images: [require('resources/images/ff1.jpg'), require('resources/images/ff2.jpg'), require('resources/images/ff3.jpg')]
	},
	{
		id: 6,
		name: 'Farmage Concept',
		giturl: 'https://github.com/Phaze1D/Farmage-Concept',
		description: 'This is the concept version of my farm management app. This version of the app is mostly focused on the backend',
		topics: ['MeteorJS','MongoDB', 'Blaze Components'],
		languages: ['CoffeeScript', 'HTML', 'Less'],
		images: [require('resources/images/fc1.jpg'), require('resources/images/fc2.jpg'), require('resources/images/fc3.jpg')]
	},
	{
		id: 7,
		name: 'Rising Fall Android',
		giturl: 'https://github.com/Phaze1D/RisingFallAndroidV2',
		liveurl: 'https://play.google.com/store/apps/details?id=com.Phaze1D.RisingFallAndroidV2.android&hl=en',
		description: 'This is the first game that I built for Android. A game mix between Candy Crush and Tetris',
		topics: ['Libgdx', 'Android'],
		languages: ['Java'],
		images: [require('resources/images/rf1.jpg'), require('resources/images/rf2.jpg'), require('resources/images/rf3.jpg')]
	},
	{
		id: 8,
		name: 'Rising Fall IOS',
		giturl: 'https://github.com/Phaze1D/RisingFallIOS',
		liveurl: 'https://itunes.apple.com/za/app/rising-fall/id904055570?mt=8',
		description: 'This is the first game that I built for IOS. A game mix between Candy Crush and Tetris',
		topics: ['Spritekit', 'IOS'],
		languages: ['Objective C'],
		images: [require('resources/images/rf1.jpg'), require('resources/images/rf2.jpg'), require('resources/images/rf3.jpg')]
	},
]

function search(query){
	let results = []
	for (let i = 0; i < projects.length; i++) {

		let langs = projects[i].languages
		let topics = projects[i].topics

		for (let j = 0; j < topics.length; j++) {
			if(topics[j].toLowerCase() === query){
				results.push(projects[i])
				break
			}
		}

		for (let j = 0; j < langs.length; j++) {
			if(langs[j].toLowerCase() === query){
				results.push(projects[i])
				break
			}
		}
	}
	return results
}


export default function (commands) {
	if(commands.length > 1 && commands[1] !== '--search'){
		let err = new Error(`Unknown option: ${commands[1]}
usage: projects [--search]`)
		err.name = 'UnknownOption'
		throw err
	}

	if(commands.length === 3 && commands[1] === '--search'){
		return search(commands[2].toLowerCase())
	}

	return projects
}
