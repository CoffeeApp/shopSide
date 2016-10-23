import React, { Component } from 'react'
import Banner from './banner'
import Order from './order'
import {api, orderService, shopService} from '../api'
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
    shopService.find().then(shopsData => {
      var shops = shopsData.data.reduce((result, shop) => {
        result[shop.id] = shop
        return result
      }, {})
      this.setState({shops: shops})
      console.log('componentDidMount (after setState): ', this.state.shops);
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

  render () {
    const {ordersById, shops, currentShop} = this.state
    console.log('shops in app.js: ', shops);
    if(ordersById) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-4 col-md-4">
              <Banner  number={Object.keys(ordersById).length} changeUser={this.changeUser} shops={shops} currentShop={currentShop}/>
            </div>
              <div className="col-xs-2 col-md-2" style={{}}>
              {map(ordersById, (order, id) => {
                if(order.status == 'received')
                return (
                  <div key={id}>
                    <h2>{order.name} {order.phone}</h2>
                    <h4>{moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                    <Order order_id ={order.order_id} coffees ={order.coffees} status ={order.status} updateStatus ={this.updateStatus} />
                  </div>
                    )
                  })}
               </div>
               <div className="col-xs-2 col-md-2" style={{}}>
               {map(ordersById, (order, id) => {
                 if(order.status == 'started')
                 return (
                   <div key={id}>
                     <h2>{order.name} {order.phone}</h2>
                     <h4>{moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                     <Order order_id ={order.order_id} coffees ={order.coffees} status ={order.status} updateStatus ={this.updateStatus} />
                   </div>
                     )
                   })}
                </div>
               <div className="col-xs-2 col-md-2" style={{}}>
               {map(ordersById, (order, id) => {
                 if(order.status == 'ready for collection')
                 return (
                   <div key={id}>
                     <h2>{order.name} {order.phone}</h2>
                     <h4>{moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                     <Order order_id ={order.order_id} coffees ={order.coffees} status ={order.status} updateStatus ={this.updateStatus} />
                   </div>
                     )
                   })}
                </div>
                <div className="col-xs-2 col-md-2" style={{}}>
                {map(ordersById, (order, id) => {
                  if(order.status == 'complete')
                  return (
                    <div key={id}>
                      <h2>{order.name} {order.phone}</h2>
                      <h4>{moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                      <Order order_id ={order.order_id} coffees ={order.coffees} status ={order.status} updateStatus ={this.updateStatus} />
                    </div>
                      )
                    })}
                 </div>
          </div>
        </div>
      )
    }
    return <div></div>
  }
}

export default App
