import React, { Component } from 'react'
import Banner from './banner'
import OrderList from './orderList'
import api from '../api'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('this.props in app: ',this.props);
    return (
      <div>
        <h1>Welcome to {this.props.appName}</h1>
        <Banner />
        <OrderList name={this.props.name} phone = {this.props.phone} comment = {this.props.comment}/>
      </div>
    )
  }

}

export default App
