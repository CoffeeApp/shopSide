import React, { Component } from 'react'
import Order from './order'

class OrderList extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('this.props in orderList: ', this.props);
    return (
      <ul>
        <Order name={this.props.name} phone = {this.props.phone} comment = {this.props.comment}/>
      </ul>
    )
  }

}

export default OrderList
