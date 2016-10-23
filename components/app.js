import React, { Component } from 'react'
import Banner from './banner'
import Order from './order'
import {api, orderService} from '../api'
import { map } from 'lodash'
import moment from 'moment'
class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentShop: 1
    }
    this.updateStatus = this.updateStatus.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  componentDidMount() {
    var { currentShop } = this.state
    orderService.find({query: {notIn: 'new', shop_id: currentShop}}).then(orders => {
      var ordersById = orders.reduce((result, order) => {
        result[order.order_id] = order
        return result
      }, {})
      this.setState({ordersById: ordersById})
    })
    orderService.on('created', (order) => {
      console.log('Someone created an order', order);
      let temp = this.state.ordersById
      temp[order.name] = order
      console.log('temp: ', temp)
      this.setState({
        ordersById: temp
      })
      console.log('STATE --> ',this.state);
    })
    orderService.on('patched', (order) => {
      console.log('client has received status: ', order);
    })
  }

  changeUser(id) {
    console.log('changed to shop : ', id);
    orderService.find({query: {notIn: 'new', shop_id: id}})
    .then(orders => {
      var ordersById = orders.reduce((result, order) => {
        result[order.order_id] = order
        return result
      }, {})
      this.setState({currentShop: id, ordersById: ordersById})
    })
    console.log('AFTER', 'query ', id, 'shop', this.state.currentShop)
  }

  updateStatus(id, status) {
    let temp = this.state.ordersById
    temp[id].status = status
    this.setState({
      ordersById: temp
    })
    orderService.patch(id, {status: status})
  }

  render () {
    const {ordersById} = this.state
    console.log('RENDER', 'shop', this.state.currentShop)
    if(ordersById) {
      return (
        <div>
          <Banner  number={Object.keys(ordersById).length} changeUser={this.changeUser} shop_id={this.state.shop_id}/>
          {map(ordersById, (order, id) => {
            return (
              <div key={id} style={{background: 'lightblue'}}>
                <h2>{order.name} {order.phone}</h2>
                <h4>{moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                <Order order_id ={order.order_id} coffees ={order.coffees} status ={order.status} updateStatus ={this.updateStatus} />
              </div>
            )
            })}
        </div>
      )
    }
    return <div></div>
  }

}

export default App
