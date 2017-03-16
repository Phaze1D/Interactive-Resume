import React from 'react'


export default class DropDown extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className='dropdown'>
        <div className='glass'>
          <ul className={'menu-list ' + this.props.menuClass}>
            {this.props.children}
          </ul>
        </div>
      </div>
    )
  }
}
