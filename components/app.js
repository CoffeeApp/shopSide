import React, { Component } from 'react'
import Banner from './banner'
import Order from './order'
import BusinessDetails from './businessDetails'
import { orderService, shopService } from '../api'
import { map } from 'lodash'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      shops: {},
      currentShop: 1
    }
    this.updateStatus = this.updateStatus.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  componentDidMount() {
    var { currentShop } = this.state
    shopService.find().then(shopsData => {
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
      let temp = this.state.ordersById
      temp[order.order_id] = order
      this.setState({
        ordersById: temp
      })
    })
  }

  changeUser(id) {
    orderService.find({query: {notIn: 'new', shop_id: id}})
    .then(orders => {
      var ordersById = orders.reduce((result, order) => {
        result[order.order_id] = order
        return result
      }, {})
      this.setState({currentShop: id, ordersById: ordersById})
    })
  }

  updateStatus(id, status) {
    let temp = this.state.ordersById
    temp[id].status = status
    this.setState({
      ordersById: temp
    })
    orderService.patch(id, {status: status})
  }

  renderOrders(ordersById) {
    return map(ordersById, (order, i) => {
      return (
          <Order key={i} {...order} updateStatus = {this.updateStatus} />
      )
    })
  }

  render () {
    const {ordersById} = this.state
    if(ordersById) {
      return (
        <div>
          <Banner {...this.state} changeUser={this.changeUser}/>
          <div className="dashboard">
            <BusinessDetails {...this.state}/>
            {this.renderOrders(ordersById)}
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }

}

export default App
