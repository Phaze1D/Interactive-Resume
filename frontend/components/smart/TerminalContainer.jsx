import React from 'react'
import { connect } from 'react-redux'
import Terminal from 'dumb/Terminal'

@connect( store => {
	return {
		terminalLog: store.terminalLog
	}
})
export default class TerminalContainer extends React.Component{
	constructor(props){
		super(props)

	}

	render(){
		const {
			terminalLog
		} = this.props

		const logList = terminalLog.map( command =>
			<SwitchCommand command={command}/>
		)

		return (
			<Terminal>

				{logList}
			</Terminal>
		)
	}
}


const SwitchCommand = ({command}) => (
	<div>

	</div>
)
