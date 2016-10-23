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
      ordersById: {
        1: {
          "order_id": 1,
          "shop_id": "Fidel's Cafe",
          "name": "Jeremy",
          "phone": "021 225 555",
          "status": 'new',
          "coffees": [
            {
              "type": "flat white",
              "qty": 1,
              "milk": "trim",
              "sugar": 1
            },
            {
              "type": "americano",
              "qty": 2,
              "milk": "soy",
              "sugar": 0
            }
          ]
        },
        2:  {
          "order_id": 2,
          "shop_id": "Fidel's Cafe",
          "name": "Jessica",
          "phone": "021 225 555",
          "status": 'new',
          "coffees": [
            {
              "type": "flat white",
              "qty": 1,
              "milk": "trim",
              "sugar": 1
            },
            {
              "type": "americano",
              "qty": 2,
              "milk": "soy",
              "sugar": 100
            }
          ]
        }
      }
    }
    this.startOrder = this.startOrder.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
  }

  componentDidMount() {
    orderService.find().then(orders => {
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

  startOrder(id) {
    console.log('I am startOrder in app.js with id:', id);
    let temp = this.state.ordersById
    temp[id].status = 'started'
    this.setState({
      ordersById: temp
    })
    orderService.patch(id, {status: 'started'}, (err, res) => {
      console.log('err: ', err);
      console.log('res: ', res);
    })
  }
  completeOrder(id) {
    console.log('I am completeOrder in app.js with id: ', id);
    let temp = this.state.ordersById
    temp[id].status = 'completed'
    this.setState({
      ordersById: temp
    })
    console.log(this.state);
  }

  render () {
    const {ordersById} = this.state
    return (
      <div className="container-fluid">
          <div className="row">
            <div className="col-xs-4 col-md-4">
        <Banner shop_id={ordersById[1].shop_id} number={Object.keys(ordersById).length}/>
        </div>

        <div className="col-xs-8 col-md-8">
        {map(ordersById, (order, id) => {
          return (
            <div key={id} style={{textAlign:'left',}}>
              <h3>Customer's name: {order.name}</h3>
              <h3>Phone number: {order.phone}</h3>
              <h4>Time Ordered: {moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
              <h4>Order Status: {order.status}</h4>
              <hr/>
              <Order order_id ={order.order_id} coffees ={order.coffees} startOrder ={this.startOrder} completeOrder ={this.completeOrder}/>
              <hr/>
            </div>
          )
          })}
          </div>
            </div>
      </div>
    )
  }

}

export default App
