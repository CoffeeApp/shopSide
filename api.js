const feathers = require('feathers-client')
const io = require('socket.io-client')

const socket = io('http://192.168.1.8:3030/')

var api = feathers()
.configure(feathers.hooks())
.configure(feathers.socketio(socket));

var orderService = api.service('orders');

// orderService.on('created', function(order) {
//   console.log('Someone created an order from api', order);
// });

// todoService.create({
//   description: 'An from client'
// });


export {
  api,
  orderService
}
