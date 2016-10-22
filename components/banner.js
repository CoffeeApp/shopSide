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
        <img src="http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg" />
        <h2>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
