import React from 'react'
import TerminalItem from './Item'


export const Education = ({data, path, onRequestImage}) => {

	const {
		schools,
		online
	} = data.value

	const schoolList = schools.map( (school, index) =>
		<School school={school} key={index}/>
	)

	const onlineList = online.map( (onlineC, index) =>
		<Online online={onlineC} key={index}
			onImageClick={e =>
				onRequestImage(e, `~/Education/${onlineC.name.replace(/\s/g,'')}/Images`, `images education online ${index}`)
			}/>
	)

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				{schoolList.length > 0 &&
					<h4>Schools:</h4>
				}
				{schoolList}

				{onlineList.length > 0 &&
					<h4>Online Courses:</h4>
				}
				{onlineList}
			</section>
		</TerminalItem>
	)
}

/**
* School Component
*/
const School = ({school}) => (
	<div className='row-block'>
		<article className='flex-row'>
			<div className='cell sm'>Name:</div>
			<div className='cell fill'>{school.name}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Location:</div>
			<div className='cell fill'>
				{school.location.city}, {school.location.state}, {school.location.country}
			</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Degree:</div>
			<div className='cell fill'>{school.degree}</div>
		</article>

		{school.majors &&
			<article className='flex-row'>
				<div className='cell sm'>Major:</div>
				<div className='cell fill'>{school.majors}</div>
			</article>
		}

		<article className='flex-row'>
			<div className='cell sm'>Dates:</div>
			<div className='cell fill'>{school.dates.from} - {school.dates.to}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Website:</div>
			<div className='cell fill'>
				<a href={school.url} target='__blank'>{school.url}</a>
			</div>
		</article>
	</div>
)


/**
* Online Component
*/
const Online = ({online, onImageClick}) => (
	<div className='row-block'>
		{online.images &&
			<article className='flex-row'>
				<div className='cell sm'></div>
				<div className='cell fill'>
					<img src={online.images[0]}
						onClick={onImageClick}></img>
				</div>
			</article>
		}

		<article className='flex-row'>
			<div className='cell sm'>Course:</div>
			<div className='cell fill'>{online.name}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>School:</div>
			<div className='cell fill'>{online.school}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Dates:</div>
			<div className='cell fill'>{online.dates.from} - {online.dates.to}</div>
		</article>

		<article className='flex-row'>
			<div className='cell sm'>Website:</div>
			<div className='cell fill'>
				<a href={online.url} target='__blank' alt='Course Url'>Link to Course Website</a>
			</div>
		</article>
	</div>
)
