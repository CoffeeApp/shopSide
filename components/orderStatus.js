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
    const { name, phone, ordered, order_id, status } = this.props
    return (
      <div>
        <h2>{name} {phone}</h2>
        <h4>{moment(ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
        <h3>Order status: <span>{status}</span></h3>
        <button id ={order_id} onClick= {this.handleUpdate} value="started">start</button>
        <button id ={order_id} onClick = {this.handleUpdate} value="ready for collection">ready</button>
        <button id ={order_id} onClick = {this.handleUpdate} value="complete">complete</button>
      </div>
    )
  }
}

export default OrderStatus
