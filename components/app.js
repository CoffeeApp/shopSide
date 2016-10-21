import React, { Component } from 'react'
import Banner from './banner'
import Order from './order'
import {api, orderService} from '../api'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      currentOrders: [
        {
          "order_id": 1,
          "shop_id": "Fidel's Cafe",
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
            "ordered": "Fri Oct 21 2016 10:39:50 GMT+1300 (NZDT)"
          }
        },
        {
          "order_id": 2,
          "shop_id": "Fidel's Cafe",
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
            "ordered": "Fri Oct 21 2016 10:39:50 GMT+1300 (NZDT)"
          }
        }
      ]
    }
  }

  componentDidMount() {
    orderService.on('created', (order) => {
      console.log('Someone created an order', order);
      this.setState({
        currentOrders: [...this.state.currentOrders, order]
      })
    })
  }

  render () {
    const {currentOrders} = this.state
    return (
      <div>
        <h1>I am App</h1>
        <Banner shop_id={currentOrders[0].shop_id} number={currentOrders.length}/>
        {currentOrders.map((order, i) => {
          return (
            <div key={i}>
              <h2>{order.details.name}</h2>
              <Order {...order} />
            </div>
          )
          })}
      </div>
    )
  }

}

export default App
