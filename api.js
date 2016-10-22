const feathers = require('feathers-client')
const io = require('socket.io-client')

const socket = io('https://coffee-cloud.herokuapp.com/')

var api = feathers()
.configure(feathers.hooks())
.configure(feathers.socketio(socket));

var orderService = api.service('dumb-orders');

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
