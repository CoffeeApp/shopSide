import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/app'
import {api, orderService} from './api'

class OrderState extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      comment: ''
    }
  }

  componentDidMount() {
    orderService.on('created', (order) => {
      console.log('Someone created an order', order);
      this.setState({
        name: order.name,
        phone: order.phone,
        comment: order.comment
      })
    })
  }

  render() {
    console.log('this.state: ', this.state);
    return (
      <App appName='Coffee App' name= {this.state.name} phone= {this.state.phone} comment= {this.state.comment}/>
    )
  }
}

render(<OrderState />, document.querySelector('main'))
console.log('welcome to coffeeAppShopSide')

export default OrderState
