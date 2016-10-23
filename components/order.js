import React, { Component } from 'react'

const newClass = {
  backgroundColor: 'blue',
  color:'red',

}

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
        <div><hr/>
        <button id ={this.props.order_id} className={newClass} type="button" className="btn btn-lg btn-block" onClick= {this.handleStart}>Start</button>

        <button id ={this.props.order_id} className="btn btn-default btn-lg btn-block" onClick = {this.handleComplete}>In Progress</button>

        <button id ={this.props.order_id} className="btn btn-default btn-lg btn-block" onClick = {this.handleComplete}>Order Completed</button>
          {
          coffees.map((coffee, i) => {
            const {qty, sugar, milk, type} = coffee
            return (
              <div key ={i} style={{background: '#3f0000',color:'#ecf0f1',  padding:'20px'}}>
              <hr/>
                <h3>{qty} {qty > 1 ? type + 's' : type}</h3>
                <h3>{sugar} {sugar > 1 ? 'sugars' : 'sugar'} each</h3>
                <h3> {qty > 1 ? 'all with' : 'with'} {milk} milk</h3>
              </div>
            )
          })
        }
      </div>

    )
  }
}


export default Order
