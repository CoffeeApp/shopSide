const {ordersById} = this.state
return (
  <div className="container-fluid">
      <div className="row">
        <div className="col-xs-4 col-md-4">
    <Banner shop_id={ordersById[1].shop_id} number={Object.keys(ordersById).length}/>
    </div>

    <div className="col-xs-8 col-md-8">
    {map(ordersById, (order, id) => {
      return (
        <div key={id} style={{textAlign:'left',}}>
          <h3>Customer's name: {order.name}</h3>
          <h3>Phone number: {order.phone}</h3>
          <h4>Time Ordered: {moment(order.ordered).format('MMMM Do YYYY, h:mm:ss a')}</h4>
          <h4>Order Status: {order.status}</h4>
          <hr/>
          <Order order_id ={order.order_id} coffees ={order.coffees} startOrder ={this.startOrder} completeOrder ={this.completeOrder}/>
          <hr/>
        </div>
      )
      })}
      </div>
        </div>
  </div>
)
