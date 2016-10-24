import React, { Component } from 'react'

function Coffee (props) {
  const {quantity, sugar, milk, type, note} = props
  return (
    <div style={{
      background: '#3f0000',
      color:'#ecf0f1',
      padding:'50px',
      paddingLeft:'40px'
    }}>
      <h3>{quantity} {quantity > 1 ? type + 's' : type}</h3>
      <ul style={{listStyleType: 'none'}}>
        <li><h3>{sugar > 0 ? (sugar > 1 ? `${sugar} sugars each` : `${sugar} sugar each`) : ''} </h3></li>
        <li><h3> {quantity > 1 ? 'all with' : 'with'} {milk} milk</h3></li>
        <li><h3> { note && note.length > 0 ? `Note: ${note}` : ''}</h3></li>
      </ul>
      <hr />
    </div>
  )
}


export default Coffee
