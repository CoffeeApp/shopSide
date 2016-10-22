import React, { Component } from 'react'

class Order extends Component {
  constructor(props) {
    super(props)
    this.handleStart = this.handleStart.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }

  handleStart(e) {
    console.log('i pressed start: ', e.target.id)
    this.props.startOrder(e.target.id)
  }

  handleComplete(e) {
    console.log('I pressed complete ', e.target.id)
    this.props.completeOrder(e.target.id)
  }

  render() {
    console.log('I HAVE PROPS ', this.props.order_id)
    const {order} = this.props
    console.log('order.js ', order)
    consoel.log('quantity ', {order.coffees.qty})
    return (
      <div style={{background: 'yellow'}}>
        <button id ={this.props.order_id} onClick= {this.handleStart}>start</button>
        <button id ={this.props.order_id} onClick = {this.handleComplete}>complete</button>
        {
          coffees.map((coffee, i) => {
            const {qty, sugar, milk, type} = {order.coffee}
            return (
              <div key ={i} style={{background: 'pink'}}>
                <h1>{order.order.coffees.qty} {type}</h1>
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
