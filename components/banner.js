import React, { Component } from 'react'
import { banner, image, currentOrders, text } from '../styles/bannerStyle'
import { map } from 'lodash'

class Banner extends Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.changeUser(e.target.value)
  }

  render () {
    const {number, shops, currentShop} = this.props
    return (
      <div>
      <select id="great-names" onChange={this.handleChange}>

      {map(shops, (shop, i) => {
        return <option value={shop.id} key={i}>
          {shop.name}
        </option>
        })}

      </select>
        <h1>{}</h1>
        <img src="http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg" />
        <h2>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
