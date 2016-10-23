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
    console.log('BANNER: ', this.props);
    const {shop_id, number} = this.props
    return (
      <div>
      <select id="great-names" onChange={this.handleChange}>
        <option value="Fidel's Cafe">
          Fidels Cafe
        </option>

        <option value="Raglan Roast">
          Raglan Roast
        </option>

        <option value="Havana">
          Havana
        </option>
      </select>
        <h1>{shop_id}</h1>
        <img src="http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg" />
        <h2>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
