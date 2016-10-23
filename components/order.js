import React, { Component } from 'react'
import OrderStatus from './orderStatus'

const newClass = {
  backgroundColor: 'blue',
  color:'red',

}

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
              <div key ={i} style={{background: '#3f0000',color:'#ecf0f1',  padding:'50px',paddingLeft:'40px'}}>
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
