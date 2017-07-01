import React from 'react'
import classnames from 'classnames'

/** React Component representing one DropDown menu */
export default class DropDown extends React.Component{
	constructor(props){
		super(props)
		this.state = {show: false}
	}

	componentWillReceiveProps(nextProps) {

		// if going to hide dropdown
		if(nextProps.isHover && !nextProps.isClicked){
			setTimeout( () => this.setState({show: false}), 200)
		}

		// if going to show dropdown
		if(nextProps.isHover && nextProps.isClicked){
			this.setState({show: true})
		}
	}

	render(){

		// if not showing return null
		if( !(this.props.isHover && this.state.show) ) return null

		const dClasses = classnames('dropdown', {'leave': !this.props.isClicked})

		return(
			<div className={dClasses}>
				<div className='glass'>
					<ul className={'menu-list ' + this.props.menuClass}>
						{this.props.children}
					</ul>
				</div>
			</div>
		)
	}
}
