import React from 'react'
import { connect } from 'react-redux'
import Terminal from 'dumb/Terminal'
import * as terminalActions from 'actions/terminal'

@connect( store => {
	return {
		terminalTabs: store.terminalTabs
	}
}, terminalActions)
export default class TerminalContainer extends React.Component{
	constructor(props){
		super(props)
		this.handleCommandEnter = this.handleCommandEnter.bind(this)
	}

	handleCommandEnter(command, id){
		this.props.commandEntered(command, id)
		.catch(err => {})
	}

	render(){
		const {
			terminalTabs,
			addTab,
			removeTab
		} = this.props


		return (
			<Terminal
				onRequestCommand={this.handleCommandEnter}
				onRequestAdd={addTab}
				onRequestRemove={removeTab}
				terminalTabs={terminalTabs.toJS()}/>
		)
	}
}
