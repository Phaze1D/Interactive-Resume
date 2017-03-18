import React from 'react'


export default class Terminal extends React.Component{
  constructor(props){
    super(props)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleSelection(event){
    document.getElementById('caret').style.transform = `translate(${100 * event.target.selectionStart}%, 0)`
  }

  render(){

    return(
      <main>
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
        <span className='yellow'> Joker </span> in
        <span className='green'> ~/Projects/Udacity/InteractiveResume </span> on
        <span className='purple'> master </span>
      </p>

      <div className='input-area'>
        $<textarea
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
