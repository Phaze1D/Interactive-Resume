import React from 'react'
import DropDown from '../DropDown'
import classnames from 'classnames'
import { connect } from 'react-redux'




@connect( (store) => {
  return {
    navbarItems: store.uiData.navbarItems
  }
})

/** React Component that represents both Apple and Terminal Bar */
export default class MenuBar extends React.Component{
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


  /**
  * Creates a single sub navbar menu item
  * @param {object} sub
  * @param {integer} subIndex
  * @return if sub.line is true then a hr element else li element
  */
  renderSubItem(sub, subIndex){
    if(sub.line){
      return <hr key={subIndex}/>
    }else{
      return (
        <li key={subIndex} className={sub.disabled ? 'disabled' : ''}>
          {sub.title}
          <span>{sub.span}</span>
          {sub.pre && <pre>{sub.pre}</pre>}
        </li>
      )
    }
  }


  /**
  * Creates a single navbar item
  * @param {object} item
  * @param {integer} index
  * @return Single NavBarItem
  */
  renderNavBarItem(item, index){

    // Creating the sub item list
    const subList = item.subMenu.map(this.renderSubItem.bind(this))

    return(
      <NavBarItem
        key={index}
        item={item}
        subList={subList}
        onClick={this.handleItemClick.bind(this, index)}
        onMouseEnter={this.handleMouseEnter.bind(this, index)}
        isHover={this.state.menuIndex == index}
        isClicked={this.state.isClicked}/>
    )
  }


  render(){

    // Creating the nav bar item list
    const navList = this.props.navbarItems.map(this.renderNavBarItem.bind(this))

    return(
      <header>
        <nav className='mac-menu-bar'>
          {this.state.isClicked && <div className='overlay' onClick={this.handleOverlayClick}></div>}
          {navList}
        </nav>

        <div className='terminal-bar'>
          <ul className='button-list'>
            <li><button id='close'><div></div></button></li>
            <li><button id='min'><div></div></button></li>
            <li><button id='expand'><div></div></button></li>
          </ul>

          <div className='location-info'>
            <img className='terminal-icon' src={require('../../../images/home.png')}/>
            <h5>david — resume — -bash — Solarized Dark ansi</h5>
          </div>
        </div>
      </header>
    )
  }
}


/** React Component that represents a single Navbar Item */
const NavBarItem = (props) => {
  const {
    title,
    icon,
    iconAlt,
    hasSearch,
    subMenu,
    isMain
  } = props.item

  let itemClasses = classnames('menu-item', {
    'main': isMain,
    'icon': icon,
    'hover': props.isHover && props.isClicked
  })

  let dropClasses = classnames({'search': hasSearch})

  return(
    <button
      className={itemClasses}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}>

      {title}

      {icon &&
        <img src={require(`../../../images/${icon}`)} alt={iconAlt}/>
      }

      <DropDown
        menuClass={dropClasses}
        isHover={props.isHover}
        isClicked={props.isClicked}>

        {hasSearch &&
          <li>
            Search
            <input type='text'/>
          </li>
        }

        {props.subList}

      </DropDown>
    </button>
  )
}
