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
            "ordered": "Fri Oct 21 2016 10:39:50 GMT+1300 (NZDT)"
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
            "ordered": "Fri Oct 21 2016 10:39:50 GMT+1300 (NZDT)"
          }
        }
      }
    }
  }

  componentDidMount() {
    orderService.on('created', (order) => {
      console.log('Someone created an order', order);
      let temp = this.state.ordersById
      console.log('temp before ', temp);
      temp[order.name] = order
      console.log('temp after ', temp);
      this.setState({
        ordersById: temp
      })
    })
  }

  updateStatus() {
    console.log('Update status')
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
