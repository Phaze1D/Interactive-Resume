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
		this.handleImageClick = this.handleImageClick.bind(this)
	}

	handleMainClick(){
		document.getElementById('caret').classList.remove('focus-out')
		document.getElementById('main-textarea').focus()
	}

	handleEntered(command){
		this.props.onRequestCommand(command, this.props.tabID)
	}

	handleImageClick(event, project, index){
		event.stopPropagation()
		console.log(project)
	}

	render(){
		const {
			path,
			tabLog,
		} = this.props

		const logList = tabLog.map( (data, index) =>
			<Switch key={index} data={data} path={path}
				onRequestImage={this.handleImageClick}/>
		)

		return (
			<div className='content' onClick={this.handleMainClick}>
				{logList}

				<Input
					path={path}
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
		const {
			data,
			path,
			onRequestImage
		} = this.props

		if(data.error){
			return <TerminalError data={data} path={path}/>
		}

		switch (data.command) {
		case 'bio':
			return <Bio data={data} path={path}/>

		case 'skills':
			return <Skills data={data} path={path}/>

		case 'education':
			return <Education data={data} path={path}/>

		case 'work':
			return <Work data={data} path={path}/>

		case 'projects':
			return (
				<Projects
					path={path}
					onRequestImage={onRequestImage}
					data={data}/>
			)

		case 'intro':
			return <Intro data={data} path={path}/>

		case 'print':
			return <Print data={data} path={path}/>

		default:
			return <TerminalError data={data} path={path}/>
		}
	}
}
