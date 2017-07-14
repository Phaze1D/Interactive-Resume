import React from 'react'
import TerminalItem from './Item'


export const Work = ({data}) => {
	const jobs = data.value.jobs

	const jobList = jobs.map( (job, index) => {
		const aList = job.achievements.map( (a, i) => <li key={i}>{a}</li>)
		return (
			<Job job={job} aList={aList} key={index}/>
		)

	})

	return (
		<TerminalItem command={data.command}>
			<section className='result-area'>
				<h4>Work:</h4>
				{jobList}
			</section>
		</TerminalItem>
	)
}


const Job = ({job, aList}) => (
	<div className='row-block'>
		<article className='flex-row'>
			<div className='cell sm'>Employer:</div>
			<div className='cell fill'>{job.employer}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Role:</div>
			<div className='cell fill'>{job.role}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Location:</div>
			<div className='cell fill'>
				{job.location.city}, {job.location.state}, {job.location.country}
			</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Achievements:</div>
			<div className='cell fill'>
				<ul className='cell-list'>
					{aList}
				</ul>
			</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Dates:</div>
			<div className='cell fill'>{job.dates.from} - {job.dates.to}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Website:</div>
			<div className='cell fill'>
				<a href={job.url} target='__blank'>{job.url}</a>
			</div>
		</article>
	</div>
)
