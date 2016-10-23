import React, { Component } from 'react'

class OrderStatus extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(e) {
    this.props.updateStatus(e.target.id, e.target.value)
  }

  render() {
    return (
      <div>
        <button id ={this.props.order_id} onClick= {this.handleUpdate} value="started">start</button>
        <button id ={this.props.order_id} onClick = {this.handleUpdate} value="ready for collection">ready</button>
        <button id ={this.props.order_id} onClick = {this.handleUpdate} value="complete">complete</button>
      </div>
    )
  }
}

export default OrderStatus
