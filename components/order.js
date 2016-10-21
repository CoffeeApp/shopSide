import React, { Component } from 'react'

class Order extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('this.props in order: ', this.props);
    return (
      <div>
        {this.props.name}
        {this.props.phone}
        {this.props.comment}
      </div>
    )
  }

}

export default Order
