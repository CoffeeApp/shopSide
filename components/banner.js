import React, { Component } from 'react'
import { banner, image, select, text, current, imageCon } from '../styles/bannerStyle'
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
    console.log('shops: ',shops);
    return (
      <div>
      <select id="great-names" style={select} onChange={this.handleChange}>
      {map(shops, (shop, i) => {
        return <option value={shop.id} key={i}>
          {shop.name}
        </option>
        })}

      </select>
        <h1 style={current}>{shops[currentShop].name}</h1>
        <div style={imageCon}>
          <img style={image} src="http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg" />
        </div>
        <h2 style={current}>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
