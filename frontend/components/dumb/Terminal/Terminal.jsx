import React from 'react'
import autosize from 'autosize'
import homeIcon from 'resources/images/home.png'


export default class Terminal extends React.Component {
	constructor(props){
		super(props)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleEntered = this.handleEntered.bind(this)
		this.handleSelection = this.handleSelection.bind(this)
		this.handleMainClick = this.handleMainClick.bind(this)
		this.handleCommandMovement = this.handleCommandMovement.bind(this)
	}

	componentDidMount() {
		autosize(document.getElementById('main-textarea'))
	}

	handleSelection(event){
		document.getElementById('caret').style.transform = `translate(${100 * (event.target.selectionStart+1)}%, 0)`
	}

	handleEntered(event){
		if(event.keyCode === 13){
			event.preventDefault()
			this.props.onRequestCommand(event.target.value)
			event.target.value = ''
			event.target.selectionStart = 0
		}
		this.handleSelection(event)
	}

	handleCommandMovement(event){
		if(event.keyCode === 38){
			//
		}

		if(event.keyCode === 40){
			//
		}
		this.handleSelection(event)
	}

	handleBlur(){
		document.getElementById('caret').classList.add('focus-out')
	}

	handleMainClick(){
		document.getElementById('caret').classList.remove('focus-out')
		document.getElementById('main-textarea').focus()
	}

	render(){
		const {
			terminalLog
		} = this.props

		const logList = terminalLog.map( (command, index) =>
			<TerminalItem key={index}>

			</TerminalItem>
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

				{logList}

				<TerminalInput
					onChange={this.handleSelection}
					onKeyUp={this.handleCommandMovement}
					onKeyDown={this.handleEntered}
					onClick={this.handleSelection}
					onBlur={this.handleBlur}/>
			</main>
		)
	}
}

/**
* Terminal Input Component
*/
const TerminalInput = (props) => (
	<TerminalItem>
		$<textarea
			spellCheck='false'
			id='main-textarea'
			rows='1'
			onChange={props.onChange}
			onKeyUp={props.onKeyUp}
			onKeyDown={props.onKeyDown}
			onClick={props.onClick}
			onBlur={props.onBlur}>
		</textarea>

		<span id='caret' className='caret focus-out'>A</span>
	</TerminalItem>
)

/**
* Terminal Item Component
* Parent Component for all terminal items
*/
const TerminalItem = ({children}) => (
	<div className='input-item with-input'>
		<p>
			<span className='orange'> david </span> at
			<span className='yellow'> Joker </span> in
			<span className='green'> ~/Projects/Udacity/InteractiveResume </span> on
			<span className='purple'> master </span>
		</p>

		<div className='input-area'>
			{children}
		</div>
	</div>
)
