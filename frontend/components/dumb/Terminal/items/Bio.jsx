import React from 'react'
import TerminalItem from './Item'
import {
	GithubSVG
} from 'dumb/SVGs'


export const Bio = ({data}) => {

	const {
		name,
		role,
		email,
		location,
		profiles,
		about,
		biopic
	} = data.value

	return (
		<TerminalItem command={data.command}>
			<section className='result-area'>
				<h4>Avatar:</h4>
				<img className='item-img' src={biopic} alt='avatar'></img>

				<h4>Bio:</h4>
				<article className='flex-row'>
					<div className='cell sm'>Name: </div>
					<div className='cell fill'>{name}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm'>Role: </div>
					<div className='cell fill'>{role}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm'>Email: </div>
					<div className='cell fill'>{email}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm'>About: </div>
					<div className='cell fill'>{about}</div>
				</article>

				<h4>Profiles:</h4>
				<article className='flex-row'>
					<div className='cell sm cell-logo'>
						<GithubSVG/>
						<span>
							Github:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.github} target='__blank'>{profiles.github}</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm'>Linkedin: </div>
					<div className='cell fill'>
						<a href={profiles.linkedin} target='__blank'>{profiles.linkedin}</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm'>CodeFights: </div>
					<div className='cell fill'>
						<a href={profiles.codefights} target='__blank'>{profiles.codefights}</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm'>Stackoverflow: </div>
					<div className='cell fill'>
						<a href={profiles.stackoverflow} target='__blank'>{profiles.stackoverflow}</a>
					</div>
				</article>

			</section>
		</TerminalItem>
	)
}
