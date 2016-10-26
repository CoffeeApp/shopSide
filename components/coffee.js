import React, { Component } from 'react'

function Coffee (props) {
  const {qty, quantity, sugar, milk, type} = props
  return (
      <div className="coffeeOrders">
        <h2>{quantity} x {quantity > 1 ? type + 's' : type}</h2>
          <ul>
            <li className="coffeeSpecs">{milk}</li>
            <li className="coffeeSpecs">{sugar > 0 ? sugar + ' x sugar' : ''}</li>
          </ul>
      </div>
  )
}


export default Coffee
