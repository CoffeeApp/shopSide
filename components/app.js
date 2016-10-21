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
        <h1>{this.props.appName}</h1>
        <Banner shop_id={this.props.currentOrders[0].shop_id}/>
        <OrderList currentOrders={this.props.currentOrders}/>
      </div>
    )
  }

}

export default App
