import React, { Component } from 'react'
import { banner, image, currentOrders, text } from '../styles/bannerStyle'

class Banner extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const {shop_id, number} = this.props
    return (
      <div style={banner}>
        <h1 style={text}>Coffee App</h1>
        <hr/>
        <h3 style={text}>{shop_id}</h3>
        <img style={image} src="http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg" />
        <hr/>
        <h2 style={currentOrders}>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
