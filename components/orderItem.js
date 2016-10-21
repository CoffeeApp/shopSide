import React, { Component } from 'react'

class OrderItem extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('order Item', this.props)
    return (
        <h2>I am an order item</h2>
      )
  }
}

export default OrderItem
