import React from 'react'
import MenuContainer from 'smart/MenuContainer'
import Terminal from 'dumb/Terminal'


export default class Layout extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		return(
			<div>
				<MenuContainer/>
				<Terminal/>
			</div>
		)
	}
}
