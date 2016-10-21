import React, { Component } from 'react'
import Order from './order'

class OrderList extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('orders array', orders);
    return (
      <div>
        
      </div>
    )
  }

}
// {this.props.currentOrders[0].coffees.map((order, i) => {
//   return (
//     <ul key={i}>
//       <li><Order order={order}/></li>
//     </ul>
//   )
//   })}
export default OrderList
