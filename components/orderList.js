import React, { Component } from 'react'
import Order from './order'

class OrderList extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
      {this.props.currentOrders[0].coffees.map((order, i) => {
        return (
          <ul>
            <li><Order key={i} order={order} /></li>
          </ul>
        )
        })}
      </div>
    )
  }

}

export default OrderList
