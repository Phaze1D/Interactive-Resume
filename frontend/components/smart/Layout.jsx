import React from 'react'
import AppleMenu from 'dumb/AppleMenu'
import Terminal from 'dumb/Terminal'


export default class Layout extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		return(
			<div>
				<AppleMenu/>
				<Terminal/>
			</div>
		)
	}
}
