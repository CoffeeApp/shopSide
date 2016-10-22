import React, { Component } from 'react'
import Banner from './banner'
import OrderList from './orderList'
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
          "price": 6.00,
          "name": "Jeremy",
          "phone": "021 225 555",
          "ordered": "10:39:50"
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
          "price": 6.00,
          "name": "Jessica",
          "phone": "021 225 555",
          "ordered": "11:39:50"

        }
      }
    }
    this.startOrder = this.startOrder.bind(this)
    this.completeOrder = this.completeOrder.bind(this)
  }

  componentDidMount() {
    orderService.find().then(orders => {
      console.log(orders);
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
  }

  startOrder(id) {
    console.log('I am startOrder in app.js with id:', id);
    let temp = this.state.ordersById
    temp[id].status = 'started'
    this.setState({
      ordersById: temp
    })
    console.log(this.state);
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
        <h1>I am App</h1>
        <Banner shop_id={ordersById[1].shop_id} number={Object.keys(ordersById).length}/>
        {map(ordersById, (order, id) => {
            return (
              <div key={id} style={{background: 'lightblue'}}>
                <OrderList order={order} startOrder ={this.startOrder} completeOrder ={this.completeOrder} />
              </div>
            )
          })}
      </div>
    )
  }

}

export default App
