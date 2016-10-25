import React, { Component } from 'react'
import moment from 'moment'

class OrderStatus extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(e) {
    this.props.updateStatus(e.target.id, e.target.value)
  }

  render() {
    const { name, phone, comment, ordered, ready_time, order_id, status } = this.props
    return (
      <div>
        <h2>Name: {name}</h2>
        <h2>Phone: {phone}</h2>
        <h2>Notes: {comment}</h2>
        <h4>Ordered: {moment(ordered).format('h:mm a')}</h4>
        <h4>Pick up: {ready_time}</h4>
        <h3>Order status: <span>{status}</span></h3>
        <button id ={order_id} onClick= {this.handleUpdate} value="NEW">RESET</button>
        <button id ={order_id} onClick= {this.handleUpdate} value="IN PROGRESS">START</button>
        <button id ={order_id} onClick = {this.handleUpdate} value="READY">READY</button>
        <button id ={order_id} onClick = {this.handleUpdate} value="COMPLETE">COMPLETE</button>
      </div>
    )
  }
}

export default OrderStatus
