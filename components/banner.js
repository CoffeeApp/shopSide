import React, { Component } from 'react'

class Banner extends Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.changeUser(e.target.value)
  }

  render () {
    const {shop_name, number} = this.props
    return (
      <div>
      <select id="great-names" onChange={this.handleChange}>
        <option value="1">
          Fidel's Cafe
        </option>

        <option value="2">
          Raglan Roast
        </option>

        <option value="3">
          Havana Bar
        </option>

        <option value="4">
          Laundry
        </option>

        <option value="5">
          Southern Cross
        </option>
      </select>
        <h1>{shop_name}</h1>
        <img src="http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg" />
        <h2>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
