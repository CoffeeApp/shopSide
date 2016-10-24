const express = require('express')

const app = express()
var port = process.env.PORT || 3000
app.use(express.static('./'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

module.exports = app
// app.listen( (port) => {
//   console.log('server listening on port: ', port);
// })
