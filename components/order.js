import React, { Component } from 'react'

const Order = ({coffees, status}) => {

  console.log('I HAVE PROPS ', coffees, status)
  return (
    <div>
      {
        coffees.map((coffee, i) => {
          const {qty, sugar, milk, type} = coffee
          return (
            <div key={i}>
              <h1>{qty} {type}</h1>
              <h2>{sugar} sugar</h2>
              <h2>{milk} milk</h2>
              <button>Press me</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Order
