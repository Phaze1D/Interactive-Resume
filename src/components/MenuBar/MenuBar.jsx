import React from 'react'
import DropDown from '../DropDown'



export default class MenuBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <header>
        <nav className='mac-menu-bar'>
          <button className='menu-item icon'>
            <img id='apple-logo' src={require('../../../images/apple_logo.svg')} alt='Apple Logo'/>
            <AppleMenu/>
          </button>

          <button className='menu-item main'>
            Terminal
          </button>

          <button className='menu-item'>
            Shell
          </button>

          <button className='menu-item'>
            Edit
          </button>

          <button className='menu-item'>
            View
          </button>

          <button className='menu-item'>
            Window
          </button>

          <button className='menu-item'>
            Help

          </button>
        </nav>

        <div className='terminal-bar'>
          <ul className='button-list'>
            <li><button id='close'><div></div></button></li>
            <li><button id='min'><div></div></button></li>
            <li><button id='expand'><div></div></button></li>
          </ul>

          <div className='location-info'>
            <img className='terminal-icon' src={require('../../../images/home.png')}/>
            <h5>david — ~ — -bash — Solarized Dark ansi</h5>
          </div>
        </div>
      </header>
    )
  }
}


const AppleMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}

const TerminalMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}

const ShellMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}

const EditMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}

const ViewMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}

const WindowMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}

const HelpMenu = (props) => {

  return(
    <DropDown>

    </DropDown>
  )
}
