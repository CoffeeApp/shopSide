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
          ],
          "details": {
            "price": 6.00,
            "name": "Jeremy",
            "phone": "021 225 555",
            "ordered": "10:39:50"
          }
        },
        2:  {
          "order_id": 2,
          "shop_id": "Fidel's Cafe",
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
          ],
          "details": {
            "price": 6.00,
            "name": "Jessica",
            "phone": "021 225 555",
            "ordered": "11:39:50"
          }
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

  changeUser(user) {
    console.log('I am in app.js', user)
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
      <div>
        <Banner shop_id={ordersById[1].shop_id} number={Object.keys(ordersById).length} changeUser={this.changeUser}/>
        {map(ordersById, (order, id) => {
          return (
            <div key={id} style={{background: 'lightblue'}}>
              <h2>{order.name} {order.phone}</h2>
              <h4>{moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
              <Order order_id ={order.order_id} coffees ={order.coffees} startOrder ={this.startOrder} completeOrder ={this.completeOrder}/>
            </div>
          )
          })}
      </div>
    )
  }

}

export default App
