import React from 'react'
import MenuBar from '../MenuBar'



export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div>
        <MenuBar/>
      </div>
    )
  }
}
