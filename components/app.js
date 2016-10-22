import React, { Component } from 'react'
import Banner from './banner'
import Order from './order'
import {api, orderService} from '../api'
import { map } from 'lodash'

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
  }

  startOrder(id) {
    console.log('I am startOrder in app.js with id:', id);
  }
  completeOrder(id) {
    console.log('I am completeOrder in app.js with id: ', id);
  }

  render () {
    const {ordersById} = this.state
    return (
      <div>
        <h1>I am App</h1>
        <Banner shop_id={ordersById[1].shop_id} number={Object.keys(ordersById).length}/>
        {map(ordersById, (order, id) => {
          return (
            <div key={id}>
              <h2>{order.details.name} {order.details.phone}</h2>
              <h4>{order.details.ordered}</h4>
              <Order order_id ={order.order_id} coffees ={order.coffees} startOrder ={this.startOrder} completeOrder ={this.completeOrder}/>
            </div>
          )
          })}
      </div>
    )
  }

}

export default App
