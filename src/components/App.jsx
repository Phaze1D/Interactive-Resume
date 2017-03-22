import React from 'react'
import Layout from 'components/Layout'
import Terminal from 'components/Terminal'

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
