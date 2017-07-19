const work = {
	jobs: [
		{
			employer: 'Comercializadora Vida Flor SA de CV',
			role: 'Software Engineer',
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
	]
}


export default function (command) {
	return work
}
