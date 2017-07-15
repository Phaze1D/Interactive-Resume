import React from 'react'
import TerminalItem from './Item'


export const Projects = ({data}) => {

	const projectList = data.value.map( (project, index) =>
		<Project key={index} project={project}/>
	)

	return (
		<TerminalItem command={data.command}>
			<section className='result-area'>
				<h4>Projects:</h4>
				{projectList}
			</section>
		</TerminalItem>
	)
}


const Project = ({project}) => {

	const topicList = project.topics.map((topic, index) =>
		<Tag key={index} tag={topic} type='topic'/>
	)

	const langList = project.languages.map((lang, index) =>
		<Tag key={index} tag={lang} type='lang'/>
	)

	const imgList = project.imgs.map((img, index) =>
		<div className='cell'>
			<img src={img}></img>
		</div>
	)


	return (
		<div className='row-block'>

			<article className='flex-row'>
				<div className='cell sm'></div>
				{imgList}
			</article>

			<article className='flex-row'>
				<div className='cell sm'>Name:</div>
				<div className='cell fill'>{project.name}</div>
			</article>

			<article className='flex-row'>
				<div className='cell sm'>Description:</div>
				<div className='cell fill'>{project.description}</div>
			</article>

			<article className='flex-row'>
				<div className='cell sm'>Github Repo:</div>
				<div className='cell fill'>
					<a href={project.giturl} target='__blank'>{project.giturl}</a>
				</div>
			</article>

			{project.liveurl &&
				<article className='flex-row'>
					<div className='cell sm'>Live Website:</div>
					<div className='cell fill'>
						<a href={project.liveurl} target='__blank'>{project.liveurl}</a>
					</div>
				</article>
			}

			<article className='flex-row'>
				<div className='cell sm'>Tech:</div>
				{topicList}
			</article>

			<article className='flex-row'>
				<div className='cell sm'>Languages:</div>
				{langList}
			</article>

		</div>
	)
}


const Tag = ({tag, type}) => (
	<div className={`tag ${type}`}>
		{tag}
	</div>
)
