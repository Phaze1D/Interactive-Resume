import React from 'react'
import autosize from 'autosize'
import { connect } from 'react-redux'
import { commandEntered } from '../../actions/terminal_actions'


@connect((store) => {
  return {
    terminalData: store.terminalData
  }
})

/** React Component representing the entire terminal */
export default class Terminal extends React.Component{
  constructor(props){
    super(props)
    this.handleSelection = this.handleSelection.bind(this)
  }


  componentDidMount() {
    autosize(document.getElementById('main-textarea'))
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.terminalData.isFirst);
    if(!prevProps.terminalData.isFirst){
      window.scrollTo(0, document.getElementsByTagName('main')[0].clientHeight)
    }
  }


  /**
  * Handler for OnChange KeyUp and KeyDown
  * Moves the textarea caret if the key that was pressed is not ENTER
  * If the ENTER key is pressed dispatch commandEntered action
  * @param {object} event - KeyUp || KeyDown || Change event
  */
  handleSelection(event){
    if(event.type === 'keydown' && event.keyCode == 13){
      event.preventDefault()
      this.props.dispatch(commandEntered(event.target.value))
      event.target.value = ''
      event.target.selectionStart = 0
    }else{
      document.getElementById('caret').style.transform = `translate(${100 * (event.target.selectionStart+1)}%, 0)`
    }
  }


  /**
  * Handler for when the textare loses focus
  * adds focus out class to the caret
  * @param {object} event - onBlur event
  */
  handleBlur(event){
    document.getElementById('caret').classList.add('focus-out')
  }


  /**
  * Handler for when the main area is click
  * sets focus to the textarea and removes focus-out class from caret
  * @param {object} event
  */
  handleMainClick(event){
    document.getElementById('caret').classList.remove('focus-out')
    document.getElementById('main-textarea').focus()
  }


  render(){
    const {
      history
    } = this.props.terminalData

    const historyList = history.map( (item, index) =>
      <EnteredItem
        key={index}
        command={item.command}
        result={item.result}/>
    )

    return(
      <main onClick={this.handleMainClick}>
        {historyList}
        <InputItem
          onChange={this.handleSelection}
          onKeyUp={this.handleSelection}
          onKeyDown={this.handleSelection}
          onBlur={this.handleBlur}/>
      </main>
    )
  }
}


/** React Component representing the input area of the terminal */
const InputItem = (props) => {
  return (
    <div className='input-item'>
      <p>
        <span className='orange'> david </span> at
        <span className='yellow'> Joker </span> in
        <span className='green'> ~/Projects/Udacity/InteractiveResume </span> on
        <span className='purple'> master </span>
      </p>

      <div className='input-area'>
        $<textarea
          spellCheck="false"
          id='main-textarea'
          rows='1'
          onChange={props.onChange}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          onBlur={props.onBlur}>
        </textarea>

        <span id='caret' className='caret focus-out'>A</span>
      </div>
    </div>
  )
}


/** React Component representing the previously entered commands */
const EnteredItem = (props) => {

  return (
    <div className='input-item'>
      <p>
        <span className='orange'> david </span> at
        <span className='yellow'> Joker </span> in
        <span className='green'> ~/Projects/Udacity/InteractiveResume </span> on
        <span className='purple'> master </span>
      </p>

      <div className='input-area'>
        <span className='close left'>[</span>
          $<p>{props.command}</p>
        <span className='close right'>]</span>
      </div>

      <div className='result-area'>
        {props.result}
      </div>

    </div>
  )
}
