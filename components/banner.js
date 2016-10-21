import React, { Component } from 'react'

class Banner extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <img src="http://placekitten.com/200/300" />
        5 orders
      </div>
    )
  }

}

export default Banner
