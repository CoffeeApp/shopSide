import React, { Component } from 'react'
import OrderStatus from './orderStatus'
import Coffee from './coffee'
import { map } from 'lodash'

const coffeeStyle = {
  background: '#3f0000',
  color:'#ecf0f1',
  padding:'50px',
  paddingLeft:'40px'
}

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
    const { coffees } = this.props
    return (
      <div>
        <OrderStatus { ...this.props }/>
        <div className="item" id="coffeeRow">
          {this.renderCoffees(coffees)}
        </div>
      </div>
    )
  }
}


export default Order
