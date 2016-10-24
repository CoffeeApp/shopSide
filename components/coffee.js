import React, { Component } from 'react'

function Coffee (props) {
  const {qty, sugar, milk, type} = props
  return (
    <div style={{
      background: '#3f0000',
      color:'#ecf0f1',
      padding:'50px',
      paddingLeft:'40px'
    }}>
      <h3>{qty} {qty > 1 ? type + 's' : type}</h3>
      <h3>{sugar} {sugar > 1 ? 'sugars' : 'sugar'} each</h3>
      <h3> {qty > 1 ? 'all with' : 'with'} {milk} milk</h3>
    </div>
  )
}


export default Coffee
