import React from 'react'
import Layout from './Layout'
import Terminal from './Terminal'

export default class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <Layout>
        <Terminal/>
      </Layout>
    )
  }
}
