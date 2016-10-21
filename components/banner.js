import React, { Component } from 'react'

class Banner extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {shop_id} = this.props
    return (
      <div>
        <h1>{shop_id}</h1>
        <p>{this.props.milk}</p>
        5 orders
      </div>
    )
  }

}

export default Banner
