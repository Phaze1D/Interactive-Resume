import React from 'react'
import DropDown from '../DropDown'
import classnames from 'classnames'



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
    let hoverArray = ['','','','','','','']
    if(this.state.menuIndex >= 0 && this.state.isClicked){
      hoverArray[this.state.menuIndex] = 'hover'
    }

    return(
      <header>
        <nav className='mac-menu-bar'>
          {this.state.isClicked && <div className='overlay' onClick={this.handleOverlayClick}></div>}
          <button
            className={'menu-item icon '+ hoverArray[0]}
            onClick={this.handleItemClick.bind(this, 0)}
            onMouseEnter={this.handleMouseEnter.bind(this, 0)}>

            <img id='apple-logo' src={require('../../../images/apple_logo.svg')} alt='Apple Logo'/>
            <AppleMenu isHover={this.state.menuIndex == 0} isClicked={this.state.isClicked}/>
          </button>

          <button
            className={'menu-item main ' + hoverArray[1]}
            onClick={this.handleItemClick.bind(this, 1)}
            onMouseEnter={this.handleMouseEnter.bind(this, 1)}>

            Terminal
            <TerminalMenu isHover={this.state.menuIndex == 1} isClicked={this.state.isClicked}/>
          </button>

          <button
            className={'menu-item ' + hoverArray[2]}
            onClick={this.handleItemClick.bind(this, 2)}
            onMouseEnter={this.handleMouseEnter.bind(this, 2)}>

            Shell
            <ShellMenu isHover={this.state.menuIndex == 2} isClicked={this.state.isClicked}/>
          </button>

          <button
            className={'menu-item ' + hoverArray[3]}
            onClick={this.handleItemClick.bind(this, 3)}
            onMouseEnter={this.handleMouseEnter.bind(this, 3)}>

            Edit
            <EditMenu isHover={this.state.menuIndex == 3} isClicked={this.state.isClicked}/>
          </button>

          <button
            className={'menu-item ' + hoverArray[4]}
            onClick={this.handleItemClick.bind(this, 4)}
            onMouseEnter={this.handleMouseEnter.bind(this, 4)}>

            View
            <ViewMenu isHover={this.state.menuIndex == 4} isClicked={this.state.isClicked}/>
          </button>

          <button
            className={'menu-item ' + hoverArray[5]}
            onClick={this.handleItemClick.bind(this, 5)}
            onMouseEnter={this.handleMouseEnter.bind(this, 5)}>

            Window
            <WindowMenu isHover={this.state.menuIndex == 5} isClicked={this.state.isClicked}/>
          </button>

          <button
            className={'menu-item ' + hoverArray[6]}
            onClick={this.handleItemClick.bind(this, 6)}
            onMouseEnter={this.handleMouseEnter.bind(this, 6)}>

            Help
            <HelpMenu isHover={this.state.menuIndex == 6} isClicked={this.state.isClicked}/>
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
            <h5>david — resume — -bash — Solarized Dark ansi</h5>
          </div>
        </div>
      </header>
    )
  }
}


const AppleMenu = (props) => {

  return(
    <DropDown isHover={props.isHover} isClicked={props.isClicked}>
      <li>About This Mac</li>
      <hr></hr>
      <li>System Preferences...</li>
      <li>
        App Store...
        <pre>1  update</pre>
      </li>
      <hr></hr>
      <li>Recent Items <span>▶</span></li>
      <hr></hr>
      <li>Force Quit... <span>⌥⌘&#9099;</span></li>
      <hr></hr>
      <li>Sleep</li>
      <li>Restart...</li>
      <li>Shut Down...</li>
      <hr></hr>
      <li>Log Out David Villarreal... <span>⇧⌘Q</span></li>
    </DropDown>
  )
}

const TerminalMenu = (props) => {

  return(
    <DropDown isHover={props.isHover} isClicked={props.isClicked}>
      <li>About Terminal</li>
      <hr></hr>
      <li>Preferences... <span>⌘,</span></li>
      <li>Secure Keyboard Entry</li>
      <hr></hr>
      <li>Services <span>▶</span></li>
      <hr></hr>
      <li className='disabled'>Hide Terminal <span>⌘H</span></li>
      <li>Hide Others <span>⌥⌘H</span></li>
      <li className='disabled'>Show All</li>
      <hr></hr>
      <li>Quit Terminal <span>⌘Q</span></li>
    </DropDown>
  )
}

const ShellMenu = (props) => {

  return(
    <DropDown isHover={props.isHover} isClicked={props.isClicked}>
      <li>New Window <span>▶</span></li>
      <li>New Tab <span>▶</span></li>
      <li>New Command... <span>⇧⌘N</span></li>
      <li>New Remote Connection... <span>⇧⌘K</span></li>
      <li>Import... <span>⌘O</span></li>
      <hr></hr>
      <li>Close Window <span>⌘W</span></li>
      <li className='disabled'>Close Tab</li>
      <hr></hr>
      <li>Use Settings As Default</li>
      <li>Export Settings...</li>
      <hr></hr>
      <li>Export Text As... <span>⌘S</span></li>
      <li className='disabled'>Export Selected Text As... <span>⇧⌘S</span></li>
      <hr></hr>
      <li>Show Inspector <span>⌘I</span></li>
      <li>Edit Title <span>⇧⌘I</span></li>
      <li>Edit Background Color <span>⌥⌘I</span></li>
      <hr></hr>
      <li>Reset <span>⌥⌘R</span></li>
      <li>Hard Reset <span>⌃⌥⌘R</span></li>
      <hr></hr>
      <li className='disabled'>Print Selection... <span>⌥⌘P</span></li>
      <li>Print... <span>⌘P</span></li>
    </DropDown>
  )
}

const EditMenu = (props) => {

  return(
    <DropDown isHover={props.isHover} isClicked={props.isClicked}>
      <li>Undo <span>⌘Z</span></li>
      <li>Redo <span>⇧⌘Z</span></li>
      <hr/>
      <li>Cut <span>⌘X</span></li>
      <li>Copy <span>⌘C</span></li>
      <li>Copy Special <span>▶</span></li>
      <li>Paste <span>⌘V</span></li>
      <li>Paste Escaped Text <span>⌃⌘C</span></li>
      <li>Select All <span>⌘A</span></li>
      <li>Select Between Marks <span>⇧⌘C</span></li>
      <hr/>
      <li>Marks <span>▶</span></li>
      <li>Bookmarks <span>▶</span></li>
      <li>Navigate <span>▶</span></li>
      <hr/>
      <li>Clear to Previous Mark <span>⌘L</span></li>
      <li>Clear to Previous Bookmark <span>⌥⌘L</span></li>
      <li>Clear to Start <span>⌘K</span></li>
      <hr/>
      <li>Clear Scrollback <span>⌥⌘K</span></li>
      <li>Clear Screen <span>⌃⌘L</span></li>
      <hr/>
      <li>Find <span>▶</span></li>
      <hr/>
      <li>Show Colors <span>⇧⌘C</span></li>
      <hr/>
      <li>Use Option as Meta Key <span>⌥⌘O</span></li>
      <li>Num Lock <span>⌘⌧</span></li>
      <hr/>
      <li>Start Dictation <span>fn fn</span></li>
      <li>Emoji & Symobols <span>⌃⌘Space</span></li>
    </DropDown>
  )
}

const ViewMenu = (props) => {

  return(
    <DropDown isHover={props.isHover} isClicked={props.isClicked}>
      <li>Show Tab Bar <span>⇧⌘T</span></li>
      <li>Hide Marks</li>
      <hr/>
      <li>Show Alternate Screen <span>⇧⌘⇟</span></li>
      <li className='disabled'>Hide Alternate Screen <span>⇧⌘⇞</span></li>
      <hr/>
      <li>Allow Mouse Reporting <span>⌘R</span></li>
      <hr/>
      <li>Split Pane <span>⌘D</span></li>
      <li className='disabled'>Close Split Pane <span>⇧⌘R</span></li>
      <hr/>
      <li className='disabled'>Default Font Size <span>⌘O</span></li>
      <li>Bigger <span>⌘+</span></li>
      <li>Smaller <span>⌘-</span></li>
      <hr/>
      <li>Scroll to Top <span>⌘↖</span></li>
      <li>Scroll to Bottom <span>⌘↘</span></li>
      <hr/>
      <li>Page Up <span>⌘⇞</span></li>
      <li>Page Down <span>⌘⇟</span></li>
      <hr/>
      <li>Line Up <span>⌥⌘⇞</span></li>
      <li>Line Down <span>⌥⌘⇟</span></li>
      <hr/>
      <li>Exit Full Screen <span>⌃⌘F</span></li>
    </DropDown>
  )
}

const WindowMenu = (props) => {
  let quote = "\`"
  return(
    <DropDown isHover={props.isHover} isClicked={props.isClicked}>
      <li className='disabled'>Minimize <span>⌘M</span></li>
      <li>Zoom</li>
      <li>Cycle Through Windows <span>⌘{quote}</span></li>
      <hr/>
      <li>Open Window Group <span>▶</span></li>
      <li>Save Windows as Group</li>
      <hr/>
      <li className='disabled'>Return to Default Size</li>
      <hr/>
      <li className='disabled'>Show Previous Tab <span>⌃⇧⇥</span></li>
      <li className='disabled'>Move Tab to New Window <span>⌃⇥</span></li>
      <li>Merge All Windows</li>
      <hr/>
      <li>Bring All to Front</li>
      <hr/>
      <li>david — resume — -bash — Solarized Dark ansi <span>⌘2</span></li>
    </DropDown>
  )
}

const HelpMenu = (props) => {

  return(
    <DropDown menuClass='search' isHover={props.isHover} isClicked={props.isClicked}>
      <li className='search-input-item'>
        Search
        <input type='text'/>
      </li>
      <li>Terminal Help</li>
      <hr/>
      <li className='disabled'>Open man Page for Selection  <span>⌃⌘?</span></li>
      <li className='disabled'>Search man Index Page for Selection  <span>⌃⌥⌘/</span></li>
    </DropDown>
  )
}
