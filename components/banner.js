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
      <div className="banner">
        <div className="row">
          <span className="logo">Caffeinati</span>
        </div>
        <div className="row">
          <div className="searchbarcontainer">
            <select className="searchbar" onChange={this.handleChange}>
              {map(shops, (shop, i) => {
                return <option value={shop.id} key={i}>
                  {shop.name}
                </option>
                })}
            </select>
          </div>
        </div>
      </div>
    )
  }

}

export default Banner

// <div className="row">
//   <div className="searchbarcontainer">
// <img style={{maxHeight: 200}} src={shops[currentShop].image}/>
// <h1>{shops[currentShop].name}</h1>
//
// <h2>Total orders: {Object.keys(ordersById).length}</h2>
