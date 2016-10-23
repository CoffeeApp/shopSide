import React, { Component } from 'react'
import OrderStatus from './orderStatus'

class Order extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {coffees} = this.props
    return (
      <div style={{background: 'yellow'}}>
        <OrderStatus order_id ={this.props.order_id}  status ={this.props.status} updateStatus ={this.props.updateStatus}/>
        <h3>Status: <span>{this.props.status}</span></h3>
        {
          coffees.map((coffee, i) => {
            const {qty, sugar, milk, type} = coffee
            return (
              <div key ={i} style={{background: 'pink'}}>
                <h1>{qty} {type}</h1>
                <h2>{sugar} sugar</h2>
                <h2>{milk} milk</h2>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Order
