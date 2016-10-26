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
    const { name, phone, ordered, order_id, status, ready_time } = this.props
    return (
      <div className="item">
        <div className="contactDetails">
          <h2><span className="fontColor">Name:</span> {name}</h2>
          <h2><span className="fontColor">Telephone:</span> {phone}</h2>
          <h4><span className="fontColor">Ordered:</span> {moment(ordered).format('h:mm a, MMMM Do YYYY')}</h4>
        </div>
        <div className="orderStatus">
          <h3><span className="fontColor">Pick up:</span> {ready_time}</h3>
          <h3><span className="fontColor">Order status:</span> <span>{status}</span></h3>
          <button className="button" id={order_id} onClick={this.handleUpdate} value="NEW">RESET</button>
          <button className="button" id={order_id} onClick={this.handleUpdate} value="IN PROGRESS">START</button>
          <button className="button" id={order_id} onClick={this.handleUpdate} value="READY">READY</button>
          <button className="button" id={order_id} onClick={this.handleUpdate} value="COMPLETE">COMPLETE</button>
        </div>
      </div>
    )
  }
}

export default OrderStatus
