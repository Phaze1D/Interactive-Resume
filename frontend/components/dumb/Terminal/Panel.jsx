import React from 'react'
import {
	Input,
	Intro,
	Bio,
	Skills,
	Education,
	Work,
	Print,
	TerminalError,
	Projects
} from './items'



export default class Panel extends React.PureComponent{
	constructor(props){
		super(props)

		this.handleMainClick = this.handleMainClick.bind(this)
		this.handleEntered = this.handleEntered.bind(this)
	}

	handleMainClick(){
		document.getElementById('caret').classList.remove('focus-out')
		document.getElementById('main-textarea').focus()
	}

	handleEntered(command){
		this.props.onRequestCommand(command, this.props.tabID)
	}

	render(){
		const {
			location,
			tabLog,
		} = this.props

		const logList = tabLog.map( (data, index) =>
			<Switch key={index} data={data}/>
		)

		return (
			<div className='content' onClick={this.handleMainClick}>
				{logList}

				<Input
					onRequestEnter={this.handleEntered}/>
			</div>
		)
	}
}

/**
* Switch Component
*/
class Switch extends React.Component{
	constructor(props){
		super(props)
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.data.command === this.props.data.command){
			return false
		}
		return true
	}

	render(){
		const data = this.props.data

		if(data.error){
			return <TerminalError data={data}/>
		}

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
			return <Projects data={data}/>

		case 'intro':
			return <Intro data={data}/>

		case 'print':
			return <Print data={data}/>

		default:
			return <TerminalError data={data}/>
		}
	}
}
