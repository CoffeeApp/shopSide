import React, { Component } from 'react'
import { banner, image, currentOrders, text } from '../styles/bannerStyle'
import { map } from 'lodash'
import moment from 'moment'

class Banner extends Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.props.changeUser(e.target.value)
  }

  render () {
    const {ordersById, number, shops, currentShop} = this.props
    return (
      <div>
        <img id="shopImageElem" style={{maxHeight: 200}} src={shops[currentShop].image}/>
        <h1 id="currentShopNameElem">{shops[currentShop].name}</h1>
        <select id="great-names" onChange={this.handleChange}>
          {map(shops, (shop, i) => {
            return <option value={shop.id} key={i}>
              {shop.name}
            </option>
            })}
        </select>
        <h2 id="totalOrdersElem">Total orders: {Object.keys(ordersById).length}</h2>
      </div>
    )
  }

}

export default Banner
