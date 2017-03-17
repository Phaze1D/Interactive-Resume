import React from 'react'
import DropDown from '../DropDown'
import classnames from 'classnames'
import { connect } from 'react-redux'




@connect( (store) => {
  return {
    navbarItems: store.uiData.navbarItems
  }
})
export default class MenuBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {menuIndex: -1, isClicked: false}

    this.handleOverlayClick = this.handleOverlayClick.bind(this)
  }

  handleOverlayClick(event){
    this.setState({isClicked: false})
  }

  handleItemClick(index, event){
    this.setState({isClicked: true, menuIndex: index})
  }

  handleMouseEnter(index, event){
    if(this.state.isClicked){
      this.setState({menuIndex: index})
    }
  }

  render(){

    /** Creating the nav bar item list */
    const navList = this.props.navbarItems.map( (item, index) => {
      let itemClasses = classnames('menu-item', {
        'main': item.isMain,
        'icon': item.icon,
        'hover': this.state.menuIndex == index && this.state.isClicked
      })

      let dropClasses = classnames({'search': item.hasSearch})

      /** Creating the sub nav bar menu item list */
      const subMenu = item.subMenu.map( (sub, subindex) => {

        if(sub.line){
          return <hr key={subindex}/> // Divider
        }else{
          return (
            <li key={subindex} className={sub.disabled ? 'disabled' : ''}>
              {sub.title}
              <span>{sub.span}</span>
              {sub.pre && <pre>{sub.pre}</pre>}
            </li>
          )
        }
      })

      return(
        <button
          key={index}
          className={itemClasses}
          onClick={this.handleItemClick.bind(this, index)}
          onMouseEnter={this.handleMouseEnter.bind(this, index)}>

          {item.title}

          {item.icon &&
            <img src={require(`../../../images/${item.icon}`)} alt={item.iconAlt}/>
          }

          <DropDown
            menuClass={dropClasses}
            isHover={this.state.menuIndex == index}
            isClicked={this.state.isClicked}>

            {item.hasSearch &&
              <li>
                Search
                <input type='text'/>
              </li>
            }

            {subMenu}

          </DropDown>
        </button>
      )
    })


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
