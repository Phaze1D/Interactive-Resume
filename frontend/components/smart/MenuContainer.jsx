import React from 'react'
import AppleMenu from 'dumb/AppleMenu'
import { connect } from 'react-redux'


@connect( store => {
	return {
		appleMenuItems: store.appleMenuItems
	}
})
export default class MenuContainer extends React.PureComponent {
	constructor(props){
		super(props)
	}

	render(){
		const {
			appleMenuItems
		} = this.props

		return(
			<AppleMenu
				appleMenuItems={appleMenuItems.toJS()}/>
		)
	}
}
