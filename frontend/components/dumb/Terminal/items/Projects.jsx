import React from 'react'
import TerminalItem from './Item'


export const Projects = ({data, onRequestImage, path}) => {
	const projectList = data.value.map( (project, index) =>
		<Project
			key={index}
			project={project}
			onImageClick={e =>
				onRequestImage(e, `~/Projects/${project.name.replace(/\s/g,'')}/Images`, `images projects ${project.id}`)
			}/>
	)

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<h4 className='title'>Projects:</h4>
				{projectList}
			</section>
		</TerminalItem>
	)
}


const Project = ({project, onImageClick}) => {

	const topicList = project.topics.map((topic, index) =>
		<Tag key={index} tag={topic} type='topic'/>
	)

	const langList = project.languages.map((lang, index) =>
		<Tag key={index} tag={lang} type='lang'/>
	)

	const imgList = project.images.map((img, index) =>
		<div key={index} className='cell'>
			<img src={img}
				onClick={onImageClick}></img>
		</div>
	)


	return (
		<div className='row-block'>

			<article className='flex-row'>
				<div className='cell sm'></div>
				{imgList}
			</article>

			<article className='flex-row'>
				<div className='cell sm title'>Name:</div>
				<div className='cell fill'>{project.name}</div>
			</article>

			<article className='flex-row'>
				<div className='cell sm title'>Description:</div>
				<div className='cell fill'>{project.description}</div>
			</article>

			<article className='flex-row'>
				<div className='cell sm title'>Github Repo:</div>
				<div className='cell fill'>
					<a href={project.giturl} target='__blank'>{project.giturl}</a>
				</div>
			</article>

			{project.liveurl &&
				<article className='flex-row'>
					<div className='cell sm title'>Live Website:</div>
					<div className='cell fill'>
						<a href={project.liveurl} target='__blank'>{project.liveurl}</a>
					</div>
				</article>
			}

			<article className='flex-row'>
				<div className='cell sm title'>Tech:</div>
				{topicList}
			</article>

			<article className='flex-row'>
				<div className='cell sm title'>Languages:</div>
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
