import React, { Component } from 'react'
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
        <h1>{shops[currentShop].name}</h1>
        <img style={{maxHeight: 200}} src={shops[currentShop].image} />
        <h2>Total orders: {number}</h2>
      </div>
    )
  }

}

export default Banner
