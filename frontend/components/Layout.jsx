/* global require */
import React from 'react'
import MenuContainer from 'smart/MenuContainer'
import TerminalContainer from 'smart/TerminalContainer'


export default class Layout extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		return(
			<div>
				<iframe
					id='pdf'
					name='pdf'
					type='pdf'
					src={require('resources/Resume1.pdf')}/>
				<MenuContainer/>
				<TerminalContainer/>
			</div>
		)
	}
}
