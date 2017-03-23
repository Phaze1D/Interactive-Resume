import React from 'react'
import autosize from 'autosize'
import { connect } from 'react-redux'
import { commandEntered } from 'actions/terminal_actions'


@connect((store) => {
  return {
    terminalData: store.terminalData
  }
})

/** React Component representing the entire terminal */
export default class Terminal extends React.Component{
  constructor(props){
    super(props)
    this.commandM = 1
    this.handleSelection = this.handleSelection.bind(this)
    this.handleEntered = this.handleEntered.bind(this)
    this.handleCommandMovement = this.handleCommandMovement.bind(this)
  }


  componentDidMount() {
    autosize(document.getElementById('main-textarea'))
  }


  componentDidUpdate(prevProps, prevState) {
    this.commandM = this.props.terminalData.history.length

    let prediv = document.getElementsByClassName('input-item')[this.props.terminalData.history.length -1]

    if(!prevProps.terminalData.isFirst){
      if(prediv.clientHeight > window.innerHeight || window.scrollY + prediv.clientHeight > prediv.offsetTop - 64){
        window.scrollTo(0, prediv.offsetTop - 64)
      }else{
        window.scrollTo(0, window.scrollY + prediv.clientHeight)
      }
    }
  }


  /**
  * Handler for OnChange KeyUp and KeyDown
  * @param {object} event - KeyUp || KeyDown || Change  || Click event
  */
  handleSelection(event){

    // if event is keydown and enter key is pressed
    if(event.type === 'keydown' && event.keyCode == 13){
      this.handleEntered(event)

    // if event is keyup and the up or down arrows are pressed
    }else if(event.type === 'keyup' && (event.keyCode == 38 || event.keyCode == 40) ){
      this.handleCommandMovement(event)
    }

    document.getElementById('caret').style.transform = `translate(${100 * (event.target.selectionStart+1)}%, 0)`

  }


  /**
  * Handler for when the enter key is pressed
  * Dispatches the commandEntered action
  * @param {object} event - KeyDown event
  */
  handleEntered(event){
    event.preventDefault()
    this.props.dispatch(commandEntered(event.target.value))
    event.target.value = ''
    event.target.selectionStart = 0
  }


  /**
  * Handler for when the up or down arrow keys are pressed
  * @param {object} event - KeyUp event
  */
  handleCommandMovement(event){
    if(event.keyCode == 38 && this.commandM > 0){
      this.commandM--
      event.target.value = this.props.terminalData.history[this.commandM].command
      event.target.selectionStart = this.props.terminalData.history[this.commandM].command.length
    }

    if(event.keyCode == 40 && this.commandM < this.props.terminalData.history.length){
      this.commandM++
      if(this.commandM == this.props.terminalData.history.length){
        event.target.value = ''
      }else{
        event.target.value = this.props.terminalData.history[this.commandM].command
      }
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
        <iframe
          id='pdf'
          name='pdf'
          type='pdf'
          src={require('Resume1.pdf')}/>

        <div className='content'>
          {historyList}
          <InputItem
            onChange={this.handleSelection}
            onKeyUp={this.handleSelection}
            onKeyDown={this.handleSelection}
            onClick={this.handleSelection}
            onBlur={this.handleBlur}/>
        </div>
      </main>
    )
  }
}


/** React Component representing the input area of the terminal */
const InputItem = (props) => {
  return (
    <div className='input-item with-input'>
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
          onClick={props.onClick}
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
