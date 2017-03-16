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
            <TerminalMenu/>
          </button>

          <button className='menu-item'>
            Shell
            <ShellMenu/>
          </button>

          <button className='menu-item'>
            Edit
            <EditMenu/>
          </button>

          <button className='menu-item'>
            View
            <ViewMenu/>
          </button>

          <button className='menu-item'>
            Window
            <WindowMenu/>
          </button>

          <button className='menu-item'>
            Help
            <HelpMenu/>
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
    <DropDown>
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
    <DropDown>
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
    <DropDown>
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
    <DropDown>
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
    <DropDown>
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
    <DropDown>
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
    <DropDown menuClass='search'>
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
