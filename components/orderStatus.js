import React, { Component } from 'react'


// refactor to a stateless functional component
// const OrderStatus = ({order_id, updateStatus}) => ( re
// not a biggy
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
        <button id ={this.props.order_id} 
        onClick = {() => updateStatus()} value="complete">complete</button>
      </div>
    )
  }
}

export default OrderStatus
