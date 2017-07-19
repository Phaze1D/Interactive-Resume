import React from 'react'
import TerminalItem from './Item'
import {
	GithubSVG,
	LinkedinSVG,
	CodeFightsSVG,
	StackoverflowSVG
} from 'dumb/SVGs'


export const Bio = ({data, path}) => {

	const {
		name,
		role,
		email,
		location,
		profiles,
		about,
		images
	} = data.value

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<h4>Avatar:</h4>
				<img className='item-img' src={images[0]} alt='avatar'></img>

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

				<article className='flex-row'>
					<div className='cell sm'>Location: </div>
					<div className='cell fill'>
						{location.city}, {location.state}, {location.country}
					</div>
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
					<div className='cell sm cell-logo'>
						<LinkedinSVG/>
						<span>
							Linkedin:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.linkedin} target='__blank'>{profiles.linkedin}</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm cell-logo'>
						<CodeFightsSVG/>
						<span>
							CodeFights:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.codefights} target='__blank'>{profiles.codefights}</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm cell-logo'>
						<StackoverflowSVG/>
						<span>
							Stackoverflow:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.stackoverflow} target='__blank'>{profiles.stackoverflow}</a>
					</div>
				</article>

			</section>
		</TerminalItem>
	)
}
