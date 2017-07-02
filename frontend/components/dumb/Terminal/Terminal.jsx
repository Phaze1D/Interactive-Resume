import React from 'react'
import homeIcon from 'resources/images/home.png'


export default class Terminal extends React.Component {
	constructor(props){
		super(props)
	}

	render(){

		return (
			<div className='terminal'>
				<div className='terminal-bar'>
					<ul className='button-list'>
						<li><button id='close'><div></div></button></li>
						<li><button id='min'><div></div></button></li>
						<li><button id='expand'><div></div></button></li>
					</ul>

					<div className='location-info'>
						<img className='terminal-icon' src={homeIcon}/>
						<h5>david — resume — -bash — Solarized Dark ansi</h5>
					</div>
				</div>
			</div>
		)
	}
}
