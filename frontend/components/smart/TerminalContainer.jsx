import React from 'react'
import { connect } from 'react-redux'
import Terminal from 'dumb/Terminal'
import * as terminalActions from 'actions/terminal'

@connect( store => {
	return {
		terminalLog: store.terminalLog
	}
}, terminalActions)
export default class TerminalContainer extends React.Component{
	constructor(props){
		super(props)

	}

	render(){
		const {
			terminalLog,
			commandEntered
		} = this.props


		return (
			<Terminal
				onRequestCommand={commandEntered}
				terminalLog={terminalLog.toJS()}/>
		)
	}
}
