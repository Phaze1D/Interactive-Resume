import React from 'react'
import MenuBar from 'components/MenuBar'



export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <MenuBar/>
        {this.props.children}
      </div>
    )
  }
}
