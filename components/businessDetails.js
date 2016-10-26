import React from 'react'

function BusinessDetails (props) {
  const { shops, currentShop, ordersById } = props
  const results = shops[currentShop].address.split(',')
    return (
    <div className="item" id="businessDetails">
      <div className="contactDetails">
        <img className="businessLogo" id="shopImageElem" src={shops[currentShop].image}/>
        <h1 id="currentShopNameElem">{shops[currentShop].name}</h1>
        <h2><span className="redColor" id="totalOrdersElem">{Object.keys(ordersById).length}</span> coffee orders pending</h2>
      </div>
       <div className="orderStatus" id="businessAddress">
        <h4>{shops[currentShop].name}</h4>
          {results.map((line, i) => {
            return (
              <h4 key={i}>{line}</h4>
            )
          })}
       </div>
    </div>
  )
}

export default BusinessDetails
