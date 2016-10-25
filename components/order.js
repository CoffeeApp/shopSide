import React, { Component } from 'react'
import OrderStatus from './orderStatus'
import Coffee from './coffee'
import { map } from 'lodash'

class Order extends Component {
  constructor(props) {
    super(props)
  }

  renderCoffees(coffees) {
    return map(coffees, (coffee, i) => {
      return (
        <div key={i}>
          <Coffee {...coffee} />
        </div>
      )
    })
  }

  render () {
    console.log("NEW PROPS", this.props)
    const { coffees } = this.props
    return (
      <div>
        <OrderStatus { ...this.props }/>
        {this.renderCoffees(coffees)}
      </div>
    )
  }
}


export default Order
