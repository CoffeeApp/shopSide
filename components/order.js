import React, { Component } from 'react'
import OrderStatus from './orderStatus'

const newClass = {
  backgroundColor: 'blue',
  color:'red',

}

// refactor to a stateless functional

class Order extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      coffees, 
      phone, 
      ordered, 
      order_id, 
      status, 
      name, 
      updateStatus} = this.props

    // reafactor an place inside OrderStatus
    // Decide on a single styling solution per repo? or project?
    return (
      <div key={id} style={{background: 'lightblue'}}>
        <h2>{name} {phone}</h2>
        <h4>{moment(ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
        <div style={{background: 'yellow'}}>
        <OrderStatus
          order_id={order_id}  
          status={status} 
          updateStatus ={updateStatus}/>
        <h3>Status: <span>{status}</span></h3>
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
      </div>

    )
  }
}


export default Order
