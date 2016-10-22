import React, { Component } from 'react'

class Order extends Component {
  constructor(props) {
    super(props)
    this.handleStart = this.handleStart.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }

  handleStart(e) {
    console.log('i pressed start: ', e)
    this.props.startOrder()
  }

  handleComplete(e) {
    console.log('I pressed complete ', e)
    this.props.completeOrder()
  }

  render() {
    console.log('I HAVE PROPS ', this.props.startOrder)
    const {coffees} = this.props
    return (
      <div>
        <button  onClick= {this.handleStart}>start</button>
        <button onClick = {this.handleComplete}>complete</button>
        {
          coffees.map((coffee, i) => {
            const {qty, sugar, milk, type} = coffee
            return (
              <div key ={i}>
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
