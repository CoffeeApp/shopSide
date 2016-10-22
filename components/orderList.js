import React, { Component } from 'react'
import Order from './order'

class OrderList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("HELLO ", this.props.order)
    const order = this.props
    console.log('This is order ', order)
    return (
      <div>
        <h2>{order.order.name} {order.order.phone}</h2>
        <h4>{order.order.ordered}</h4>
        <Order order={order} startOrder ={this.props.startOrder} completeOrder ={this.props.completeOrder}/>
      </div>
    )
  }
}

export default OrderList
