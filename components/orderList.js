import React, { Component } from 'react'
import Order from './order'

class OrderList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("HELLO ", this.props.order)
    const order = this.props
    return (
      <div>
        <h2>{order.name} {order.phone}</h2>
        <h4>{order.ordered}</h4>
        <Order order_id ={order.order_id} coffees ={order.coffees} startOrder ={this.props.startOrder} completeOrder ={this.props.completeOrder}/>
      </div>
    )
  }
}

export default OrderList
