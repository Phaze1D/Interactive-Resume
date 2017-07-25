const work = {
	jobs: [
		{
			employer: 'Comercializadora Vida Flor SA de CV',
			role: 'Software Engineer',
			location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},
			dates: {from: 'August 2014', to: 'August 2017'},
			url: 'https://bellezaorganica.com.mx/',
			description: `
			Vida Flor is a health and beauty company that first hired me to help them build an e-commerce website. After finishing the website, they ask me if I could stay full time. I managed their database and created and managed their Point of Sales system to help them organize all their sales and inventory.
			`,
			achievements: [
				'Optimized their website with ReactJS and ExpressJS which changed their previous loading speed from 2s to 0.5s and increased online sales by 25%',
				'Automated the creation of reports with Microsoft Access which lead to a workforce that was more focus on improving the company instead of having to create reports manually',
				'Created a POS system which helps track inventory and reduce inventory errors by 30%.'
			]
		}
	]
}


export default function (command) {
	return work
}
