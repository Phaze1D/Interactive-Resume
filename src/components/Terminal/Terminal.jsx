import React from 'react'
import autosize from 'autosize'


export default class Terminal extends React.Component{
  constructor(props){
    super(props)
    this.handleSelection = this.handleSelection.bind(this)
  }

  componentDidMount() {
    autosize(document.getElementById('main-textarea'))
  }

  handleSelection(event){
    document.getElementById('caret').style.transform = `translate(${100 * event.target.selectionStart}%, 0)`
  }

  handleMainClick(event){
    document.getElementById('main-textarea').focus()
  }

  render(){

    return(
      <main onClick={this.handleMainClick}>
          <InputItem
            onChange={this.handleSelection}
            onKeyUp={this.handleSelection}
            onKeyDown={this.handleSelection}/>
      </main>
    )
  }
}


const InputItem = (props) => {
  return (
    <div className='input-item'>
      <p>
        <span className='orange'> david </span> at
        <span className='yellow'> The Beast </span> in
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
          onKeyDown={props.onKeyDown}>
        </textarea>

        <span id='caret' className='caret'>A</span>
      </div>
    </div>
  )
}

// <textarea></textarea>
  // <div className='caret'></div>
