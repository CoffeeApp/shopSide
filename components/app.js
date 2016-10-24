import React, { Component } from 'react'
import Banner from './banner'
import Order from './order'
import {api, orderService, shopService} from '../api'
import { map, groupBy } from 'lodash'
import moment from 'moment'
class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      ordersById: {}, // replace with empty data structures
      currentShop: 1
    }
    this.updateStatus = this.updateStatus.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  componentDidMount() {
    var { currentShop } = this.state
    shopService
      .find()  // chained funtion on new line
      .then(shopsData => {
        var s = groupBy(shopsData.data, 'order_id') // investigate groupBY
        var shops = shopsData.data.reduce((result, shop) => {
        result[shop.id] = shop
        return result
      }, {})
      this.setState({shops: shops})
    })
    orderService.find({query: {notIn: 'new', shop_id: currentShop}}).then(orders => {
      var ordersById = orders.reduce((result, order) => {
        result[order.order_id] = order
        return result
      }, {})
      this.setState({ordersById: ordersById})
    })

    orderService.on('patched', (order) => {
      const ordersById = this.state.ordersById
      ordersById[order.order_id] = order
      this.setState({ ordersById })
    })
  }

  changeUser(shop_id) {
    orderService.find({query: {notIn: 'new', shop_id }}) // use 1 name for variable, leverage shorthand
    .then(orders => {
      var ordersById = orders.reduce((result, order) => { // groupBy id
        result[order.order_id] = order
        return result
      }, {})
      this.setState({currentShop: shop_id, ordersById })
    })
  }

  updateStatus(id, status) {
    // as above 
    let temp = this.state.ordersById
    temp[id].status = status
    this.setState({
      ordersById: temp
    })
    orderService.patch(id, {status: status})
  }

  renderOrders(ordersById) {
    return map(ordersById, (order, id) => {
      return <Order {...order} updateStatus ={this.updateStatus} />
    })
  }

  render () {
    // good use of destructuring
    const {ordersById, shops, currentShop} = this.state

    return (
      <div>
        <Banner  
          number={Object.keys(ordersById).length} 
          changeUser={this.changeUser} 
          shops={shops} 
          currentShop={currentShop}/>
          {this.renderOrders(ordersById)}
      </div>
    )
  }

}

export default App
