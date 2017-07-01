import React from 'react'
import DropDown from './DropDown'
import classnames from 'classnames'


export default class AppleMenu extends React.Component {
	constructor(props){
		super(props)
		this.state = {menuIndex: -1, isClicked: false}
		this.handleOverlayClick = this.handleOverlayClick.bind(this)
	}

	/**
 * Handles when the overlay is clicked
 * @param {object} event - Click Event
 */
	handleOverlayClick(event){
		this.setState({isClicked: false})
	}


	/**
 * Handles a navbar item is clicked
 * @param {integer} index - The index of the navbar item
 * @param {object} event - Click Event
 */
	handleItemClick(index, event){
		this.setState({isClicked: true, menuIndex: index})
	}


	/**
 * Handles when the mouse enters a navbar item
 * @param {integer} index - The index of the navbar item
 * @param {object} event - Mouse Enter Event
 */
	handleMouseEnter(index, event){
		if(this.state.isClicked){
			this.setState({menuIndex: index})
		}
	}


	render(){
		const {
			appleMenuItems
		} = this.props

		const itemsList = appleMenuItems.map( (item, i) =>
			<MenuItem
				key={i}
				item={item}
				onClick={this.handleItemClick.bind(this, i)}
				onMouseEnter={this.handleMouseEnter.bind(this, i)}
				isHover={this.state.menuIndex == i}
				isClicked={this.state.isClicked}/>
		)

		return(
			<div className='apple-bar'>
				{this.state.isClicked && <div className='overlay' onClick={this.handleOverlayClick}></div>}
				{itemsList}
			</div>
		)
	}
}

const MenuItem = (props) => {
	const {
		item,
		isHover,
		isClicked,
		onClick,
		onMouseEnter
	} = props

	let itemClasses = classnames('menu-item', {
		'main': item.isMain,
		'hover': isHover && isClicked
	})

	let dropClasses = classnames({'search': item.hasSearch})

	const subList = item.subMenu.map((sub, index) =>
		<SubNavItem
			key={index}
			sub={sub}
			isSearch={item.hasSearch && index == 0}/>
	)

	return(
		<button
			className={itemClasses}
			onClick={onClick}
			onMouseEnter={onMouseEnter}>

			{item.title}

			{item.icon &&
				<i className={item.icon} aria-hidden='true'></i>
			}

			<DropDown
				menuClass={dropClasses}
				isHover={isHover}
				isClicked={isClicked}>
				{subList}
			</DropDown>
		</button>
	)
}

const SubNavItem = (props) => {
	const {
		sub,
		isSearch
	} = props

	if(sub.line){
		return <hr/>

	}else if(isSearch){
		return(
			<li>
				{sub.title}
				<input type='text'/>
			</li>
		)

	}else{
		return (
			<li className={sub.disabled ? 'disabled' : ''}>
				{sub.title}
				<span>{sub.span}</span>
				{sub.pre && <pre>{sub.pre}</pre>}
			</li>
		)
	}
}
