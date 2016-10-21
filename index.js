import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/app'
import {api, orderService} from './api'

class OrderState extends Component {

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

  render() {
    console.log('this.state: ', this.state);
    return (
      <App appName='Coffee App' currentOrders = {this.state.currentOrders} />
    )
  }
}

render(<OrderState />, document.querySelector('main'))
console.log('welcome to coffeeAppShopSide')

export default OrderState
