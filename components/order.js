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
    const {coffees} = this.props
    return (

      <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-md-4">
      <div style={{background: 'yellow'}}>
        <button id ={this.props.order_id} className="btn btn-primary" type="button" className="btn" onClick= {this.handleStart}>start</button>
        <button id ={this.props.order_id} className="btn btn-default" onClick = {this.handleComplete}>complete</button>
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
      </div>
      </div>
      </div>
    )
  }
}


export default Order
