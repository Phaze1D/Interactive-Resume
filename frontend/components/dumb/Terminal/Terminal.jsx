import React from 'react'
import homeIcon from 'resources/images/home.png'
import {
	TerminalInput,
	Intro,
	Bio,
	Skills,
	Education,
	Work,
	Print
} from './items'


export default class Terminal extends React.Component {
	constructor(props){
		super(props)

		this.handleMainClick = this.handleMainClick.bind(this)
	}

	componentDidMount() {
		this.props.onRequestCommand('intro')
	}

	handleMainClick(){
		document.getElementById('caret').classList.remove('focus-out')
		document.getElementById('main-textarea').focus()
	}

	render(){
		const {
			terminalLog,
			onRequestCommand
		} = this.props

		const logList = terminalLog.map( (data, index) =>
			<Switch key={index} data={data}/>
		)

		return (
			<main className='terminal' onClick={this.handleMainClick}>
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

				<div className='content'>
					{logList}

					<TerminalInput
						onRequestEnter={onRequestCommand}/>
				</div>
			</main>
		)
	}
}


/**
* Switch Component
*/
const Switch = ({data}) => {
	switch (data.command) {
	case 'bio':
		return <Bio data={data}/>

	case 'skills':
		return <Skills data={data}/>

	case 'education':
		return <Education data={data}/>

	case 'work':
		return <Work data={data}/>

	case 'projects':
		return null

	case 'intro':
		return <Intro data={data}/>

	case 'print':
		return <Print data={data}/>

	case 'error':
		return null

	default:
		return null
	}
}
