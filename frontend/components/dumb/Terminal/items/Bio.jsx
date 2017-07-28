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
		codeEthic,
		images
	} = data.value

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<h4 className='title'>Avatar:</h4>
				<img className='item-img' src={images[0]} alt='avatar'></img>

				<h4 className='title'>Bio:</h4>
				<article className='flex-row'>
					<div className='cell sm sub-title'>Name: </div>
					<div className='cell fill'>{name}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Role: </div>
					<div className='cell fill'>{role}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Email: </div>
					<div className='cell fill'>{email}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>About: </div>
					<div className='cell fill'>{about}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Code Ethic: </div>
					<div className='cell fill' style={{ whiteSpace: 'pre-line'}}>{codeEthic}</div>
				</article>

				<article className='flex-row'>
					<div className='cell sm sub-title'>Location: </div>
					<div className='cell fill'>
						{location.city}, {location.state}, {location.country}
					</div>
				</article>

				<h4 className='title'>Profiles:</h4>
				<article className='flex-row'>
					<div className='cell sm cell-logo '>
						<GithubSVG/>
						<span>
							Github:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.github} target='__blank'
							onClick={e => window.ga('send', 'social', 'Github', profiles.github)}>
							{profiles.github}
						</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm cell-logo '>
						<LinkedinSVG/>
						<span>
							Linkedin:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.linkedin} target='__blank'
							onClick={e => window.ga('send', 'social', 'Linkedin', profiles.linkedin)}>
							{profiles.linkedin}
						</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm cell-logo '>
						<CodeFightsSVG/>
						<span>
							CodeFights:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.codefights} target='__blank'
							onClick={e => window.ga('send', 'social', 'CodeFights', profiles.codefights)}>
							{profiles.codefights}
						</a>
					</div>
				</article>
				<article className='flex-row'>
					<div className='cell sm cell-logo '>
						<StackoverflowSVG/>
						<span>
							Stackoverflow:
						</span>
					</div>
					<div className='cell fill'>
						<a href={profiles.stackoverflow} target='__blank'
							onClick={e => window.ga('send', 'social', 'Stackoverflow', profiles.stackoverflow)}>
							{profiles.stackoverflow}
						</a>
					</div>
				</article>

			</section>
		</TerminalItem>
	)
}
