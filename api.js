const feathers = require('feathers-client')
const io = require('socket.io-client')

// run off localhost:3030???
const socket = io('http://192.168.1.8:3030/' || 'https://coffee-cloud.herokuapp.com/')



var api = feathers()
.configure(feathers.hooks())
.configure(feathers.socketio(socket));

var orderService = api.service('orders');
var shopService = api.service('shops');

// orderService.on('created', function(order) {
//   console.log('Someone created an order from api', order);
// });

// todoService.create({
//   description: 'An from client'
// });


export {
  api,
  orderService,
  shopService
}
