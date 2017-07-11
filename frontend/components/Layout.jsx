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
				<MenuContainer/>
				<TerminalContainer/>
			</div>
		)
	}
}
