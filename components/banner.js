import React, { Component } from 'react'

class Banner extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log('BANNER: ', this.props);
    const {shop_id, number} = this.props
    return (
      <div>
        <h1>{shop_id}</h1>
        <h2>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
