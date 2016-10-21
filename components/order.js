import React, { Component } from 'react'
import OrderItem from './orderItem'

class Order extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('I HAVE PROPS ', this.props)
    return (
      <div>
        <h1>{this.props.order.qty} {this.props.order.type}</h1>
        <h2>{this.props.order.sugar} sugar</h2>
        <h2>{this.props.order.milk} milk</h2>
      </div>
    )
  }
}

export default Order
